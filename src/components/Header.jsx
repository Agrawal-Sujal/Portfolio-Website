import React, { useEffect, useState } from "react";
import profilePhoto from "../assets/photo.jpeg";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Hi, I am Sujal Agrawal</h1>
        <p className="header-subtitle">
          Building meaningful products through thoughtful problem-solving
        </p>

        {/* Role badges */}
        <div className="role-badges">
          <span>Competitive Programmer</span>
          <span>Android Developer</span>
          <span>Backend Developer</span>
        </div>
      </div>

      <div className="profile-photo-wrapper">
        <div className="photo-background"></div>
        <img src={profilePhoto} alt="Profile" className="profile-photo" />
      </div>
    </header>
  );
};

export default Header;
