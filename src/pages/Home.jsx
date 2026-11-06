import { useRef } from "react";
import { Link } from "react-router-dom";
import { usePortfolio } from "../data/PortfolioContext";
import Headline from "../components/Headline";
import Terminal from "../components/Terminal";
import Icon from "../components/Icon";
import { SectionLabel } from "../components/Section";

export default function Home() {
  const { data } = usePortfolio();
  const { profile } = data;
  const terminal = useRef(null);

  const ask = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("session")?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "center",
    });
    terminal.current?.run("about");
    terminal.current?.focus();
  };

  return (
    <>
      <Headline hero={profile.hero} />

      <p className="intro">
        {profile.greeting} <strong>{profile.name}</strong>.
        <br />
        {profile.intro}{" "}
        {profile.affiliationUrl ? (
          <a className="accent-link" href={profile.affiliationUrl} target="_blank" rel="noopener noreferrer">
            {profile.affiliation}
          </a>
        ) : (
          <span className="accent-link">{profile.affiliation}</span>
        )}
        .
        <br />
        <em>{profile.statusLine}</em>
      </p>

      <div className="hero-actions">
        <button type="button" className="btn btn-light" onClick={ask}>
          Ask about me <Icon name="arrow-right" size={17} />
        </button>
        <Link className="btn btn-dark" to="/projects">
          Projects completed
        </Link>
      </div>

      <section id="session" className="home-section">
        <SectionLabel icon="terminal">Interactive session</SectionLabel>
        <Terminal ref={terminal} />
      </section>
    </>
  );
}
