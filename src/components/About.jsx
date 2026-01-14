import React from "react";
import { User, Download } from "lucide-react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="bento-grid" id="about">
      <div className="bento-card about-card">
        <div className="about-header">
          <h2 className="card-title">
            <User className="card-icon" size={24} />
            About Me
          </h2>
          <a
            className="download-resume-btn"
            href="https://portfolio-sujal.s3.ap-south-1.amazonaws.com/Sujal's_Resume_v2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
        <div className="about-text">
          <p>
            I am a prefinal-year Computer Science student at IIIT Jabalpur who
            enjoys solving tough problems and building things that actually help
            people. I like turning ideas into working products.
          </p>
          <p>
            I have built Android and web applications such as Chaperone, a
            peer-to-peer companionship and safety platform connecting
            seniors and mobility-challenged users with verified companions using
            real-time GPS tracking and secure payments, and CropChain, a
            decentralized Android app enabling farmers to upload crop images and
            receive expert feedback using blockchain smart contracts, IPFS,
            MetaMask, and Firebase FCM.
          </p>
          <p>
            I am now looking for software engineering roles where I can apply my
            problem solving skills and build impactful, scalable products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
