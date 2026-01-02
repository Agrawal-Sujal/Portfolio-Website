import React from "react";
import { User } from "lucide-react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="bento-grid" id="about">
      <div className="bento-card about-card">
        <h2 className="card-title">
          <User className="card-icon" size={24} />
          About Me
        </h2>
        <div className="about-text">
          <p>
            I am a prefinal-year Computer Science student at IIIT Jabalpur who enjoys 
            solving tough problems and building things that actually help people.
            I like turning ideas into working products.
            {/* I'm a passionate software developer with 5+ years of experience
            building web applications and solving complex technical challenges.
            I thrive in collaborative environments and love learning new
            technologies. */}
          </p>
          <p>
            I have built Android and web applications such as Chaperone, a 
            safety app for seniors, and CropChain, a blockchain based tool 
            that helps farmers manage their data with transparency. I work 
            mainly with Kotlin, Jetpack Compose, Django, and Solidity.
            {/* My journey in software development started with a curiosity about
            how things work under the hood. Today, I focus on writing clean,
            efficient code and creating intuitive user experiences that make a
            difference. */}
          </p>
          <p>
            I am now looking for software engineering roles where I can apply my 
            problem solving skills and build impactful, scalable products.
            {/* When I'm not coding, you'll find me contributing to open-source
            projects, participating in hackathons, or exploring the latest
            trends in technology. */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
