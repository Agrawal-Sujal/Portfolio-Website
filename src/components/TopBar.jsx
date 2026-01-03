import { Github, Linkedin, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/TopBar.css";

const TopBar = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      // hide when scrolling down, show when near top
      if (currentScrollY > 80 && currentScrollY > lastScrollY) {
        setHidden(true);
      } else if (currentScrollY < 40) {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`top-bar ${hidden ? "hidden" : ""}`}>
      <nav className="top-nav-links">
        <NavLink to="/" end className="top-nav-link">
          Portfolio
        </NavLink>
        <NavLink to="/resume" className="top-nav-link">
          Resume
        </NavLink>
        {/* <NavLink to="/blog" className="top-nav-link">
          Blog
        </NavLink> */}
      </nav>

      <div className="top-icons">
        <a href="mailto:sujalagrawal2703@gmail.com" aria-label="Email">
          <Mail size={20} />
        </a>
        <a
          href="https://github.com/Agrawal-Sujal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/sujal-agrawal-823959296/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </header>
  );
};

export default TopBar;
