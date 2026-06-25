import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppLayout from "../components/Layout/AppLayout";
import PageHeader from "../components/Layout/PageHeader";
import api from "../utils/api";
import toast from "react-hot-toast";
import "../styles/dashboard.css";
import "../styles/grammar.css";

// ── ExerciseCard lives outside GrammarTopic to avoid re-creation every render ──
function ExerciseCard({ question, options, answer, explanation, onComplete }) {
  const [selected, setSelected]       = useState(null);
  const [showResult, setShowResult]   = useState(false);

  return (
    <div className="exercise-wrap">
      <p className="exercise-question">{question}</p>

      <div className="exercise-options">
        {options.map((option) => {
          const isCorrect = selected === option && option === answer;
          const isWrong   = selected === option && option !== answer;
          const isDimmed  = selected && selected !== option;

          return (
            <button
              key={option}
              className={`exercise-option${
                isCorrect ? " correct" : isWrong ? " wrong" : isDimmed ? " dimmed" : ""
              }`}
              onClick={() => {
                if (selected) return;
                setSelected(option);
                setShowResult(true);
                if (option === answer) onComplete();
              }}
            >
              {option}
            </button>
          );
        })}
      </div>

      {showResult && (
        <div className="exercise-result">
          {selected === answer ? (
            <div>✅ Correct!</div>
          ) : (
            <div>❌ Correct answer: {answer}</div>
          )}
          <p className="exercise-explanation">{explanation}</p>
        </div>
      )}
    </div>
  );
}

// ── Main topic page ──────────────────────────────────────────────────────────
function GrammarTopic() {
  const { slug } = useParams();
  const [topic, setTopic]   = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`/grammar/topic/${slug}`);
        setTopic(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [slug]);

  const saveProgress = async () => {
    try {
      await api.post("/progress/save", { lessonSlug: slug });
      toast.success("Lesson completed!");
    } catch (err) {
      console.error("Failed to save progress", err);
    }
  };

  const renderContent = (content, sectionType) => {
    try {
      const parsed = JSON.parse(content);

      // Exercise
      if (sectionType === "exercise") {
        return (
          <ExerciseCard
            question={parsed.question}
            options={parsed.options}
            answer={parsed.answer}
            explanation={parsed.explanation}
            onComplete={saveProgress}
          />
        );
      }

      // Table
      if (parsed.headers && parsed.rows) {
        return (
          <div className="lesson-table-wrap">
            <table className="lesson-table">
              <thead>
                <tr>
                  {parsed.headers.map((h, i) => <th key={i}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {parsed.rows.map((row, ri) => (
                  <tr key={ri}>
                    {row.map((cell, ci) => <td key={ci}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }

      // Array (bullets or key-value)
      if (Array.isArray(parsed)) {
        return (
          <div>
            {parsed.map((item, i) => (
              <div key={i} className="lesson-list-item">
                {typeof item === "string" ? (
                  <div>• {item}</div>
                ) : (
                  <div>
                    {Object.entries(item).map(([k, v]) => (
                      <div key={k} style={{ lineHeight: "1.75" }}>
                        <strong style={{ textTransform: "capitalize" }}>{k}:</strong> {v}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      }

      return <p className="lesson-text">{content}</p>;
    } catch {
      return <p className="lesson-text">{content}</p>;
    }
  };

  if (loading) {
    return (
      <AppLayout>
        <div className="lesson-state">Loading lesson…</div>
      </AppLayout>
    );
  }

  if (!topic) {
    return (
      <AppLayout>
        <div className="lesson-state">Lesson not found.</div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="elite-dashboard lesson-page">
        <PageHeader
          backTo="/grammar"
          backLabel="Grammar"
          title={topic.title}
          subtitle={topic.description}
        />

        <div className="lesson-content">
          {topic.sections.map((section) => (
            <div key={section.id} className="lesson-section">
              {section.title && (
                <h2 className="lesson-section-title">{section.title}</h2>
              )}
              {renderContent(section.content, section.type)}
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}

export default GrammarTopic;
