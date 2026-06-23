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

        {/* Profile */}
<div className="settings-card">

  <h2>Profile</h2>

  <p className="settings-email">
    Name
  </p>

  <p className="settings-name">
    {user?.name || "User"}
  </p>

  <p className="settings-email">
    Email
  </p>

  <p className="settings-name">
    {user?.email || "No email available"}
  </p>

  <p className="settings-email">
    Member Since
  </p>

  <p className="settings-name">
    June 2026
  </p>

</div>

        {/* Subscription */}
        <div className="settings-card">

          <h2>Subscription</h2>

          <p className="settings-email">
            Current Plan
          </p>

          <p className="settings-name">
  {user?.plan || "FREE"}
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

  <div className="settings-buttons">

    <button
      onClick={() => navigate("/forgot-password")}
      className="settings-btn"
    >
      Change Password
    </button>

    <button
      onClick={logout}
      className="logout-btn"
    >
      Logout
    </button>

  </div>

</div>

      </div>
    </AppLayout>
  );
}