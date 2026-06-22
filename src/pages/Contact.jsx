import AppLayout from "../components/layout/AppLayout";
import "../styles/settings.css";

export default function Contact() {
  return (
    <AppLayout>
      <div className="settings-page">

        <h1 className="settings-title">
          Contact Support
        </h1>

        <div className="settings-card">

          <h2>DeutschFlow Support</h2>

          <p className="settings-name">
            support@deutschflow.com
          </p>

          <br />

          <p>
            Need help with your account,
            learning progress, subscriptions,
            or reporting a bug?
          </p>

          <br />

          <p className="settings-email">
            Typical response time:
            within 48 hours.
          </p>

        </div>

      </div>
    </AppLayout>
  );
}