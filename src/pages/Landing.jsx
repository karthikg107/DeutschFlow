import "./Landing.css";
import { Link } from "react-router-dom";

function Landing() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="landing">
      {/* Navbar */}
      <header className="navbar">
        <h2 className="logo">DeutschFlow</h2>

        <nav>
          <button onClick={() => scrollToSection("features")}>
            Features
          </button>

          <button onClick={() => scrollToSection("pricing")}>
            Pricing
          </button>

          <button onClick={() => scrollToSection("reviews")}>
            Reviews
          </button>

          <Link to="/dashboard" className="nav-btn">
            Open App
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-left">
          <span className="tag">🇩🇪 Learn German Faster</span>

          <h1>
            Speak German With <span>Confidence</span>
          </h1>

          <p>
            AI speaking coach, smart flashcards, grammar mastery,
            and real-life conversations that make fluency easier.
          </p>

          <div className="hero-buttons">
            <Link to="/dashboard" className="cta-btn">
              Start Free
            </Link>

            <button className="secondary-btn">
              Watch Demo
            </button>
          </div>

          <div className="stats">
            <div>
              <h3>15K+</h3>
              <p>Students</p>
            </div>

            <div>
              <h3>4.9★</h3>
              <p>Rating</p>
            </div>

            <div>
              <h3>94%</h3>
              <p>Success Rate</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="glass-card">
            <h3>Today's Progress</h3>
            <p>Vocabulary: 18 / 20</p>
            <p>Speaking XP: +60</p>
            <p>Grammar Quiz: Completed</p>

            <button>Continue Lesson</button>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="logos">
        <p>Trusted by learners from</p>

        <div className="logo-row">
          <span>Berlin</span>
          <span>Munich</span>
          <span>Hamburg</span>
          <span>Frankfurt</span>
          <span>Stuttgart</span>
        </div>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <h2>Everything You Need</h2>

        <div className="feature-grid">
          <div className="card">
            <h3>AI Speaking Coach</h3>
            <p>Natural German conversations with instant corrections.</p>
          </div>

          <div className="card">
            <h3>Smart Flashcards</h3>
            <p>Learn faster using spaced repetition memory system.</p>
          </div>

          <div className="card">
            <h3>Grammar Builder</h3>
            <p>Clear lessons with examples and real use cases.</p>
          </div>

          <div className="card">
            <h3>Daily Challenges</h3>
            <p>Stay consistent and build long streaks daily.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing" id="pricing">
        <h2>Simple Pricing</h2>

        <div className="price-grid">
          <div className="price-card">
            <h3>Free</h3>
            <h1>€0</h1>
            <p>Basic practice tools</p>

            <Link to="/dashboard" className="cta-btn">
              Get Started
            </Link>
          </div>

          <div className="price-card premium">
            <h3>Pro</h3>
            <h1>€9</h1>
            <p>AI Coach + Full Access</p>

            <button>Go Premium</button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="reviews" id="reviews">
        <h2>Loved by Students</h2>

        <div className="review-grid">
          <div className="review-card">
            <p>
              Best German learning app I used.
              Speaking confidence improved fast.
            </p>
            <h4>Arjun</h4>
          </div>

          <div className="review-card">
            <p>
              Way better than boring grammar books.
              Clean and fun.
            </p>
            <h4>Sophia</h4>
          </div>

          <div className="review-card">
            <p>
              Helped me prepare for life in Germany quickly.
            </p>
            <h4>Rahul</h4>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Become Fluent?</h2>

        <Link to="/dashboard" className="primary-btn">
          Start Learning Today
        </Link>
      </section>
    </div>
  );
}

export default Landing;