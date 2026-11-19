import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePortfolio } from "../data/PortfolioContext";
import { PROJECT_DETAILS } from "../data/projectDetails";
import Rail from "./Rail";
import SidePanel from "./SidePanel";
import NoticeToast from "./NoticeToast";

const titles = {
  "/": "",
  "/projects": "Projects",
};

export default function Shell({ children }) {
  const { data } = usePortfolio();
  const { pathname } = useLocation();
  const { name } = data.profile;

  useEffect(() => {
    let page = titles[pathname];
    if (!page && pathname.startsWith("/projects/")) {
      const slug = pathname.slice("/projects/".length).split("/")[0];
      page = PROJECT_DETAILS[slug]?.title || "Projects";
    }
    document.title = page ? `${page} · ${name}` : name;
  }, [pathname, name]);

  return (
    <div className="shell">
      <Rail />
      <main className="main">
        <div className="main-inner">{children}</div>
      </main>
      <SidePanel />
      <NoticeToast />
    </div>
  );
}
