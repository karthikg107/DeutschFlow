import { Link, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../../styles/layout.css";

const PAGE_TITLES = {
  "/dashboard": "Dashboard",
  "/ai":        "AI Tutor",
  "/grammar":   "Grammar",
  "/vocabulary":"Vocabulary",
  "/speaking":  "Speaking",
  "/settings":  "Settings",
};

function getPageTitle(pathname) {
  if (PAGE_TITLES[pathname]) return PAGE_TITLES[pathname];
  for (const [path, title] of Object.entries(PAGE_TITLES)) {
    if (pathname.startsWith(path + "/")) return title;
  }
  return "DeutschFlow";
}

function AppLayout({ children }) {
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-content">
        {/* Shown only on mobile (≤ 768px) */}
        <header className="mobile-header">
          <Link to="/" className="mobile-header-brand">
            <img src="/logo.png" alt="DeutschFlow" />
            <span className="mobile-header-brand-text">DeutschFlow</span>
          </Link>
          <span className="mobile-header-title">{pageTitle}</span>
        </header>

        {children}
      </div>
    </div>
  );
}

export default AppLayout;
