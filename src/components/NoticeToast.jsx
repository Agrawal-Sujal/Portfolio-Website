import { useEffect, useState } from "react";
import { usePortfolio } from "../data/PortfolioContext";
import Icon from "./Icon";
import { contactHref } from "./links";

const KEY = "notice-toast-dismissed";

function wasDismissed() {
  try {
    return sessionStorage.getItem(KEY) === "1";
  } catch {
    return false;
  }
}

export default function NoticeToast() {
  const { data } = usePortfolio();
  const { notice, links } = data.profile;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (wasDismissed() || !notice?.title) return;
    const timer = setTimeout(() => setVisible(true), 1400);
    return () => clearTimeout(timer);
  }, [notice?.title]);

  const dismiss = () => {
    setVisible(false);
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* storage can be unavailable in private mode; the toast just returns next visit */
    }
  };

  if (!visible) return null;

  const href = contactHref(links);

  return (
    <div className="toast" role="status">
      <span className="toast-icon">
        <Icon name="zap" size={20} />
      </span>
      <div className="toast-body">
        <h2>{notice.title}</h2>
        <p>{notice.text}</p>
        <div className="toast-actions">
          <a
            className="btn btn-light btn-sm"
            href={href}
            {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            Contact Me
          </a>
          <button type="button" className="btn-text" onClick={dismiss}>
            Dismiss
          </button>
        </div>
      </div>
      <button type="button" className="toast-close" onClick={dismiss} aria-label="Close notification">
        <Icon name="x" size={16} />
      </button>
    </div>
  );
}
