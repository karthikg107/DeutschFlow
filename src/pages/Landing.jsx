import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Landing.css";

function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="landing-page">

      {/* ── Navbar ── */}
      <header className="landing-nav">
        <Link to="/" className="nav-logo">
          <img src="/logo.png" alt="DeutschFlow" />
          <span className="nav-logo-text">DeutschFlow</span>
        </Link>

        <nav className="nav-links">
          <button className="nav-link-btn" onClick={() => scrollTo("features")}>
            Features
          </button>
          <button className="nav-link-btn" onClick={() => scrollTo("pricing")}>
            Pricing
          </button>
          <Link to="/login" className="nav-link-a">Sign in</Link>
          <Link to="/register" className="nav-cta">Get started</Link>
        </nav>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </header>

      {/* ── Mobile overlay menu ── */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-top">
            <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
              <img src="/logo.png" alt="DeutschFlow" />
              <span className="nav-logo-text">DeutschFlow</span>
            </Link>
            <button
              className="nav-hamburger"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="mobile-menu-links">
            <button className="mobile-menu-btn" onClick={() => scrollTo("features")}>
              Features
            </button>
            <button className="mobile-menu-btn" onClick={() => scrollTo("pricing")}>
              Pricing
            </button>
            <Link
              to="/login"
              className="mobile-menu-link"
              onClick={() => setMenuOpen(false)}
            >
              Sign in
            </Link>
          </div>

          <Link
            to="/register"
            className="mobile-menu-cta"
            onClick={() => setMenuOpen(false)}
          >
            Get started free
          </Link>
        </div>
      )}

      {/* ── Hero ── */}
      <section className="landing-hero">
        <div className="hero-badge">
          <span>🇩🇪</span>
          AI-Powered German Learning
        </div>

        <h1 className="hero-h1">
          Learn German Through
          <br />
          <em>Real Conversations</em>
        </h1>

        <p className="hero-sub">
          Practice with an AI tutor, master grammar, build vocabulary,
          and improve your speaking — all in one platform.
        </p>

        <div className="hero-actions">
          <Link to="/register" className="btn-primary">
            Start for free →
          </Link>
          <Link to="/login" className="btn-ghost">
            Sign in
          </Link>
        </div>

        <div className="trust-badges">
          <span className="trust-badge">🤖 AI Tutor</span>
          <span className="trust-badge">📖 Grammar</span>
          <span className="trust-badge">📚 Vocabulary</span>
          <span className="trust-badge">🎤 Speaking</span>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="landing-section" id="features">
        <p className="section-label">Features</p>
        <h2 className="section-h2">Everything you need to learn German</h2>
        <p className="section-sub">
          A complete toolkit — from grammar fundamentals to real conversation practice.
        </p>

        <div className="feature-grid">
          <div className="feature-card">
            <span className="feature-icon">🤖</span>
            <h3>AI Tutor</h3>
            <p>
              Chat, translate, and get real-time corrections from an AI tutor
              built for German learners.
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">📖</span>
            <h3>Grammar Roadmap</h3>
            <p>
              Structured lessons with quizzes and guided progression from A1
              through to B2.
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">📚</span>
            <h3>Vocabulary Builder</h3>
            <p>
              Topic-based word sets, vocabulary quizzes, and a personal saved
              collection to review anytime.
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🎤</span>
            <h3>Speaking Practice</h3>
            <p>
              Pronunciation drills, real-life scenario dialogues, and open
              conversation with Mia.
            </p>
          </div>
        </div>
      </section>

      {/* ── Speaking showcase ── */}
      <section className="landing-section">
        <p className="section-label">Speaking</p>
        <h2 className="section-h2">Practice speaking with confidence</h2>
        <p className="section-sub">
          Three modes to train your spoken German — from basic pronunciation to
          fluent free conversation.
        </p>

        <div className="feature-grid">
          <div className="feature-card">
            <span className="feature-icon">🗣️</span>
            <h3>Pronunciation Practice</h3>
            <p>
              Listen to native sentences, repeat aloud, and get instant
              feedback on your pronunciation accuracy.
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">🏪</span>
            <h3>Scenario Practice</h3>
            <p>
              Practice real-life dialogues — at the café, train station, job
              interview, and more.
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">💬</span>
            <h3>Talk With Mia</h3>
            <p>
              Open-ended German conversation powered by AI. Talk about anything,
              anytime, at your own pace.
            </p>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="landing-section" id="pricing">
        <p className="section-label">Pricing</p>
        <h2 className="section-h2">Simple, honest pricing</h2>
        <p className="section-sub">
          Start free. Upgrade when you're ready for the full AI experience.
        </p>

        <div className="pricing-cards">
          <div className="pricing-card">
            <p className="plan-name">Free</p>
            <p className="plan-price">€0</p>
            <p className="plan-period">Forever free — no card needed</p>
            <ul className="plan-features">
              <li>Grammar lessons &amp; roadmap</li>
              <li>Vocabulary builder</li>
              <li>Basic pronunciation practice</li>
            </ul>
            <Link to="/register" className="plan-btn free-btn">
              Get started
            </Link>
          </div>

          <div className="pricing-card premium">
            <span className="plan-badge">Most popular</span>
            <p className="plan-name">Premium</p>
            <p className="plan-price">
              €4<span>.99/mo</span>
            </p>
            <p className="plan-period">7-day free trial included</p>
            <ul className="plan-features">
              <li>Everything in Free</li>
              <li>AI Tutor — unlimited chats</li>
              <li>Scenario Practice</li>
              <li>Talk With Mia</li>
              <li>Early access to new features</li>
            </ul>
            <Link to="/register" className="plan-btn premium-btn">
              Start free trial
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <div className="cta-banner">
        <h2>Ready to speak German?</h2>
        <p>
          Join thousands of learners building real German skills every day.
        </p>
        <Link to="/register" className="btn-primary">
          Start learning free →
        </Link>
      </div>

      {/* ── Footer ── */}
      <footer className="landing-footer">
        <Link to="/" className="footer-logo">
          <img src="/logo.png" alt="DeutschFlow" />
          <span className="footer-logo-text">DeutschFlow</span>
        </Link>

        <div className="footer-links">
          <Link to="/pricing" className="footer-link">Pricing</Link>
          <Link to="/privacy" className="footer-link">Privacy</Link>
          <Link to="/terms" className="footer-link">Terms</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>

        <p className="footer-copy">© 2026 DeutschFlow. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default Landing;
