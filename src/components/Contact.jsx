import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="bento-grid" id="contact">
      <div className="bento-card contact-card">
        <h2 className="contact-title">Let’s Work Together</h2>
        <p className="contact-text">
          I’m interested in software engineering roles, internships, and
          collaborative projects. Always happy to discuss ideas around backend
          systems, mobile apps, and problem-solving at scale.
        </p>
        <div className="contact-links">
          <a href="mailto:sujalagrawal2703@gmail.com" className="contact-btn">
            <Mail size={20} />
            Send Email
          </a>
          <a
            href="https://github.com/Agrawal-Sujal"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            <Github size={20} />
            View GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sujal-agrawal-823959296/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            <Linkedin size={20} />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
