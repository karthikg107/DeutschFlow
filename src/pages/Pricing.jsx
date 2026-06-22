import AppLayout from "../components/layout/AppLayout";
import "../styles/settings.css";

export default function Pricing() {
  return (
    <AppLayout>
      <div className="settings-page">

        <h1 className="settings-title">
          DeutschFlow Premium
        </h1>

        <div className="settings-card">
          <h2>Free Plan</h2>

          <p>✓ Grammar Lessons</p>
          <p>✓ Vocabulary Training</p>
          <p>✓ Speaking Practice</p>
          <p>✓ AI Tutor</p>
        </div>

        <div className="settings-card">
          <h2>Premium Plan</h2>

          <p>✓ Everything in Free</p>
          <p>✓ Unlimited AI Tutor</p>
          <p>✓ Advanced Analytics</p>
          <p>✓ Future Premium Features</p>

          <button className="settings-btn">
            Upgrade Soon
          </button>
        </div>

      </div>
    </AppLayout>
  );
}