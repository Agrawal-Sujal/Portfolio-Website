import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import { codingProfiles } from "../data/profiles";
import "../styles/Profiles.css";

const Profiles = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="bento-grid" id="profiles">
      <div className="section-title-card">
        <h2 className="section-title">Coding Profiles</h2>
      </div>

      {codingProfiles.map((profile, index) => (
        <div
          key={index}
          className="bento-card profile-card"
          onMouseEnter={() => setHoveredCard(`profile-${index}`)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="profile-platform">{profile.platform}</div>
          <div className="profile-username">@{profile.username}</div>
          <div className="profile-rating">
            {profile.rating || profile.stats}
          </div>
          <a
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link"
          >
            View Profile
            <ExternalLink size={14} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Profiles;
