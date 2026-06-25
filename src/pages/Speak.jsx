import { Link } from "react-router-dom";
import AppLayout from "../components/Layout/AppLayout";
import "../styles/speaking.css";

const ACTIVITIES = [
  {
    icon: "🗣️",
    title: "Pronunciation Practice",
    desc: "Listen to German sentences and practice speaking them aloud. Get instant feedback on accuracy.",
    to: "/speaking/pronunciation",
    cta: "Start Practice",
  },
  {
    icon: "🏪",
    title: "Scenario Practice",
    desc: "Practice real-life dialogues — at the café, train station, job interview, and more.",
    to: "/speaking/scenarios",
    cta: "Start Scenarios",
  },
  {
    icon: "💬",
    title: "Talk With Mia",
    desc: "Open-ended German conversation powered by AI. Talk about anything, at your own pace.",
    to: "/speaking/talk-with-mia",
    cta: "Start Conversation",
  },
];

function Speak() {
  return (
    <AppLayout>
      <div className="speaking-page">
        <div className="speaking-hero">
          <h1>German Speaking</h1>
          <p>
            Improve your German speaking confidence through pronunciation practice,
            real-life scenarios and AI conversations.
          </p>
        </div>

        <h2 className="section-title">Speaking Activities</h2>

        <div className="speaking-levels">
          {ACTIVITIES.map((act) => (
            <Link key={act.to} to={act.to} className="speaking-level-card">
              <div className="level-content">
                <div>
                  <div className="speak-act-icon">{act.icon}</div>
                  <h2>{act.title}</h2>
                  <p>{act.desc}</p>
                </div>
                <button className="activity-btn">{act.cta}</button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}

export default Speak;
