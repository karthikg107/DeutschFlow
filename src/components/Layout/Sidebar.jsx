import { Link, useLocation } from "react-router-dom";

import {
  LayoutDashboard,
  Bot,
  BookOpen,
  Mic,
  Trophy,
  Settings,
  Languages,
  X,
} from "lucide-react";

function Sidebar({
  mobileOpen,
  setMobileOpen,
}) {
  const location = useLocation();

  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },

    {
      name: "AI Tutor",
      path: "/ai",
      icon: <Bot size={20} />,
    },

    {
      name: "Grammar",
      path: "/grammar",
      icon: <BookOpen size={20} />,
    },

    {
      name: "Vocabulary",
      path: "/vocabulary",
      icon: <Languages size={20} />,
    },

    {
      name: "Speaking",
      path: "/speak",
      icon: <Mic size={20} />,
    },

    {
      name: "Leaderboard",
      path: "/leaderboard",
      icon: <Trophy size={20} />,
    },

    {
      name: "Settings",
      path: "/settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <>
      {/* OVERLAY */}
      {mobileOpen && (
        <div
          className="sidebar-overlay"
          onClick={() =>
            setMobileOpen(false)
          }
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`sidebar ${
          mobileOpen
            ? "mobile-open"
            : ""
        }`}
      >
        {/* TOP */}
        <div className="sidebar-top">

          <h2 className="sidebar-logo">
            DeutschFlow
          </h2>

          {/* MOBILE CLOSE */}
          <button
            className="menu-btn mobile-close"
            onClick={() =>
              setMobileOpen(false)
            }
          >
            <X size={24} />
          </button>

        </div>

        {/* MENU */}
        <div className="sidebar-menu">

          {menu.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`sidebar-item ${
                location.pathname ===
                item.path
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setMobileOpen(false)
              }
            >
              {item.icon}

              <span>
                {item.name}
              </span>
            </Link>
          ))}

        </div>
      </aside>
    </>
  );
}

export default Sidebar;