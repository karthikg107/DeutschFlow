import { Link } from "react-router-dom";
import AppLayout from "../components/Layout/AppLayout";
import PageHeader from "../components/Layout/PageHeader";

function PronunciationLevels() {
  return (
    <AppLayout>
      <div className="speaking-page">

        <PageHeader
          backTo="/speaking"
          backLabel="Speaking"
          title="Pronunciation Practice"
          subtitle="Choose your level to begin."
        />

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