import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppLayout from "../components/Layout/AppLayout";
import PageHeader from "../components/Layout/PageHeader";
import api from "../utils/api";
import "../styles/dashboard.css";
import "../styles/grammar.css";

const UNITS = [
  {
    title: "Foundations",
    desc: "Learn the core basics of German pronunciation, pronouns, numbers, and verbs.",
    topics: ["alphabet", "pronouns", "numbers", "present-tense"],
  },
  {
    title: "Building Sentences",
    desc: "Understand sentence formation and how questions work in German.",
    topics: ["sentence-structure", "w-questions", "yes-no-questions"],
  },
  {
    title: "Grammar Basics",
    desc: "Master articles, cases, and possessive structures.",
    topics: ["articles", "nominativ", "akkusativ", "possessive-pronouns"],
  },
  {
    title: "Real Communication",
    desc: "Build practical communication skills with modal verbs and daily conversation grammar.",
    topics: ["modal-verbs", "separable-verbs", "negation", "time-date", "dativ"],
  },
];

function Grammar() {
  const navigate = useNavigate();
  const [levels, setLevels]                   = useState([]);
  const [loading, setLoading]                 = useState(true);
  const [completedLessons, setCompletedLessons] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const [grammarRes, progressRes] = await Promise.all([
          api.get("/grammar"),
          api.get("/progress"),
        ]);
        setLevels(grammarRes.data);
        setCompletedLessons(progressRes.data.map((item) => item.lessonSlug));
      } catch (err) {
        console.error("Failed to fetch grammar:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const allTopics = levels.flatMap((lv) => lv.topics);
  const nextLesson = allTopics.find((t) => !completedLessons.includes(t.slug));

  return (
    <AppLayout>
      <div className="elite-dashboard grammar-page">

        <PageHeader
          title="Grammar"
          subtitle="Structured lessons from A1 through B2."
        />

        {nextLesson && (
          <div className="grammar-continue">
            <p className="grammar-continue-label">Continue Learning</p>
            <h2>{nextLesson.title}</h2>
            <p>{nextLesson.description}</p>
            <button
              className="elite-btn"
              onClick={() => navigate(`/grammar/${nextLesson.slug}`)}
            >
              Resume Lesson
            </button>
          </div>
        )}

        {loading ? (
          <p className="grammar-loading">Loading grammar…</p>
        ) : (
          <div className="grammar-units">
            {UNITS.map((unit, unitIndex) => {
              const unitTopics = allTopics.filter((t) =>
                unit.topics.includes(t.slug)
              );
              return (
                <div key={unitIndex} className="grammar-unit">
                  <p className="unit-eyebrow">Unit {unitIndex + 1}</p>
                  <h2 className="unit-title">{unit.title}</h2>
                  <p className="unit-desc">{unit.desc}</p>

                  <div className="topic-list">
                    {unitTopics.map((topic, index) => {
                      const isCompleted = completedLessons.includes(topic.slug);
                      return (
                        <div key={topic.id}>
                          <Link
                            to={`/grammar/${topic.slug}`}
                            className="topic-card"
                          >
                            <div className="topic-card-body">
                              <p className="topic-card-label">
                                {isCompleted ? "Completed" : `Lesson ${index + 1}`}
                              </p>
                              <h3 className="topic-card-title">{topic.title}</h3>
                              <p className="topic-card-desc">{topic.description}</p>
                              <div className="topic-card-meta">
                                <span>Beginner</span>
                                <span>5–10 min</span>
                                <span>Grammar</span>
                              </div>
                            </div>
                            <span className={isCompleted ? "lesson-done-btn" : "lesson-open-btn"}>
                              {isCompleted ? "✓ Done" : "Open →"}
                            </span>
                          </Link>

                          {index !== unitTopics.length - 1 && (
                            <div className="topic-connector" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </AppLayout>
  );
}

export default Grammar;
