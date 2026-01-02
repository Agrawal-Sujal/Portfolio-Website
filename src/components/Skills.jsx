import React from "react";
import { skillCategories } from "../data/skills";
import { techIcons } from "../utils/techIcons";
import "../styles/Skills.css";

const getOnlineIcon = (tech) => {
  // Convert to lowercase & remove special chars for CDN compatibility
  const slug = tech
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/\./g, "")
    .replace(/\+/g, "plus");

  return `https://cdn.simpleicons.org/${slug}/ff8233`;
};

const Skills = () => {
  return (
    <section className="skills-wrapper" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className={`skill-card ${category.size}`}>
            <h3 className="skill-card-title">{category.title}</h3>

            {category.technologies && (
              <div className="skill-icons">
                {category.technologies.map((tech, i) => {
                  const Icon = techIcons[tech];

                  return (
                    <div key={i} className="skill-icon-wrapper">
                      <div className="skill-icon">
                        {Icon ? (
                          <Icon size={20} />
                        ) : (
                          <img
                            src={getOnlineIcon(tech)}
                            alt={tech}
                            loading="lazy"
                          />
                        )}
                      </div>
                      <span className="skill-icon-label">{tech}</span>
                    </div>
                  );
                })}
              </div>
            )}

            {category.skills && (
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
