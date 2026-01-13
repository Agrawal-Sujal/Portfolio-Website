import { Github, Linkedin, Mail, Eye } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "../styles/TopBar.css";

import { doc, getDoc, updateDoc, setDoc, increment } from "firebase/firestore";
import { db } from "../firebase";

/* ---------- helpers ---------- */
const getUserId = () => {
  let userId = localStorage.getItem("user_id");
  if (!userId) {
    userId = crypto.randomUUID();
    localStorage.setItem("user_id", userId);
  }
  return userId;
};

const TopBar = () => {
  const [hidden, setHidden] = useState(false);
  const [views, setViews] = useState(0);
  const hasRun = useRef(false);

  /* ---------- scroll behavior ---------- */
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 80 && currentScrollY > lastScrollY) {
        setHidden(true);
      } else if (currentScrollY < 40) {
        setHidden(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------- visit counter ---------- */
  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const updateVisits = async () => {
      try {
        const userId = getUserId();
        const sessionActive = sessionStorage.getItem("session_active");

        const statsRef = doc(db, "stats", "visits");
        const userRef = doc(db, "users", userId);

        const userSnap = await getDoc(userRef);

        // First-time visitor
        if (!userSnap.exists()) {
          await Promise.all([
            updateDoc(statsRef, {
              counter: increment(1),
              unique_counter: increment(1),
            }),
            setDoc(userRef, {
              visits: 1,
              firstVisit: new Date(),
              lastVisit: new Date(),
            }),
          ]);

          sessionStorage.setItem("session_active", "true");
        }

        // Returning visitor (new session)
        else if (!sessionActive) {
          await Promise.all([
            updateDoc(statsRef, {
              counter: increment(1),
            }),
            updateDoc(userRef, {
              visits: increment(1),
              lastVisit: new Date(),
            }),
          ]);

          sessionStorage.setItem("session_active", "true");
        }

        // Fetch total views
        const statsSnap = await getDoc(statsRef);
        setViews(statsSnap.data().counter);
      } catch (err) {
        console.error("Visit counter error:", err);
      }
    };

    updateVisits();
  }, []);

  return (
    <>
      {/* ================= VISIT COUNTER ================= */}
      <div className={`visit-counter ${hidden ? "hidden" : ""}`}>
        <div className="visit-counter-icon">
          <Eye size={18} color="#ff8233" />
        </div>

        <div>
          <div className="visit-counter-label">Total Visits</div>
          <div className="visit-counter-value">{views.toLocaleString()}</div>
        </div>
      </div>

      {/* ================= TOP BAR ================= */}
      <header className={`top-bar ${hidden ? "hidden" : ""}`}>
        <nav className="top-nav-links">
          <NavLink to="/" end className="top-nav-link">
            Portfolio
          </NavLink>
          <NavLink to="/resume" className="top-nav-link">
            Resume
          </NavLink>
        </nav>

        <div className="top-icons">
          <a href="mailto:sujalagrawal2703@gmail.com" aria-label="Email">
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/Agrawal-Sujal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/sujal-agrawal-823959296/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </header>
    </>
  );
};

export default TopBar;
