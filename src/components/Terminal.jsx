import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePortfolio } from "../data/PortfolioContext";
import Icon from "./Icon";
import { mailHref } from "./links";

const PAGES = { home: "/", resume: "/resume", projects: "/projects" };

function Row({ k, children }) {
  return (
    <div className="t-grid">
      <span className="t-key">{k}</span>
      <span>{children}</span>
    </div>
  );
}

function Out({ href, children }) {
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <span className="t-dim">{children} (not set)</span>
  );
}

function buildCommands(data, navigate) {
  const { profile, skills, experience, education, achievements, certifications, profiles, projects, por = [] } = data;
  const { links } = profile;

  const commands = {
    about: {
      desc: "Who I am",
      run: () => [`${profile.name}, ${profile.role} in ${profile.location}.`, `${profile.intro} ${profile.affiliation}.`, profile.statusLine],
    },
    skills: {
      desc: "Languages, technologies and tools",
      run: () => [
        <Row key="l" k="languages">{skills.languages.join(", ")}</Row>,
        <Row key="t" k="technologies">{skills.technologies.join(", ")}</Row>,
        <Row key="o" k="tools">{skills.tools.join(", ")}</Row>,
      ],
    },
    experience: {
      desc: "Where I've worked",
      run: () =>
        experience.map((job) => (
          <Row key={job.id} k={`${job.start}–${job.end}`}>
            {job.role}, {job.company}
          </Row>
        )),
    },
    por: {
      desc: "Positions of responsibility",
      run: () =>
        por.map((item) => (
          <Row key={item.id} k={`${item.start}–${item.end}`}>
            {item.role}, {item.company}
          </Row>
        )),
    },
    projects: {
      desc: "What I've built",
      run: () => [
        ...projects.map((p) => (
          <Row key={p.id} k={p.title.split(":")[0]}>
            {p.bullets?.[0]}
          </Row>
        )),
        <span key="hint" className="t-dim">Type "open projects" for the full page.</span>,
      ],
    },
    education: {
      desc: "Where I studied",
      run: () =>
        education.map((e) => (
          <Row key={e.id} k={`${e.start}–${e.end}`}>
            {e.degree}, {e.school}
            {e.grade ? ` (${e.grade})` : ""}
          </Row>
        )),
    },
    achievements: {
      desc: "Contests and hackathons",
      run: () =>
        achievements.map((a) => (
          <Row key={a.id} k={a.title.split(":")[0]}>
            {a.text}
          </Row>
        )),
    },
    certs: {
      desc: "Courses and certifications",
      run: () =>
        certifications.length
          ? certifications.map((c) => <Row key={c.id} k={c.issuer}>{c.title}</Row>)
          : ["No certifications added yet."],
    },
    profiles: {
      desc: "Coding profiles and ratings",
      run: () =>
        profiles.map((p) => (
          <Row key={p.id} k={p.platform}>
            {p.rating}
          </Row>
        )),
    },
    contact: {
      desc: "Ways to reach me",
      run: () => {
        const rows = [
          ["email", links.email, mailHref(links.email)],
          ["github", links.github, links.github],
          ["linkedin", links.linkedin, links.linkedin],
          ["twitter", links.twitter, links.twitter],
        ].filter(([, text]) => text);
        return rows.length
          ? rows.map(([key, text, href]) => (
              <Row key={key} k={key}>
                <Out href={href}>{text}</Out>
              </Row>
            ))
          : ["No contact links added yet."];
      },
    },
    open: {
      desc: "Go to a page: open resume | projects | home",
      run: ([target]) => {
        const path = PAGES[(target || "").toLowerCase()];
        if (!path) return [`usage: open ${Object.keys(PAGES).join(" | ")}`];
        navigate(path);
        return [`Opening ${target.toLowerCase()}…`];
      },
    },
    whoami: { desc: "Who you are here", run: () => ["guest"] },
    clear: { desc: "Clear the screen (Ctrl+L)", run: () => [] },
  };

  commands.help = {
    desc: "Show this list",
    run: () => Object.entries(commands).map(([name, c]) => <Row key={name} k={name}>{c.desc}</Row>),
  };

  return commands;
}

