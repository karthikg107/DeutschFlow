import { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Trophy, Flame, BookOpen, TrendingUp, AlertTriangle } from "lucide-react";
import api from "../utils/api";
import "../styles/dashboard.css";
import { useAuth } from "../context/AuthContext";
import AppLayout from "../components/Layout/AppLayout";

// ── Error Boundary ──────────────────────────────────────────
class DashboardErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="dash-error-wrap">
          <AlertTriangle size={36} strokeWidth={1.5} className="dash-error-emoji" />
          <h2 className="dash-error-title">Something went wrong</h2>
          <p className="dash-error-sub">We couldn't load your dashboard.</p>
          <button
            className="dash-error-btn"
            onClick={() => window.location.reload()}
          >
            Refresh page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// ── Skeleton ────────────────────────────────────────────────
function DashboardSkeleton() {
  return (
    <div className="elite-dashboard">
      <div className="dash-skel dash-skel-hero" />
      <div className="stats-grid">
        <div className="dash-skel dash-skel-stat" />
        <div className="dash-skel dash-skel-stat" />
        <div className="dash-skel dash-skel-stat" />
        <div className="dash-skel dash-skel-stat" />
      </div>
      <div className="dash-skel dash-skel-section" />
    </div>
  );
}

// ── Main dashboard content ───────────────────────────────────
function DashboardInner() {
  const { user } = useAuth();
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("/dashboard");
        setDashboard(data);
      } catch {
        setFetchError("Couldn't load your stats. Check your connection.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <DashboardSkeleton />;

  const xp = dashboard?.user?.xp || 0;
  const streak = dashboard?.user?.streak || 0;
  const completedLessons = dashboard?.stats?.completedLessons || 0;
  const progressPercentage = dashboard?.stats?.progressPercentage || 0;
  const continueLearning = dashboard?.continueLearning;
  const level = Math.floor(xp / 100) + 1;
  const levelProgress = xp % 100;
  const firstName = user?.name?.split(" ")[0] || "Learner";

  const stats = [
    { icon: <Trophy size={18} />,     value: xp,                      label: "Total XP" },
    { icon: <Flame size={18} />,      value: streak,                   label: "Day Streak" },
    { icon: <BookOpen size={18} />,   value: completedLessons,         label: "Lessons Done" },
    { icon: <TrendingUp size={18} />, value: `${progressPercentage}%`, label: "Progress" },
  ];

  return (
    <div className="elite-dashboard">
      {fetchError && (
        <div className="dash-fetch-error">{fetchError}</div>
      )}

      {/* Hero */}
      <section className="hero-card">
        <p className="dash-eyebrow">AI German Coach</p>
        <h1 className="dash-greeting">Hallo, {firstName}</h1>
        <p className="dash-sub">
          Continue learning German with smart daily practice.
        </p>

        <div className="hero-buttons">
          {continueLearning ? (
            <Link
              to={`/grammar/${continueLearning.slug}`}
              className="elite-btn"
            >
              Continue Learning →
            </Link>
          ) : (
            <Link to="/grammar" className="elite-btn">
              Start Learning →
            </Link>
          )}
        </div>
      </section>

      {/* Stats */}
      <div className="stats-grid">
        {stats.map((s) => (
          <div key={s.label} className="stats-card">
            <div className="stats-icon stats-icon-svg">{s.icon}</div>
            <strong className="stats-value">{s.value}</strong>
            <p className="stats-label">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Level progress */}
      <section className="section-card">
        <div className="progress-top">
          <span className="progress-level-label">Level {level}</span>
          <span className="progress-xp-label">{levelProgress} / 100 XP</span>
        </div>
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${levelProgress}%` }}
          />
        </div>
        <p className="progress-hint">
          {100 - levelProgress} XP to reach Level {level + 1}
        </p>
      </section>
    </div>
  );
}

// ── Export ──────────────────────────────────────────────────
function Dashboard() {
  return (
    <AppLayout>
      <DashboardErrorBoundary>
        <DashboardInner />
      </DashboardErrorBoundary>
    </AppLayout>
  );
}

export default Dashboard;
