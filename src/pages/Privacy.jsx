import AppLayout from "../components/Layout/AppLayout";
import "../styles/settings.css";

export default function Privacy() {
  return (
    <AppLayout>
      <div className="settings-page">

        <h1 className="settings-title">
          Privacy Policy
        </h1>

        <div className="settings-card">
          <h2>Information We Collect</h2>

          <p>Name</p>
          <p>Email Address</p>
          <p>Learning Progress</p>
          <p>XP and Streak Data</p>
          <p>Saved Vocabulary</p>
        </div>

        <div className="settings-card">
          <h2>How We Use Your Data</h2>

          <p>
            We use your information to provide
            learning services, track progress,
            personalize your experience, and
            improve DeutschFlow.
          </p>
        </div>

        <div className="settings-card">
          <h2>Your Rights</h2>

          <p>
            You may request access,
            correction, or deletion of
            your data at any time.
          </p>
        </div>

      </div>
    </AppLayout>
  );
}