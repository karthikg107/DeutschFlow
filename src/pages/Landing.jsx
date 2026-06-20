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
  <div className="logo-container">
    <img
      src="/logo.png"
      alt="DeutschFlow"
      className="logo-image"
    />

    <h2 className="logo-text">
      DeutschFlow
    </h2>
  </div>

  <nav>
    <button onClick={() => scrollToSection("features")}>
      Features
    </button>

    <button onClick={() => scrollToSection("pricing")}>
      Pricing
    </button>

    <Link to="/dashboard" className="nav-btn">
      Open App
    </Link>
  </nav>
</header>

      {/* Hero */}
      <section className="hero">
  <div className="hero-left">

    <span className="tag">
      🇩🇪 Learn German Smarter
    </span>

    <h1>
      Learn German Through
      <span> Real Conversations</span>
    </h1>

    <p>
      Practice speaking with AI, master grammar,
      build vocabulary, and improve pronunciation
      all in one place.
    </p>

    <div className="hero-buttons">
      <Link to="/dashboard" className="cta-btn">
        Start Learning Free
      </Link>

      <Link to="/dashboard" className="secondary-btn">
        Open App
      </Link>
    </div>

    <div className="hero-highlights">
      <span>✓ AI Tutor</span>
      <span>✓ Speaking Practice</span>
      <span>✓ Grammar</span>
      <span>✓ Vocabulary</span>
    </div>

  </div>

  <div className="hero-right">
    <img
      src="/logo.png"
      alt="DeutschFlow Logo"
      className="hero-logo"
    />
  </div>
</section>


      {/* Features */}
      <section className="features" id="features">

  <h2>Everything You Need To Learn German</h2>

  <div className="feature-grid">

    <div className="card">
      <h3>AI Tutor</h3>
      <p>
        Chat, translate, and improve your German
        with AI assistance.
      </p>
    </div>

    <div className="card">
      <h3>Grammar Roadmap</h3>
      <p>
        Structured lessons with quizzes and guided
        progression.
      </p>
    </div>

    <div className="card">
      <h3>Vocabulary Builder</h3>
      <p>
        Learn vocabulary through topics, search,
        and saved word collections.
      </p>
    </div>

    <div className="card">
      <h3>Speaking Practice</h3>
      <p>
        Pronunciation training, scenarios, and
        free conversation practice.
      </p>
    </div>

  </div>

</section>


<section className="speaking-showcase">

  <h2>Practice Speaking With Confidence</h2>

  <div className="feature-grid">

    <div className="card">
      <h3>Pronunciation Practice</h3>
      <p>
        Listen, repeat, and improve your
        German pronunciation.
      </p>
    </div>

    <div className="card">
      <h3>Scenario Practice</h3>
      <p>
        Real-life conversations with guided
        speaking feedback.
      </p>
    </div>

    <div className="card">
      <h3>Talk With Mia</h3>
      <p>
        Open German conversations powered
        by AI.
      </p>
    </div>

  </div>

</section>


      {/* Pricing */}
      <section className="pricing" id="pricing">

  <h2>Choose Your Plan</h2>

  <div className="price-grid">

    <div className="price-card">

      <h3>Free</h3>

      <ul>
        <li>✓ Grammar Lessons</li>
        <li>✓ Vocabulary Builder</li>
        <li>✓ Basic Pronunciation Practice</li>
      </ul>

    </div>

    <div className="price-card premium">

      <h3>Premium</h3>
      <h1>€4.99/mo</h1>
      <p>7-day free trial</p>

      <ul>
        <li>✓ AI Tutor</li>
        <li>✓ Scenario Practice</li>
        <li>✓ Talk With Mia</li>
        <li>✓ Future AI Features</li>
      </ul>

    </div>


  </div>

</section>


      {/* CTA */}
      <section className="cta">

  <h2>Ready To Start Learning German?</h2>

  <p>
    Practice every day with AI-powered learning
    tools designed for real conversations.
  </p>

  <Link to="/dashboard" className="primary-btn">
    Start Learning Free
  </Link>

</section>

<footer className="footer">
  <img
    src="/logo.png"
    alt="DeutschFlow"
    className="footer-logo"
  />

  <p>DeutschFlow</p>

  <small>
    Learn German through speaking, practice, and real conversations.
  </small>
</footer>


    </div>
  );
}

export default Landing;