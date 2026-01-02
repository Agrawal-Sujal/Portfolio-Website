import React, { useState } from "react";
import { achievements } from "../data/achievements";
import "../styles/Achievements.css";

const Achievements = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="bento-grid" id="achievements">
      <div className="section-title-card">
        <h2 className="section-title">Achievements</h2>
      </div>

      {achievements.map((achievement, index) => {
        const Icon = achievement.icon;
        return (
          <div
            key={index}
            className="bento-card achievement-small"
            onMouseEnter={() => setHoveredCard(`achievement-${index}`)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="achievement-icon">
              <Icon size={24} />
            </div>
            <div className="achievement-year">{achievement.year}</div>
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-description">{achievement.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Achievements;
