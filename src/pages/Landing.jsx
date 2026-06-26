import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Menu, X, Bot, BookOpen, Mic, GraduationCap,
  MessageSquare, Volume2, MapPin, Zap, Check,
  ChevronRight, Globe, Layers, Star,
} from "lucide-react";
import "./Landing.css";

function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Scroll-triggered fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="landing-page">

      {/* ── Navbar ── */}
      <header className="landing-nav">
        <Link to="/" className="nav-logo">
          <img src="/logo.png" alt="DeutschFlow" />
          <span className="nav-logo-text">DeutschFlow</span>
        </Link>

        <nav className="nav-links">
          <button className="nav-link-btn" onClick={() => scrollTo("how")}>
            How it works
          </button>
          <button className="nav-link-btn" onClick={() => scrollTo("features")}>
            Features
          </button>
          <button className="nav-link-btn" onClick={() => scrollTo("pricing")}>
            Pricing
          </button>
          <Link to="/login" className="nav-link-a">Sign in</Link>
          <Link to="/register" className="nav-cta">Get started free</Link>
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
            <button className="mobile-menu-btn" onClick={() => scrollTo("how")}>
              How it works
            </button>
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
        <div className="hero-badge fade-in">
          <span>🇩🇪</span>
          AI-Powered German Learning · Beta
        </div>

        <h1 className="hero-h1 fade-in">
          Learn German Through
          <br />
          <em>Real Conversations</em>
        </h1>

        <p className="hero-sub fade-in">
          Practice with a GPT-4 tutor, master grammar, build vocabulary,
          and improve your speaking — all in one free platform.
        </p>

        <div className="hero-actions fade-in">
          <Link to="/register" className="btn-primary">
            Start for free →
          </Link>
          <Link to="/login" className="btn-ghost">
            Sign in
          </Link>
        </div>

        <div className="trust-badges fade-in">
          <span className="trust-badge"><Bot size={14} /> AI Tutor</span>
          <span className="trust-badge"><GraduationCap size={14} /> Grammar</span>
          <span className="trust-badge"><BookOpen size={14} /> Vocabulary</span>
          <span className="trust-badge"><Mic size={14} /> Speaking</span>
        </div>
      </section>

      {/* ── Social Proof Bar ── */}
      <div className="proof-bar fade-in">
        <div className="proof-bar-inner">
          <span className="proof-item">
            <Bot size={14} /> Built with GPT-4
          </span>
          <span className="proof-sep" />
          <span className="proof-item">
            <BookOpen size={14} /> 1,900+ German words
          </span>
          <span className="proof-sep" />
          <span className="proof-item">
            <Layers size={14} /> A1 to B1 levels
          </span>
          <span className="proof-sep" />
          <span className="proof-item">
            <Star size={14} /> Free to start
          </span>
        </div>
      </div>

      {/* ── How It Works ── */}
      <section className="landing-section" id="how">
        <p className="section-label fade-in">How it works</p>
        <h2 className="section-h2 fade-in">Up and running in 60 seconds</h2>
        <p className="section-sub fade-in">
          No textbooks. No boring drills. Just you, AI, and real German.
        </p>

        <div className="how-steps">
          <div className="how-step fade-in">
            <div className="how-number">1</div>
            <div className="how-content">
              <h3>Create your free account in 30 seconds</h3>
              <p>Email verification only — no credit card, no commitment. Your account is free forever.</p>
            </div>
          </div>

          <div className="how-step fade-in">
            <div className="how-number">2</div>
            <div className="how-content">
              <h3>Pick your level — A1 beginner to B1 intermediate</h3>
              <p>Start from scratch or jump to your level. Grammar, vocabulary, and speaking adapt to where you are.</p>
            </div>
          </div>

          <div className="how-step fade-in">
            <div className="how-number">3</div>
            <div className="how-content">
              <h3>Learn daily with AI that corrects, explains, and converses</h3>
              <p>Your AI tutor spots mistakes, explains grammar in plain English, and chats with you in real German.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features Showcase ── */}
      <section className="landing-section" id="features">
        <p className="section-label fade-in">Features</p>
        <h2 className="section-h2 fade-in">Everything you need to learn German</h2>
        <p className="section-sub fade-in">
          A complete toolkit — from grammar fundamentals to fluent AI conversation.
        </p>

        {/* Grammar */}
        <div className="showcase-row fade-in">
          <div className="showcase-text">
            <div className="showcase-icon-wrap">
              <GraduationCap size={22} />
            </div>
            <h3 className="showcase-h3">Grammar Roadmap</h3>
            <p className="showcase-p">
              16 structured A1 topics with exercises, instant feedback, and XP rewards.
              Track your progress lesson by lesson with a clear visual roadmap.
            </p>
            <ul className="showcase-list">
              <li><Check size={14} /> A1 through B1 structured curriculum</li>
              <li><Check size={14} /> Instant quiz feedback and explanations</li>
              <li><Check size={14} /> XP system to track daily progress</li>
            </ul>
          </div>
          <div className="showcase-visual">
            <div className="mock-card">
              <div className="mock-label">Grammar · A1</div>
              <div className="mock-lessons">
                {["Articles & Nouns", "Present Tense", "Pronouns", "Modal Verbs"].map((t, i) => (
                  <div key={t} className={`mock-lesson ${i < 2 ? "done" : i === 2 ? "active" : ""}`}>
                    <span className="mock-lesson-dot" />
                    <span>{t}</span>
                    {i < 2 && <Check size={12} className="mock-check" />}
                  </div>
                ))}
              </div>
              <div className="mock-xp-bar">
                <div className="mock-xp-fill" style={{ width: "62%" }} />
              </div>
              <div className="mock-xp-label">620 / 1000 XP</div>
            </div>
          </div>
        </div>

        {/* Vocabulary */}
        <div className="showcase-row reverse fade-in">
          <div className="showcase-text">
            <div className="showcase-icon-wrap">
              <BookOpen size={22} />
            </div>
            <h3 className="showcase-h3">Vocabulary Builder</h3>
            <p className="showcase-p">
              Browse 1,900+ curated German words across A1, A2, and B1 levels.
              Save words to your personal bank and review them anytime.
            </p>
            <ul className="showcase-list">
              <li><Check size={14} /> 1,900+ words across A1 / A2 / B1</li>
              <li><Check size={14} /> Example sentences for every word</li>
              <li><Check size={14} /> Personal saved word bank</li>
            </ul>
          </div>
          <div className="showcase-visual">
            <div className="mock-card">
              <div className="mock-label">Vocabulary · A1</div>
              <div className="mock-word-list">
                {[
                  { de: "arbeiten", en: "to work", type: "verb" },
                  { de: "das Haus", en: "the house", type: "noun" },
                  { de: "schnell", en: "fast", type: "adj" },
                  { de: "weil", en: "because", type: "conj" },
                ].map((w) => (
                  <div key={w.de} className="mock-word-row">
                    <span className="mock-word-de">{w.de}</span>
                    <span className="mock-word-en">{w.en}</span>
                    <span className="mock-word-type">{w.type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI Tutor */}
        <div className="showcase-row fade-in">
          <div className="showcase-text">
            <div className="showcase-icon-wrap">
              <Bot size={22} />
            </div>
            <h3 className="showcase-h3">AI Tutor — Powered by GPT-4</h3>
            <p className="showcase-p">
              Three modes in one: Conversation, Correction, and Translation.
              Like having a native German tutor available 24/7 at no cost.
            </p>
            <ul className="showcase-list">
              <li><Check size={14} /> Chat freely in German at your level</li>
              <li><Check size={14} /> Paste sentences and get corrections</li>
              <li><Check size={14} /> Instant English ↔ German translation</li>
            </ul>
            <div className="showcase-levels">
              <div className="showcase-level">
                <span className="level-dot a1" />
                <span><strong>A1</strong> — Simple German + English conversations with grammar corrections</span>
              </div>
              <div className="showcase-level">
                <span className="level-dot a2" />
                <span><strong>A2</strong> — German + English mix with error corrections and explanations</span>
              </div>
              <div className="showcase-level">
                <span className="level-dot b1" />
                <span><strong>B1</strong> — Full German-only natural conversations, no corrections</span>
              </div>
            </div>
          </div>
          <div className="showcase-visual">
            <div className="mock-card mock-chat">
              <div className="mock-label">AI Tutor · Conversation</div>
              <div className="mock-messages">
                <div className="mock-msg ai">Hallo! Wie war dein Tag?</div>
                <div className="mock-msg user">Mein Tag war gut, danke!</div>
                <div className="mock-msg ai">
                  Sehr gut! Hast du heute etwas Interessantes gemacht?
                </div>
                <div className="mock-msg user typing">
                  <span /><span /><span />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Speaking */}
        <div className="showcase-row reverse fade-in">
          <div className="showcase-text">
            <div className="showcase-icon-wrap">
              <Mic size={22} />
            </div>
            <h3 className="showcase-h3">Speaking Practice</h3>
            <p className="showcase-p">
              Pronunciation practice with 75 sentences across A1/A2/B1 levels.
              19 real-life scenarios — ordering food, asking directions, job interviews.
            </p>
            <ul className="showcase-list">
              <li><Check size={14} /> 75 pronunciation sentences with audio</li>
              <li><Check size={14} /> 19 scenario dialogues across A1–B1</li>
              <li><Check size={14} /> Open conversation with AI partner Mia</li>
            </ul>
          </div>
          <div className="showcase-visual">
            <div className="mock-card">
              <div className="mock-label">Speaking · Scenarios</div>
              <div className="mock-scenarios">
                {[
                  "At the Café",
                  "Train Station",
                  "Job Interview",
                  "Doctor Visit",
                ].map((s, i) => (
                  <div key={s} className={`mock-scenario ${i === 1 ? "active" : ""}`}>
                    <MapPin size={12} />
                    <span>{s}</span>
                    {i === 1 && <span className="mock-active-pill">In progress</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Beta Banner ── */}
      <div className="beta-banner fade-in">
        <div className="beta-banner-inner">
          <div className="beta-icon"><Zap size={20} /></div>
          <div className="beta-text">
            <strong>DeutschFlow is in Beta</strong>
            <span> — All Premium features are FREE during the beta period. No credit card needed.</span>
          </div>
          <Link to="/register" className="beta-cta">
            Join free <ChevronRight size={15} />
          </Link>
        </div>
      </div>

      {/* ── Pricing ── */}
      <section className="landing-section" id="pricing">
        <p className="section-label fade-in">Pricing</p>
        <h2 className="section-h2 fade-in">Simple, honest pricing</h2>
        <p className="section-sub fade-in">
          Start free. Upgrade when you're ready for the full AI experience.
        </p>

        <div className="beta-note fade-in">
          <Star size={14} /> Premium is completely free during our beta period
        </div>

        <div className="pricing-cards fade-in">
          <div className="pricing-card">
            <p className="plan-name">Free</p>
            <p className="plan-price">€0</p>
            <p className="plan-period">Forever free — no card needed</p>
            <ul className="plan-features">
              <li>Grammar lessons &amp; roadmap</li>
              <li>1,900+ vocabulary browser</li>
              <li>Basic AI Tutor (10 messages/day)</li>
              <li>Basic pronunciation practice</li>
            </ul>
            <Link to="/register" className="plan-btn free-btn">
              Get started free
            </Link>
          </div>

          <div className="pricing-card premium">
            <span className="plan-badge">Free during beta</span>
            <p className="plan-name">Premium</p>
            <p className="plan-price">
              €2<span>.99/mo</span>
            </p>
            <p className="plan-period">Currently free · No credit card needed</p>
            <ul className="plan-features">
              <li>Everything in Free</li>
              <li>Unlimited AI Tutor chats</li>
              <li>All 19 speaking scenarios</li>
              <li>Talk with Mia — open AI conversation</li>
              <li>Priority support</li>
              <li>Early access to new features</li>
            </ul>
            <Link to="/register" className="plan-btn premium-btn">
              Get Premium free →
            </Link>
          </div>
        </div>

        <p className="pricing-fine fade-in">
          Prices in EUR (€). Beta users keep free access while beta lasts.
        </p>
      </section>

      {/* ── Final CTA ── */}
      <div className="cta-banner fade-in">
        <div className="cta-glow" />
        <p className="section-label" style={{ justifyContent: "center", display: "flex" }}>
          Get started
        </p>
        <h2>Start speaking German today</h2>
        <p>Join our beta — free forever for early users</p>
        <Link to="/register" className="btn-primary cta-btn-large">
          Create Free Account →
        </Link>
        <div className="cta-sub-note">
          <Globe size={13} /> No credit card · No commitment · Cancel anytime
        </div>
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
