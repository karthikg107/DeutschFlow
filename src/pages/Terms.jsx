import AppLayout from "../components/Layout/AppLayout";
import "../styles/legal.css";

export default function Terms() {
  return (
    <AppLayout>
      <div className="legal-page">
        <h1 className="legal-title">Terms &amp; Conditions</h1>

        <div className="legal-section">
          <h2 className="legal-section-title">Educational purpose</h2>
          <p className="legal-section-body">
            DeutschFlow is an educational platform designed to help users learn
            the German language through lessons, vocabulary practice, speaking
            exercises, and AI-assisted learning tools.
          </p>
        </div>

        <div className="legal-section">
          <h2 className="legal-section-title">User responsibilities</h2>
          <ul className="legal-section-list">
            <li>
              You are responsible for maintaining the security of your account
              credentials
            </li>
            <li>
              You agree to use the platform respectfully and not attempt to
              misuse or reverse-engineer any features
            </li>
            <li>You must be at least 13 years old to create an account</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2 className="legal-section-title">No guarantees</h2>
          <p className="legal-section-body">
            DeutschFlow does not guarantee language fluency, exam success, or
            employment outcomes. Learning results depend on individual effort
            and consistency.
          </p>
        </div>

        <div className="legal-section">
          <h2 className="legal-section-title">Service changes</h2>
          <p className="legal-section-body">
            Features may be updated, modified, or removed as the platform
            evolves. We will communicate significant changes where possible.
          </p>
        </div>

        <div className="legal-section">
          <h2 className="legal-section-title">Governing law</h2>
          <p className="legal-section-body">
            These terms are governed by applicable law. For any disputes,
            please contact us at support@deutschflow.com before pursuing
            formal action.
          </p>
        </div>
      </div>
    </AppLayout>
  );
}
