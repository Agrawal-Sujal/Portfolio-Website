import { usePortfolio } from "../data/PortfolioContext";
import Icon from "./Icon";
import { mailHref } from "./links";

export function SkillGroups({ skills, variant }) {
  const groups = [
    { key: "languages", label: "Programming languages" },
    { key: "technologies", label: "Technologies" },
    { key: "tools", label: "Tools" },
  ];
  return groups.map((group) => (
    <div key={group.key} className={`skill-group ${variant || ""}`}>
      <h3 className="skill-group-label">{group.label}</h3>
      <ul className="chips">
        {(skills[group.key] || []).map((item) => (
          <li key={item} className="chip mono">
            {item}
          </li>
        ))}
      </ul>
    </div>
  ));
}

function ContactRow({ icon, label, href, external = true }) {
  if (!href) return null; // rows without a URL are simply not shown
  return (
    <a
      className="contact-row"
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <Icon name={icon} size={17} />
      <span>{label}</span>
    </a>
  );
}

export default function SidePanel() {
  const { data } = usePortfolio();
  const { profile, skills } = data;
  const { links, welcome, location } = profile;

  return (
    <aside className="side" aria-label="About and skills">
      <section className="card welcome">
        <p className="card-label">
          <span aria-hidden="true">👋</span> Welcome
        </p>
        <h2 className="welcome-title">{welcome.title}</h2>
        <p className="welcome-text">{welcome.text}</p>
        <div className="contact-list">
          <ContactRow icon="mail" label="Send an email" href={mailHref(links.email)} external={false} />
          <ContactRow icon="github" label="GitHub Profile" href={links.github} />
          <ContactRow icon="linkedin" label="LinkedIn Profile" href={links.linkedin} />
          <ContactRow icon="twitter" label="Twitter / X" href={links.twitter} />
        </div>
      </section>

      <section className="card side-skills">
        <h2 className="card-label strong">Technical skills</h2>
        <SkillGroups skills={skills} />
      </section>

      <p className="side-location">
        <Icon name="pin" size={13} /> {location}
      </p>
    </aside>
  );
}
