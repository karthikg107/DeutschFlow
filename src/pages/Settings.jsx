import AppLayout from "../components/layout/AppLayout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/settings.css";

export default function Settings() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <AppLayout>
      <div className="settings-page">

        <h1 className="settings-title">
          Settings
        </h1>

        {/* Account */}
        <div className="settings-card">

          <h2>Account</h2>

          <p className="settings-name">
            {user?.name || "User"}
          </p>

          <p className="settings-email">
            {user?.email || "No email available"}
          </p>

        </div>

        {/* Subscription */}
        <div className="settings-card">

          <h2>Subscription</h2>

          <p className="settings-email">
            Current Plan
          </p>

          <p className="settings-name">
            Free Plan
          </p>

          <button
            onClick={() => navigate("/pricing")}
            className="settings-btn"
          >
            View Plans
          </button>

        </div>

        {/* Legal */}
        <div className="settings-card">

          <h2>Legal</h2>

          <div className="settings-buttons">

            <button
              onClick={() => navigate("/privacy")}
              className="settings-btn"
            >
              Privacy Policy
            </button>

            <button
              onClick={() => navigate("/terms")}
              className="settings-btn"
            >
              Terms & Conditions
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="settings-btn"
            >
              Contact Support
            </button>

          </div>

        </div>

        {/* Account Actions */}
<div className="settings-card">

  <h2>Account Actions</h2>

  <button
    onClick={logout}
    className="logout-btn"
  >
    Logout
  </button>

</div>

      </div>
    </AppLayout>
  );
}