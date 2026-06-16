import { Link } from "react-router-dom";
import AppLayout from "../components/Layout/AppLayout";

import "../styles/speaking.css";

function Speak() {
  return (
    <AppLayout>
      <div className="speaking-page">

        {/* HERO */}

        <div className="speaking-hero">

          <h1>
            German Speaking
          </h1>

          <p>
            Improve your German speaking confidence through
            pronunciation practice, real-life scenarios and
            AI conversations.
          </p>

        </div>

        {/* CONTINUE SPEAKING */}

        

        {/* ACTIVITIES */}

        <h2 className="section-title">
          Speaking Activities
        </h2>

        <div className="speaking-levels">

          {/* PRONUNCIATION */}

          <Link
            to="/speaking/pronunciation"
            className="speaking-level-card"
          >
            <div className="level-content">

              <h2>
  Practice Pronunciation
</h2>

<p>
  Practice German sentences, pronunciation
  and speaking accuracy.
</p>

<button className="activity-btn">
  Start Practice
</button>

            </div>

          </Link>

          {/* SCENARIOS */}

          <Link
            to="/speaking/scenarios"
            className="speaking-level-card"
          >
            <div className="level-content">

              <div>

                <h2>
                  Scenario Practice
                </h2>

                <p>
                  Practice real-life conversations with
                  guided speaking scenarios.
                </p>

              </div>

              <button className="activity-btn">
  Start Scenarios
</button>

            </div>

          </Link>

          {/* FREE CHAT */}

          <Link
            to="/speaking/free-chat"
            className="speaking-level-card"
          >
            <div className="level-content">

              <div>

                <h2>
                  Free Chat With AI
                </h2>

                <p>
                  Have open German conversations and receive
                  feedback from your AI tutor.
                </p>

              </div>

              <button className="activity-btn">
  Start Chat
</button>

            </div>

          </Link>

        </div>

      </div>
    </AppLayout>
  );
}

export default Speak;