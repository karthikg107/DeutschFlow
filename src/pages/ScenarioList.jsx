import { Link, useParams } from "react-router-dom";
import AppLayout from "../components/Layout/AppLayout";
import speakingScenarios from "../data/speakingScenarios";

function ScenarioList() {
  const { level } = useParams();

  const scenarios =
    speakingScenarios[level] || [];

  return (
    <AppLayout>
      <div className="speaking-page">

        <Link
          to="/speaking/scenarios"
          className="back-link"
        >
          ← Back to Levels
        </Link>

        <h1>
          {level.toUpperCase()} Scenarios
        </h1>

        <p>
          Choose a scenario to practice.
        </p>

        <div className="speaking-grid">

          {scenarios.map((scenario) => (

            <Link
              key={scenario.id}
              to={`/speaking/scenarios/${level}/${scenario.id}`}
              className="speaking-card"
            >

              <h3>
                {scenario.title}
              </h3>

              <p>
                {scenario.description}
              </p>

            </Link>

          ))}

        </div>

      </div>
    </AppLayout>
  );
}

export default ScenarioList;