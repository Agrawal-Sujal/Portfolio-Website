import React from "react";
import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Profiles from "../components/Profiles";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useScrollSpy } from "../hooks/useScrollSpy";
import "../styles/base.css";
import "../styles/responsive.css";

export default function Portfolio() {
  // Custom hook for scroll spy functionality
  const activeSection = useScrollSpy([
    "home",
    "about",
    "skills",
    "projects",
    "achievements",
    "profiles",
    "contact",
  ]);

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Profile photo path
  const profilePhoto = "/mnt/user-data/uploads/1767333177018_image.png";

  return (
    <div className="portfolio">
      {/* Top Navigation Bar */}
      {/* <TopBar /> */}

      {/* Floating Sidebar */}
      <Sidebar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Main Content */}
      <div className="container" id="home">
        {/* Home/Header Section */}
        <Header profilePhoto={profilePhoto} />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Achievements Section */}
        <Achievements />

        {/* Coding Profiles Section */}
        <Profiles />

        {/* Contact Section */}
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
