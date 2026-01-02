import { Github, Linkedin, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";
import "../styles/TopBar.css";

const TopBar = () => {
  return (
    <header className="top-bar">
      <nav className="top-nav-links">
        <NavLink to="/" end className="top-nav-link">
          Portfolio
        </NavLink>
        <NavLink to="/resume" className="top-nav-link">
          Resume
        </NavLink>
        <NavLink to="/blog" className="top-nav-link">
          Blog
        </NavLink>
      </nav>

      <div className="top-icons">
        <a href="mailto:your@email.com" aria-label="Email">
          <Mail size={20} />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </header>
  );
};

export default TopBar;
