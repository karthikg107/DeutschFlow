import { Link } from "react-router-dom";
import AppLayout from "../components/Layout/AppLayout";
import PageHeader from "../components/Layout/PageHeader";
import { useEffect, useState } from "react";
import api from "../utils/api";
import "../styles/vocabulary.css";

const LEVELS = [
  {
    code: "A1",
    title: "Beginner",
    description: "Build your foundation with everyday German vocabulary.",
  },
  {
    code: "A2",
    title: "Elementary",
    description: "Expand your vocabulary for daily conversations.",
  },
  {
    code: "B1",
    title: "Intermediate",
    description: "German for work, university and life in Germany.",
  },
];

function Vocabulary() {
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    api.get("/vocabulary/saved")
      .then((r) => setSavedCount(r.data.length))
      .catch(() => {});
  }, []);

  return (
    <AppLayout>
      <div className="vocab-page">
        <PageHeader
          title="Vocabulary"
          subtitle="Build your German word bank by level."
        />

        <div className="vocab-grid">
          {/* Level cards */}
          <div className="vocab-levels">
            {LEVELS.map((lv) => (
              <Link key={lv.code} to={`/vocabulary/${lv.code}`} className="vocab-level-card">
                <div className="vocab-level-code">{lv.code}</div>
                <div className="vocab-level-name">{lv.title}</div>
                <div className="vocab-level-desc">{lv.description}</div>
                <div className="vocab-level-cta">Explore →</div>
              </Link>
            ))}
          </div>

          {/* Saved collection */}
          <Link to="/vocabulary/saved" className="vocab-saved-card">
            <div>
              <div className="vocab-saved-title">Saved Vocabulary</div>
              <div className="vocab-saved-desc">
                Review vocabulary you have bookmarked from all levels.
              </div>
              <div className="vocab-saved-count">{savedCount} saved words</div>
            </div>
            <div className="vocab-saved-cta">View Collection →</div>
          </Link>
        </div>
      </div>
    </AppLayout>
  );
}

export default Vocabulary;
