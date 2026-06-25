import AppLayout from "../components/Layout/AppLayout";
import "../styles/settings.css";

export default function Terms() {
  return (
    <AppLayout>
      <div className="settings-page">

        <h1 className="settings-title">
          Terms & Conditions
        </h1>

        <div className="settings-card">
          <h2>Educational Purpose</h2>

          <p>
            DeutschFlow is designed to help
            users learn German through
            lessons, vocabulary, speaking
            practice, and AI-assisted learning.
          </p>
        </div>

        <div className="settings-card">
          <h2>User Responsibilities</h2>

          <p>
            Users are responsible for
            maintaining account security
            and using the platform respectfully.
          </p>
        </div>

        <div className="settings-card">
          <h2>No Guarantees</h2>

          <p>
            DeutschFlow does not guarantee
            language fluency, exam success,
            or employment outcomes.
          </p>
        </div>

        <div className="settings-card">
          <h2>Service Changes</h2>

          <p>
            Features may be updated,
            modified, or removed as the
            platform evolves.
          </p>
        </div>

      </div>
    </AppLayout>
  );
}