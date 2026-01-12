import React from "react";
import { achievements } from "../data/achievements";
import "../styles/Achievements.css";

const Achievements = () => {
  return (
    <div className="bento-grid" id="achievements">
      <div className="section-title-card">
        <h2 className="section-title">Achievements</h2>
      </div>

      {achievements.map((item, index) => (
        <div key={index} className="bento-card achievement-card">
          {/* Image */}
          <div className="achievement-image-wrapper">
            <img src={item.image} alt={item.title} />
          </div>

          {/* Content */}
          <h3 className="achievement-title">{item.title}</h3>
          <div className="achievement-position">{item.position}</div>

          <p className="achievement-description">{item.description}</p>

          {/* Tags */}
          <div className="achievement-tags">
            {item.tags.map((tag, i) => (
              <span key={i} className="achievement-tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="achievement-footer">
            <span className="achievement-date">{item.date}</span>
            {/* <a href={item.details} className="achievement-btn">
              More Details
            </a> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
