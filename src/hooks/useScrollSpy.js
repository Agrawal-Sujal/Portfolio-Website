import { useState, useEffect } from "react";

export const useScrollSpy = (sections) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset from top

      // Check each section from bottom to top
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);

        if (element) {
          const sectionTop = element.offsetTop;

          // If we've scrolled past this section's top, it's active
          if (scrollPosition >= sectionTop) {
            setActiveSection(section);
            return;
          }
        }
      }

      // Default to first section if nothing matches
      setActiveSection(sections[0]);
    };

    // Run on mount and scroll
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return activeSection;
};
