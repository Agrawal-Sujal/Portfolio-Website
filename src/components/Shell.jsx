import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePortfolio } from "../data/PortfolioContext";
import Rail from "./Rail";
import SidePanel from "./SidePanel";
import NoticeToast from "./NoticeToast";

const titles = {
  "/": "",
  "/resume": "Resume",
  "/projects": "Projects",
};

export default function Shell({ children }) {
  const { data } = usePortfolio();
  const { pathname } = useLocation();
  const { name, role } = data.profile;

  useEffect(() => {
    const page = titles[pathname];
    document.title = page ? `${page} · ${name}` : `${name} · ${role}`;
  }, [pathname, name, role]);

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
