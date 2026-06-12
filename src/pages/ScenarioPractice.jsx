import { useParams } from "react-router-dom";
import { useState } from "react";

import speakingScenarios from "../data/speakingScenarios";

function ScenarioPractice() {
  const { level } = useParams();

  const [selectedScenario, setSelectedScenario] =
    useState(null);

  const scenarios =
    speakingScenarios[level] || [];

  return (
    <div className="page">

      <h1>
        {level.toUpperCase()} Scenarios
      </h1>

      <p>
        Choose a scenario and start practicing.
      </p>

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
              onClick={() =>
                setSelectedScenario(scenario)
              }
            >
              Start Practice
            </button>

          </div>

        ))}

      </div>

      {selectedScenario && (

        <div className="selected-scenario">

          <h2>
            {selectedScenario.title}
          </h2>

          <p>
            <strong>Prompt:</strong>
          </p>

          <p>
            {selectedScenario.prompt}
          </p>

          <h3>
            Example Answer
          </h3>

          <p>
            {selectedScenario.example}
          </p>

        </div>

      )}

    </div>
  );
}

export default ScenarioPractice;