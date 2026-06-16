import { Link } from "react-router-dom";
import AppLayout from "../components/Layout/AppLayout";

function PronunciationLevels() {
  return (
    <AppLayout>
      <div className="speaking-page">

        <Link to="/speaking">
          ← Back to Speaking
        </Link>

        <h1>Pronunciation Practice</h1>

        <p>Select your level</p>

        <div className="speaking-grid">

          <Link
            to="/speaking/pronunciation/a1"
            className="speaking-card"
          >
            <h3>A1</h3>
          </Link>

          <Link
            to="/speaking/pronunciation/a2"
            className="speaking-card"
          >
            <h3>A2</h3>
          </Link>

          <Link
            to="/speaking/pronunciation/b1"
            className="speaking-card"
          >
            <h3>B1</h3>
          </Link>

        </div>

      </div>
    </AppLayout>
  );
}

export default PronunciationLevels;