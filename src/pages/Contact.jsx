import AppLayout from "../components/Layout/AppLayout";
import "../styles/legal.css";

export default function Contact() {
  return (
    <AppLayout>
      <div className="legal-page">
        <h1 className="legal-title">Contact Support</h1>

        <div className="contact-card">
          <p className="contact-card-label">Email</p>
          <p className="contact-card-value">support@deutschflow.com</p>
          <p className="contact-card-sub">Typical response time: within 48 hours</p>
        </div>

        <div className="contact-card">
          <p className="contact-card-label">What we can help with</p>
          <p className="contact-card-value">Account issues</p>
          <p className="contact-card-sub">
            Login problems, password resets, account deletion requests
          </p>
        </div>

        <div className="contact-card">
          <p className="contact-card-label">Bug reports</p>
          <p className="contact-card-value">Feature feedback &amp; bugs</p>
          <p className="contact-card-sub">
            Tell us what's not working or what you'd like to see improved
          </p>
        </div>

        <div className="legal-section">
          <h2 className="legal-section-title">Before reaching out</h2>
          <ul className="legal-section-list">
            <li>
              Check your email for a verification message if you cannot log in
            </li>
            <li>
              Try refreshing the page if a feature is not responding
            </li>
            <li>
              Clear your browser cache if the app looks broken after an update
            </li>
          </ul>
        </div>
      </div>
    </AppLayout>
  );
}
