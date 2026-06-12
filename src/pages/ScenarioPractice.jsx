import { useParams } from "react-router-dom";
import speakingScenarios from "../data/speakingScenarios";

function ScenarioPractice() {
  const { level } = useParams();

  const scenarios =
    speakingScenarios[level] || [];

  return (
    <div className="page">

      <h1>
        {level.toUpperCase()} Scenarios
      </h1>

      <div className="speaking-grid">

        {scenarios.map((scenario) => (
          <div
            key={scenario.id}
            className="speaking-card"
          >
            <h3>
              {scenario.title}
            </h3>

            <p>
              {scenario.description}
            </p>

            <button
              className="start-btn"
            >
              Start Practice
            </button>
          </div>
        ))}

      </div>

    </div>
  );
}

export default ScenarioPractice;