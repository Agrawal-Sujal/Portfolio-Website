import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { PortfolioProvider, usePortfolio } from "./data/PortfolioContext";
import Shell from "./components/Shell";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Content() {
  const { status } = usePortfolio();

  if (status === "loading") {
    return (
      <div className="splash" role="status" aria-label="Loading">
        <span className="splash-dot" />
      </div>
    );
  }

  return (
    <Shell>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/resume" element={<Navigate to="/" replace />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Shell>
  );
}

export default function App() {
  return (
    <PortfolioProvider>
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </PortfolioProvider>
  );
}
