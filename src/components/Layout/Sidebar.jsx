import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Bot,
  BookOpen,
  Languages,
  Mic,
  Settings,
} from "lucide-react";

const menu = [
  { name: "Dashboard",  path: "/dashboard", icon: <LayoutDashboard size={20} /> },
  { name: "AI Tutor",   path: "/ai",         icon: <Bot size={20} /> },
  { name: "Grammar",    path: "/grammar",    icon: <BookOpen size={20} /> },
  { name: "Vocabulary", path: "/vocabulary", icon: <Languages size={20} /> },
  { name: "Speaking",   path: "/speaking",   icon: <Mic size={20} /> },
  { name: "Settings",   path: "/settings",   icon: <Settings size={20} /> },
];

// Bottom nav shows first 5 (Settings excluded on mobile)
const bottomMenu = menu.slice(0, 5);

function Sidebar() {
  const location = useLocation();

  const isActive = (path) =>
    path === "/dashboard"
      ? location.pathname === "/dashboard"
      : location.pathname.startsWith(path);

  return (
    <>
      {/* Desktop fixed sidebar */}
      <aside className="app-sidebar">
        <div className="sidebar-brand">
          <img src="/logo.png" alt="" className="sidebar-brand-img" />
          <span className="sidebar-brand-text">DeutschFlow</span>
        </div>

        <nav className="sidebar-nav">
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-link${isActive(item.path) ? " active" : ""}`}
            >
              <span className="sidebar-link-icon">{item.icon}</span>
              <span className="sidebar-link-label">{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile bottom nav — 5 items, icons only */}
      <nav className="bottom-nav" aria-label="Main navigation">
        {bottomMenu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`bottom-nav-item${isActive(item.path) ? " active" : ""}`}
            aria-label={item.name}
          >
            {item.icon}
          </Link>
        ))}
      </nav>
    </>
  );
}

export default Sidebar;
