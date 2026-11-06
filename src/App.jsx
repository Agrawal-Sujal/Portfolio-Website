import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { PortfolioProvider, usePortfolio } from "./data/PortfolioContext";
import Shell from "./components/Shell";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";

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
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Home />} />
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
