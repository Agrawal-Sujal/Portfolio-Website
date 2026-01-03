import { ExternalLink } from "lucide-react";
import { codingProfiles } from "../data/profiles";
import "../styles/Profiles.css";

const Profiles = () => {
  return (
    <div className="bento-grid" id="profiles">
      <div className="section-title-card">
        <h2 className="section-title">Coding Profiles</h2>
      </div>

      {codingProfiles.map((profile, index) => (
        <div key={index} className="bento-card profile-card">
          {/* Image */}
          <div className="profile-image-wrapper">
            <img src={profile.image} alt={profile.platform} />
          </div>

          {/* Text */}
          <h3 className="profile-platform">{profile.platform}</h3>
          <div className="profile-username">@{profile.username}</div>
          <div className="profile-rating">{profile.rating}</div>

          {/* Button */}
          <a
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-link"
          >
            View Profile <ExternalLink size={14} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Profiles;
