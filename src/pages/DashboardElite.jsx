import AppLayout from "../components/Layout/AppLayout";

import StatsCard from "../components/dashboard/StatsCard";
import ProgressBar from "../components/dashboard/ProgressBar";
import MissionCard from "../components/dashboard/MissionCard";
import AICoach from "../components/dashboard/AICoach";
import QuickActions from "../components/dashboard/QuickActions";
import Heatmap from "../components/dashboard/Heatmap";

import {
  stats,
  progress,
  missions,
} from "../data/dashboardData";

import "../styles/dashboard.css";

function DashboardElite() {
  return (
    <AppLayout>

      <div className="elite-dashboard">

        {/* HERO SECTION */}
        <div className="hero-card">

          <h1>
            Guten Abend, Karthik 👋
          </h1>

          <p>
            You're on a 12 day streak •
            180 XP until Level 8
          </p>

          <div className="hero-buttons">

            <button className="elite-btn">
              Continue Learning
            </button>

            <button className="elite-btn">
              Speaking Practice
            </button>

            <button className="elite-btn">
              Grammar Challenge
            </button>

          </div>

        </div>

        {/* STATS */}
        <div className="stats-grid">

          {stats.map((item, index) => (
            <StatsCard
              key={index}
              {...item}
            />
          ))}

        </div>

        {/* SKILL PROGRESS */}
        <div className="section-card">

          <h2>
            Skill Progress 📈
          </h2>

          {progress.map((item, index) => (
            <ProgressBar
              key={index}
              {...item}
            />
          ))}

        </div>

        {/* DAILY MISSIONS */}
        <MissionCard missions={missions} />

        {/* AI COACH */}
        <AICoach />

        {/* HEATMAP */}
        <Heatmap />

        {/* QUICK ACTIONS */}
        <QuickActions />

      </div>

    </AppLayout>
  );
}

export default DashboardElite;