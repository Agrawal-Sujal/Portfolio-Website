import React from "react";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/projects";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className="bento-grid" id="projects">
      <div className="section-title-card">
        <h2 className="section-title">Projects</h2>
      </div>

      {projects.map((project, index) => (
        <div
          key={index}
          className={`bento-card project-card ${
            project.size === "large" ? "project-large" : "project-medium"
          }`}
        >
          {/* Left Image */}
          <div className="project-image-column">
            <img
              src={project.image}
              alt={project.title}
              className="project-image-vertical"
            />
          </div>

          {/* Right Content */}
          <div className="project-content">
            <h3 className="project-title">{project.title}</h3>

            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <ul className="project-points">
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className="project-actions">
  <a
    href={project.details}
    className="project-btn secondary"
  >
    More Details
  </a>

  <a
    href={project.apk}
    download
    className="project-btn outline"
  >
    Download APK
  </a>

  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="project-btn primary"
  >
    GitHub <ExternalLink size={16} />
  </a>
</div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
