import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="bento-grid" id="contact">
      <div className="bento-card contact-card">
        <h2 className="contact-title">Let's Work Together</h2>
        <p className="contact-text">
          I'm always interested in hearing about new projects and opportunities.
        </p>
        <div className="contact-links">
          <a href="mailto:dev@example.com" className="contact-btn">
            <Mail size={20} />
            Send Email
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            <Github size={20} />
            View GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
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
