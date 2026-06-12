import { Link, useParams } from "react-router-dom";
import AppLayout from "../components/Layout/AppLayout";

function SpeakingLevel() {
  const { level } = useParams();

  return (
    <AppLayout>

      <div className="speaking-page">

        <h1>
          {level.toUpperCase()} Speaking
        </h1>

        <p>
          Choose a speaking activity.
        </p>

        <div className="speaking-grid">

          <Link
            to={`/speaking/${level}/pronunciation`}
            className="speaking-card"
          >
            <h3>
              Pronunciation Practice
            </h3>

            <p>
              Practice German sounds and words.
            </p>
          </Link>

          <Link
            to={`/speaking/${level}/scenarios`}
            className="speaking-card"
          >
            <h3>
              Scenario Practice
            </h3>

            <p>
              Practice real-life conversations.
            </p>
          </Link>

        </div>

      </div>

    </AppLayout>
  );
}

export default SpeakingLevel;