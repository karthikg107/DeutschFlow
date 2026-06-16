import { Link } from "react-router-dom";
import AppLayout from "../components/Layout/AppLayout";

function ScenarioLevels() {
  return (
    <AppLayout>
      <div className="speaking-page">

        <Link
          to="/speaking"
          className="back-link"
        >
          ← Back to Speaking
        </Link>

        <h1>Scenario Practice</h1>

        <p>
          Select your level
        </p>

        <div className="speaking-grid">

          <Link
            to="/speaking/scenarios/a1"
            className="speaking-card"
          >
            <h3>A1</h3>
          </Link>

          <Link
            to="/speaking/scenarios/a2"
            className="speaking-card"
          >
            <h3>A2</h3>
          </Link>

          <Link
            to="/speaking/scenarios/b1"
            className="speaking-card"
          >
            <h3>B1</h3>
          </Link>

        </div>

      </div>
    </AppLayout>
  );
}

export default ScenarioLevels;