import AppLayout from "../components/Layout/AppLayout";
import "../styles/legal.css";

export default function Privacy() {
  return (
    <AppLayout>
      <div className="legal-page">
        <h1 className="legal-title">Privacy Policy</h1>

        <div className="legal-section">
          <h2 className="legal-section-title">Information we collect</h2>
          <ul className="legal-section-list">
            <li>Your name and email address</li>
            <li>Learning progress and completed lessons</li>
            <li>XP, streak, and activity data</li>
            <li>Saved vocabulary words</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2 className="legal-section-title">How we use your data</h2>
          <p className="legal-section-body">
            We use your information to provide the DeutschFlow learning service,
            track your progress, personalise your experience, and improve the
            platform over time. We do not sell your data to third parties.
          </p>
        </div>

        <div className="legal-section">
          <h2 className="legal-section-title">Data storage</h2>
          <p className="legal-section-body">
            Your data is stored securely on our servers. Passwords are hashed
            and never stored in plain text. We use industry-standard encryption
            for data in transit.
          </p>
        </div>

        <div className="legal-section">
          <h2 className="legal-section-title">Your rights</h2>
          <p className="legal-section-body">
            You may request access to, correction of, or deletion of your
            personal data at any time by contacting us at
            support@deutschflow.com.
          </p>
        </div>

        <div className="legal-section">
          <h2 className="legal-section-title">Updates to this policy</h2>
          <p className="legal-section-body">
            We may update this policy as the platform evolves. Continued use
            of DeutschFlow after changes constitutes acceptance of the updated
            policy.
          </p>
        </div>
      </div>
    </AppLayout>
  );
}
