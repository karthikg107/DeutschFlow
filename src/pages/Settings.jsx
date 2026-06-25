import AppLayout from "../components/Layout/AppLayout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  User, Mail, CreditCard, Shield, FileText,
  MessageSquare, Lock, LogOut, ChevronRight,
  Crown
} from "lucide-react";
import "../styles/settings.css";

export default function Settings() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const initials = user?.name
    ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : "U";

  const joinDate = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-GB", {
        month: "long", year: "numeric"
      })
    : "2026";

  return (
    <AppLayout>
      <div className="settings-page">

        {/* Profile header */}
        <div className="settings-profile">
          <div className="settings-avatar">{initials}</div>
          <div className="settings-profile-info">
            <p className="settings-profile-name">
              {user?.name || "User"}
            </p>
            <p className="settings-profile-email">
              {user?.email || ""}
            </p>
          </div>
          <span className="settings-plan-badge">
            <Crown size={11} />
            {user?.plan || "FREE"}
          </span>
        </div>

        {/* Account section */}
        <div className="settings-section">
          <p className="settings-section-label">Account</p>
          <div className="settings-list">
            <div className="settings-row">
              <div className="settings-row-left">
                <User size={16} className="settings-row-icon" />
                <span className="settings-row-label">Full name</span>
              </div>
              <span className="settings-row-value">
                {user?.name || "—"}
              </span>
            </div>
            <div className="settings-row">
              <div className="settings-row-left">
                <Mail size={16} className="settings-row-icon" />
                <span className="settings-row-label">Email</span>
              </div>
              <span className="settings-row-value">
                {user?.email || "—"}
              </span>
            </div>
            <div className="settings-row">
              <div className="settings-row-left">
                <User size={16} className="settings-row-icon" />
                <span className="settings-row-label">Member since</span>
              </div>
              <span className="settings-row-value">{joinDate}</span>
            </div>
            <button
              className="settings-row settings-row-btn"
              onClick={() => navigate("/forgot-password")}
            >
              <div className="settings-row-left">
                <Lock size={16} className="settings-row-icon" />
                <span className="settings-row-label">Change password</span>
              </div>
              <ChevronRight size={15} className="settings-row-chevron" />
            </button>
          </div>
        </div>

        {/* Subscription section */}
        <div className="settings-section">
          <p className="settings-section-label">Subscription</p>
          <div className="settings-list">
            <div className="settings-row">
              <div className="settings-row-left">
                <CreditCard size={16} className="settings-row-icon" />
                <span className="settings-row-label">Current plan</span>
              </div>
              <span className="settings-row-value">
                {user?.plan || "Free"}
              </span>
            </div>
            <button
              className="settings-row settings-row-btn"
              onClick={() => navigate("/pricing")}
            >
              <div className="settings-row-left">
                <Crown size={16} className="settings-row-icon" />
                <span className="settings-row-label">
                  Upgrade to Premium
                </span>
              </div>
              <ChevronRight size={15} className="settings-row-chevron" />
            </button>
          </div>
        </div>

        {/* Legal section */}
        <div className="settings-section">
          <p className="settings-section-label">Legal</p>
          <div className="settings-list">
            <button
              className="settings-row settings-row-btn"
              onClick={() => navigate("/privacy")}
            >
              <div className="settings-row-left">
                <Shield size={16} className="settings-row-icon" />
                <span className="settings-row-label">Privacy policy</span>
              </div>
              <ChevronRight size={15} className="settings-row-chevron" />
            </button>
            <button
              className="settings-row settings-row-btn"
              onClick={() => navigate("/terms")}
            >
              <div className="settings-row-left">
                <FileText size={16} className="settings-row-icon" />
                <span className="settings-row-label">
                  Terms &amp; conditions
                </span>
              </div>
              <ChevronRight size={15} className="settings-row-chevron" />
            </button>
            <button
              className="settings-row settings-row-btn"
              onClick={() => navigate("/contact")}
            >
              <div className="settings-row-left">
                <MessageSquare size={16} className="settings-row-icon" />
                <span className="settings-row-label">Contact support</span>
              </div>
              <ChevronRight size={15} className="settings-row-chevron" />
            </button>
          </div>
        </div>

        {/* Danger zone */}
        <div className="settings-section">
          <div className="settings-list">
            <button
              className="settings-row settings-row-btn settings-row-danger"
              onClick={logout}
            >
              <div className="settings-row-left">
                <LogOut size={16} className="settings-row-icon" />
                <span className="settings-row-label">Sign out</span>
              </div>
            </button>
          </div>
        </div>

        <p className="settings-version">DeutschFlow v1.0</p>

      </div>
    </AppLayout>
  );
}
