import { useState } from "react";
import { Link } from "react-router-dom";
import AppLayout from "../components/Layout/AppLayout";
import PageHeader from "../components/Layout/PageHeader";
import speakingScenarios from "../data/speakingScenarios";

function ScenarioLevels() {

  const [selectedLevel, setSelectedLevel] =
    useState("a1");

  return (
    <AppLayout>

      <div className="speaking-page">

        <PageHeader
          backTo="/speaking"
          backLabel="Speaking"
          title="Scenario Practice"
          subtitle="Choose a level to start a real-life conversation."
        />

        {/* LEVELS */}

        <div className="speaking-grid">

          <div
            className="speaking-card"
            onClick={() =>
              setSelectedLevel("a1")
            }
          >
            <h3>
              A1 Beginner
            </h3>

            <p>
              Basic conversations and daily life situations.
            </p>
          </div>

          <div
            className="speaking-card"
            onClick={() =>
              setSelectedLevel("a2")
            }
          >
            <h3>
              A2 Elementary
            </h3>

            <p>
              Travel, shopping and everyday communication.
            </p>
          </div>

          <div
            className="speaking-card"
            onClick={() =>
              setSelectedLevel("b1")
            }
          >
            <h3>
              B1 Intermediate
            </h3>

            <p>
              Work, studies and real-world discussions.
            </p>
          </div>

        </div>

        {/* SCENARIOS */}

        <h2
          className="section-title"
          style={{
            marginTop: "40px"
          }}
        >
          {selectedLevel.toUpperCase()} Scenarios
        </h2>

        <div className="speaking-grid">

          {speakingScenarios[selectedLevel]
            .map((scenario) => (

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

                <Link
                  to={`/speaking/scenarios/${selectedLevel}/${scenario.id}`}
                >
                  <button
                    className="activity-btn"
                  >
                    Start Practice
                  </button>
                </Link>

              </div>

          ))}

        </div>

      </div>

    </AppLayout>
  );
}

export default ScenarioLevels;