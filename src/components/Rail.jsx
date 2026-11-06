import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { usePortfolio } from "../data/PortfolioContext";
import Icon from "./Icon";

const nav = [
  { to: "/", label: "Home", icon: "home", end: true },
  { to: "/resume", label: "Resume", icon: "user" },
  { to: "/projects", label: "Projects", icon: "projects" },
];

function Avatar({ src, name }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <span className="avatar">
      <span className="avatar-glow" />
      {src && !failed ? (
        <img src={src} alt="" onError={() => setFailed(true)} />
      ) : (
        <span className="avatar-initials">{initials}</span>
      )}
      <span className="avatar-dot" title="Available" />
    </span>
  );
}

export default function Rail() {
  const { data } = usePortfolio();
  const { name, avatar } = data.profile;

  return (
    <header className="rail">
      <Link to="/" className="rail-home" aria-label={`${name} — home`}>
        <Avatar src={avatar} name={name} />
      </Link>
      <nav className="rail-nav" aria-label="Primary">
        {nav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className="rail-link"
            aria-label={item.label}
            title={item.label}
          >
            <Icon name={item.icon} size={20} />
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
