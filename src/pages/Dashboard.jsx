import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import api from "../utils/api";

import "../styles/dashboard.css";

import { useAuth } from "../context/AuthContext";
import AppLayout from "../components/layout/AppLayout";

function Dashboard() {
 
  const { user } = useAuth();

  const [dashboard, setDashboard] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchDashboard = async () => {

      try {

        const { data } =
          await api.get("/dashboard");

        setDashboard(data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);
      }
    };

    fetchDashboard();

  }, []);

  if (loading) {

    return (
      <AppLayout>
      <div className="elite-dashboard">
        Loading dashboard...
      </div>
      </AppLayout>
    );
  }

  const xp =
  dashboard?.user?.xp || 0;

const streak =
  dashboard?.user?.streak || 0;

const completedLessons =
  dashboard?.stats?.completedLessons || 0;

const progressPercentage =
  dashboard?.stats?.progressPercentage || 0;

  const continueLearning =
    dashboard?.continueLearning;

  const level =
    Math.floor(xp / 100) + 1;

  const progress =
    xp % 100;

  const firstName =
  user?.name?.split(" ")[0] || "Learner";  

  return (
    <AppLayout>

    <div className="elite-dashboard">

      {/* HERO */}

      <section className="hero-card">

        <p className="miniText">
          AI German Coach
        </p>

        <h1>
  Hallo, {firstName} 👋
</h1>

        <p>
          Continue learning German
          with smart daily practice.
        </p>

        <div className="hero-buttons">

  {continueLearning ? (

    <Link
      to={`/grammar/${continueLearning.slug}`}
    >
      <button className="elite-btn">
        Continue Learning
      </button>
    </Link>

  ) : (

    <Link to="/grammar">

      <button className="elite-btn">
        Start Learning
      </button>

    </Link>

  )}

</div>

      </section>

      {/* STATS */}

      <section className="stats-grid">

        <div className="stats-card">

          <div className="stats-icon">
            🏆
          </div>

          <h3>{xp}</h3>

          <p>Total XP</p>

        </div>

        <div className="stats-card">

          <div className="stats-icon">
            🔥
          </div>

          <h3>{streak}</h3>

          <p>Day Streak</p>

        </div>

        <div className="stats-card">

          <div className="stats-icon">
            📚
          </div>

          <h3>{completedLessons}</h3>

          <p>Lessons Done</p>

        </div>

        <div className="stats-card">

          <div className="stats-icon">
            📈
          </div>

          <h3>{progressPercentage}%</h3>

          <p>Progress</p>

        </div>

      </section>

      {/* PROGRESS */}

      <section className="section-card">

        <h2>
          Level Progress
        </h2>

        <div className="progress-box">

          <div className="progress-top">

            <span>
              Level {level}
            </span>

            <span>
              {progress}%
            </span>

          </div>

          <div className="progress-track">

            <div
              className="progress-fill"
              style={{
                width: `${progress}%`
              }}
            />

          </div>

        </div>

      </section>



    </div>
    </AppLayout>
  );
}

export default Dashboard;