import { Link } from "react-router-dom";
import AppLayout from "../components/Layout/AppLayout";

function PronunciationLevels() {
  return (
    <AppLayout>
      <div className="speaking-page">

        <Link
          to="/speaking"
          className="back-btn"
        >
          ← Back to Speaking
        </Link>

        <div className="speaking-hero">

          <h1>
            Pronunciation Practice
          </h1>

          <p>
            Improve your German pronunciation by
            listening, repeating, and speaking real
            German sentences aloud.
          </p>

        </div>

        <div className="speaking-grid">

          <Link
            to="/speaking/pronunciation/a1"
            className="speaking-level-card"
          >

            <div className="level-header">

              <h2>A1</h2>

              <span>
                Beginner
              </span>

            </div>

            <p>
              Learn everyday German sentences and
              build confidence with basic speaking.
            </p>

            <div className="level-footer">
              25 Sentences
            </div>

          </Link>

          <Link
            to="/speaking/pronunciation/a2"
            className="speaking-level-card"
          >

            <div className="level-header">

              <h2>A2</h2>

              <span>
                Elementary
              </span>

            </div>

            <p>
              Practice longer conversations and
              common situations from daily life.
            </p>

            <div className="level-footer">
              25 Sentences
            </div>

          </Link>

          <Link
            to="/speaking/pronunciation/b1"
            className="speaking-level-card"
          >

            <div className="level-header">

              <h2>B1</h2>

              <span>
                Intermediate
              </span>

            </div>

            <p>
              Speak naturally using real-world
              German expressions and opinions.
            </p>

            <div className="level-footer">
              25 Sentences
            </div>

          </Link>

        </div>

      </div>
    </AppLayout>
  );
}

export default PronunciationLevels;