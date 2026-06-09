import { useState } from "react";

import { Menu } from "lucide-react";

import Sidebar from "./Sidebar";

import "../../styles/layout.css";

function AppLayout({ children }) {
  const [mobileOpen, setMobileOpen] =
    useState(false);

  return (
    <div className="dashboard-layout">

      {/* SIDEBAR */}
      <Sidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* MAIN CONTENT */}
      <div className="dashboard-content">

        {/* MOBILE TOPBAR */}
        <div className="mobile-topbar">

          <button
            className="menu-btn"
            onClick={() =>
              setMobileOpen(true)
            }
          >
            <Menu size={24} />
          </button>

          <div className="mobile-brand">
            DeutschFlow
          </div>

        </div>

        {/* PAGE CONTENT */}
        {children}

      </div>
    </div>
  );
}

export default AppLayout;