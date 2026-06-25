import AppLayout from "../components/Layout/AppLayout";
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

<div className="settings-card profile-card">

  <div className="profile-avatar">

    {user?.name
      ? user.name.charAt(0).toUpperCase()
      : "U"}

  </div>

  <h2 className="profile-name">
    {user?.name || "User"}
  </h2>

  <p className="profile-email">
    {user?.email || "No email available"}
  </p>

  <div className="profile-info">

    <div>

      <span>Member Since</span>

      <strong>
        June 2026
      </strong>

    </div>

    <div>

      <span>Current Plan</span>

      <strong>
        {user?.plan || "FREE"}
      </strong>

    </div>

  </div>

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