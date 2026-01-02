import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