const Terminal = forwardRef(function Terminal(_props, ref) {
  const { data } = usePortfolio();
  const navigate = useNavigate();
  const commands = useMemo(() => buildCommands(data, navigate), [data, navigate]);

  const [entries, setEntries] = useState([{ id: 0, welcome: true }]);
  const [value, setValue] = useState("");
  const history = useRef([]);
  const cursor = useRef(-1);
  const nextId = useRef(1);
  const inputRef = useRef(null);
  const bodyRef = useRef(null);
  const tabCycleRef = useRef({ query: "", index: -1, matches: [] });

  const suggestions = useMemo(() => {
    const raw = value.trimStart();
    if (!raw) return [];
    const lower = raw.toLowerCase();

    // Check if user is typing "open <page>"
    if (lower.startsWith("open ")) {
      const sub = lower.slice(5).trimStart();
      const subpages = [
        { cmd: "open resume", desc: "View resume page" },
        { cmd: "open projects", desc: "View projects page" },
        { cmd: "open home", desc: "View home page" },
      ];
      return subpages.filter((p) => p.cmd.startsWith(lower) && p.cmd !== lower);
    }

    const list = [];
    const cmdEntries = Object.entries(commands);

    // Prefix matches first (e.g. "hel" -> "help")
    for (const [name, meta] of cmdEntries) {
      if (name.startsWith(lower) && name !== lower) {
        list.push({ cmd: name, desc: meta.desc });
      }
    }

    // Substring fallback if no prefix match
    if (list.length === 0 && lower.length >= 2) {
      for (const [name, meta] of cmdEntries) {
        if (name.includes(lower) && name !== lower) {
          list.push({ cmd: name, desc: meta.desc });
        }
      }
    }

    return list;
  }, [value, commands]);

  const focus = () => inputRef.current?.focus({ preventScroll: true });

  const run = (raw) => {
    const text = raw.trim();
    if (!text) return;
    history.current.push(text);
    cursor.current = -1;
    tabCycleRef.current = { query: "", index: -1, matches: [] };

    const [name, ...args] = text.split(/\s+/);
    if (name.toLowerCase() === "clear") {
      setEntries([]);
      return;
    }
    const command = commands[name.toLowerCase()];
    const out = command
      ? command.run(args)
      : [`command not found: ${name}. Type help to view commands.`];
    setEntries((prev) => [...prev, { id: nextId.current++, cmd: text, out, error: !command }]);
  };

  useImperativeHandle(ref, () => ({ run, focus }), [commands]);

  // Keep the newest output in view without moving the page itself.
  useEffect(() => {
    const body = bodyRef.current;
    if (body) body.scrollTop = body.scrollHeight;
  }, [entries, suggestions]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      run(value);
      setValue("");
    } else if (event.key === "Tab") {
      event.preventDefault();
      // If already cycling through Tab completions
      if (tabCycleRef.current.matches.length > 0) {
        const matches = tabCycleRef.current.matches;
        const nextIdx = (tabCycleRef.current.index + 1) % matches.length;
        tabCycleRef.current.index = nextIdx;
        setValue(matches[nextIdx].cmd);
        return;
      }
      // If we have active suggestions
      if (suggestions.length > 0) {
        tabCycleRef.current = {
          query: value,
          index: 0,
          matches: suggestions,
        };
        setValue(suggestions[0].cmd);
        return;
      }
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!history.current.length) return;
      cursor.current = cursor.current < 0 ? history.current.length - 1 : Math.max(0, cursor.current - 1);
      setValue(history.current[cursor.current]);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (cursor.current < 0) return;
      cursor.current += 1;
      if (cursor.current >= history.current.length) {
        cursor.current = -1;
        setValue("");
      } else {
        setValue(history.current[cursor.current]);
      }
    } else if (event.key.toLowerCase() === "l" && event.ctrlKey) {
      event.preventDefault();
      setEntries([]);
    }
  };

  const onChange = (e) => {
    tabCycleRef.current = { query: "", index: -1, matches: [] };
    setValue(e.target.value);
  };

  const firstName = data.profile.name.split(" ")[0].toLowerCase();

  return (
    <section
      className="terminal"
      aria-label="Interactive terminal"
      onClick={() => {
        if (!window.getSelection()?.toString()) focus();
      }}
    >
      <div className="terminal-bar">
        <span className="dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="terminal-title">
          <Icon name="terminal" size={13} /> guest@{firstName}: ~
        </span>
      </div>

      <div className="terminal-body" ref={bodyRef} aria-live="polite">
        {entries.map((entry) =>
          entry.welcome ? (
            <div key={entry.id} className="t-line">
              Welcome. Type <strong>help</strong> to view commands.
            </div>
          ) : (
            <div key={entry.id} className="t-block">
              <div className="t-line">
                <span className="t-arrow">→</span> <span className="t-path">~</span> {entry.cmd}
              </div>
              {entry.out.map((line, i) => (
                <div key={i} className={`t-line t-out${entry.error ? " t-error" : ""}`}>
                  {line}
                </div>
              ))}
            </div>
          )
        )}

        <label className="t-line t-prompt">
          <span className="t-arrow">→</span> <span className="t-path">~</span>
          <input
            ref={inputRef}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder="try 'help'..."
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
            aria-label="Terminal command"
          />
        </label>

        {/* {suggestions.length > 0 && (
          <div className="t-suggestions" aria-label="Command suggestions">
            <span className="t-sugg-tag">suggestion:</span>
            <div className="t-sugg-list">
              {suggestions.map((sugg, i) => (
                <button
                  key={sugg.cmd}
                  type="button"
                  className={`t-sugg-btn${i === 0 ? " is-first" : ""}`}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => {
                    setValue(sugg.cmd);
                    tabCycleRef.current = { query: "", index: -1, matches: [] };
                    focus();
                  }}
                  title={sugg.desc}
                >
                  <span className="t-sugg-cmd">{sugg.cmd}</span>
                  {sugg.desc && <span className="t-sugg-desc">{sugg.desc}</span>}
                  {i === 0 && <kbd className="t-sugg-kbd">Tab ⇥</kbd>}
                </button>
              ))}
            </div>
          </div>
        )} */}
      </div>

      <div className="terminal-footer">
        {suggestions.length > 0 ? (
          <div className="t-footer-content">
            <span className="t-footer-label">Suggestion:</span>
            <span className="t-footer-cmd">{suggestions[0].cmd}</span>
            {suggestions[0].desc && <span className="t-footer-desc">— {suggestions[0].desc}</span>}
            <span className="t-footer-action">
              press <kbd className="t-sugg-kbd">Tab ⇥</kbd> to complete
            </span>
          </div>
        ) : (
          <div className="t-footer-content">
            <span className="t-footer-muted">
              Press <kbd className="t-sugg-kbd">Tab</kbd> to autocomplete • Type{" "}
              <strong className="t-key">help</strong> to see all commands
            </span>
          </div>
        )}
      </div>
    </section>
  );
});

export default Terminal;
