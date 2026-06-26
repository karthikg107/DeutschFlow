import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import AppLayout from "../components/Layout/AppLayout";
import PageHeader from "../components/Layout/PageHeader";
import speakingScenarios from "../data/speakingScenarios";
import "../styles/speaking.css";

function ScenarioLevels() {
  const [selectedLevel, setSelectedLevel] = useState("a1");

  return (
    <AppLayout>
      <div className="speaking-page">
        <PageHeader
          backTo="/speaking"
          backLabel="Speaking"
          title="Scenario Practice"
          subtitle="Choose a level to start a real-life conversation."
        />

        <div className="scenario-level-tabs">
          {[
            { key: "a1", label: "A1", sub: "Beginner" },
            { key: "a2", label: "A2", sub: "Elementary" },
            { key: "b1", label: "B1", sub: "Intermediate" },
          ].map((lv) => (
            <button
              key={lv.key}
              className={`scenario-level-tab${selectedLevel === lv.key ? " active" : ""}`}
              onClick={() => setSelectedLevel(lv.key)}
            >
              <span className="tab-level">{lv.label}</span>
              <span className="tab-sub">{lv.sub}</span>
            </button>
          ))}
        </div>

        <p className="scenario-section-label">
          {selectedLevel.toUpperCase()} —{" "}
          {selectedLevel === "a1"
            ? "Beginner"
            : selectedLevel === "a2"
            ? "Elementary"
            : "Intermediate"}{" "}
          Scenarios
        </p>

        <div className="scenario-card-grid">
          {speakingScenarios[selectedLevel].map((scenario) => (
            <Link
              key={scenario.id}
              to={`/speaking/scenarios/${selectedLevel}/${scenario.id}`}
              className="scenario-list-card"
            >
              <div className="scenario-list-info">
                <p className="scenario-list-title">{scenario.title}</p>
                <p className="scenario-list-desc">{scenario.description}</p>
              </div>
              <ChevronRight size={16} className="scenario-list-arrow" />
            </Link>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}

export default ScenarioLevels;
