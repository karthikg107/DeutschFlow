import { Link } from "react-router-dom";
import { Mic, MessageSquare, Volume2 } from "lucide-react";
import AppLayout from "../components/Layout/AppLayout";
import PageHeader from "../components/Layout/PageHeader";
import "../styles/speaking.css";

const ACTIVITIES = [
  {
    icon: <Volume2 size={22} />,
    title: "Pronunciation Practice",
    desc: "Listen to German sentences and repeat aloud. Get instant feedback on your accuracy.",
    to: "/speaking/pronunciation",
    cta: "Start Practice",
    meta: "75 sentences across A1, A2 and B1",
  },
  {
    icon: <MessageSquare size={22} />,
    title: "Scenario Practice",
    desc: "Practice real-life dialogues — at the café, train station, job interview, and more.",
    to: "/speaking/scenarios",
    cta: "Start Scenarios",
    meta: "19 scenarios across A1, A2 and B1",
  },
  {
    icon: <Mic size={22} />,
    title: "Talk with Mia",
    desc: "Open-ended German conversation powered by AI. Talk about anything at your own pace.",
    to: "/speaking/talk-with-mia",
    cta: "Start Conversation",
    meta: "AI-powered free conversation",
  },
];

function Speak() {
  return (
    <AppLayout>
      <div className="speaking-page">
        <PageHeader
          title="Speaking Practice"
          subtitle="Three ways to build your spoken German."
        />

        <div className="speak-hub-grid">
          {ACTIVITIES.map((act) => (
            <Link key={act.to} to={act.to} className="speak-hub-card">
              <div className="speak-hub-icon">{act.icon}</div>
              <h3 className="speak-hub-title">{act.title}</h3>
              <p className="speak-hub-desc">{act.desc}</p>
              <p className="speak-hub-meta">{act.meta}</p>
              <span className="speak-hub-cta">{act.cta} →</span>
            </Link>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}

export default Speak;
