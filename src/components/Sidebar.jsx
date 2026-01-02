import React from "react";
import {
  Home,
  User,
  Code2,
  FolderGit2,
  Award,
  Briefcase,
  Mail,
} from "lucide-react";
import "../styles/Sidebar.css";

const Sidebar = ({ activeSection, scrollToSection }) => {
  return (
    <nav className="sidebar">
      <div className="sidebar-content">
        {/* <div className="sidebar-logo">
          <span className="logo-text">Portfolio</span>
        </div> */}

        <div className="nav-items">
          <div
            className={`nav-item ${activeSection === "home" ? "active" : ""}`}
            onClick={() => scrollToSection("home")}
          >
            <Home size={20} className="nav-icon" />
            <span className="nav-label">Home</span>
          </div>
          <div
            className={`nav-item ${activeSection === "about" ? "active" : ""}`}
            onClick={() => scrollToSection("about")}
          >
            <User size={20} className="nav-icon" />
            <span className="nav-label">About</span>
          </div>
          <div
            className={`nav-item ${activeSection === "skills" ? "active" : ""}`}
            onClick={() => scrollToSection("skills")}
          >
            <Code2 size={20} className="nav-icon" />
            <span className="nav-label">Skills</span>
          </div>
          <div
            className={`nav-item ${
              activeSection === "projects" ? "active" : ""
            }`}
            onClick={() => scrollToSection("projects")}
          >
            <FolderGit2 size={20} className="nav-icon" />
            <span className="nav-label">Projects</span>
          </div>
          <div
            className={`nav-item ${
              activeSection === "achievements" ? "active" : ""
            }`}
            onClick={() => scrollToSection("achievements")}
          >
            <Award size={20} className="nav-icon" />
            <span className="nav-label">Achievements</span>
          </div>
          <div
            className={`nav-item ${
              activeSection === "profiles" ? "active" : ""
            }`}
            onClick={() => scrollToSection("profiles")}
          >
            <Briefcase size={20} className="nav-icon" />
            <span className="nav-label">Profiles</span>
          </div>
          <div
            className={`nav-item ${
              activeSection === "contact" ? "active" : ""
            }`}
            onClick={() => scrollToSection("contact")}
          >
            <Mail size={20} className="nav-icon" />
            <span className="nav-label">Contact</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
