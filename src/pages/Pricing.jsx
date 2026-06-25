import AppLayout from "../components/Layout/AppLayout";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import "../styles/pricing.css";

export default function Pricing() {
  const { user } = useAuth();

  const currentPlan = user?.plan || "FREE";

  const freeFeatures = [
    "Grammar Lessons",
    "Vocabulary Training",
    "Sentence Pronunciation",
    "Basic AI Tutor",
  ];

  const premiumFeatures = [
    "Everything in Free",
    "Unlimited AI Tutor",
    "Premium Grammar Units",
    "Premium Vocabulary Packs",
    "Advanced Learning Analytics",
    "Early Access to New Features",
  ];

  return (
    <AppLayout>
      <div className="pricing-page">

        {/* Hero */}
        <section className="pricing-hero">

          <h1 className="pricing-title">
            Unlock Your Full German Learning Potential
          </h1>

          <p className="pricing-subtitle">
            Get unlimited AI conversations, premium lessons,
            advanced speaking practice, and future features.
          </p>

          <div className="current-plan-badge">
            Current Plan: {currentPlan}
          </div>

        </section>

        {/* Pricing Cards */}
        <section className="pricing-grid">

          {/* Free */}
          <div className="plan-card">

            <h2>Free</h2>

            <p className="plan-price">
              €0
              <span>/month</span>
            </p>

            <div className="plan-features">

              {freeFeatures.map((feature) => (
                <p key={feature}>
                  ✓ {feature}
                </p>
              ))}

            </div>

            <button className="plan-btn">
              {currentPlan === "FREE"
                ? "Current Plan"
                : "Free Plan"}
            </button>

          </div>

          {/* Premium */}
          <div className="plan-card premium-card">

            <div className="popular-badge">
              Most Popular
            </div>

            <h2>Premium</h2>

            <p className="plan-price">
              Coming Soon
            </p>

            <div className="plan-features">

              {premiumFeatures.map((feature) => (
                <p key={feature}>
                  ✓ {feature}
                </p>
              ))}

            </div>

            <button
              className="plan-btn premium-btn"
              onClick={() =>
                currentPlan !== "PREMIUM" &&
                toast("Premium coming soon!", { icon: "🚀" })
              }
            >
              {currentPlan === "PREMIUM"
                ? "Current Plan"
                : "Upgrade Soon"}
            </button>

          </div>

        </section>

        {/* Why Upgrade */}
<section className="benefits-section">

  <h2 className="section-title">
    Why Upgrade?
  </h2>

  <div className="benefits-grid">

    <div className="benefit-card">
      <h3>🤖 Unlimited AI Tutor</h3>
      <p>
        Practice unlimited conversations with your AI tutor and receive instant guidance.
      </p>
    </div>

    <div className="benefit-card">
      <h3>🗣 Advanced Speaking</h3>
      <p>
        Unlock premium speaking scenarios designed for real-world conversations.
      </p>
    </div>

    <div className="benefit-card">
      <h3>📊 Learning Analytics</h3>
      <p>
        Track your progress with detailed statistics and personalized insights.
      </p>
    </div>

    <div className="benefit-card">
      <h3>🚀 Future Premium Features</h3>
      <p>
        Get early access to new learning tools, AI improvements, and upcoming features.
      </p>
    </div>

  </div>

  {/* Feature Comparison */}

<section className="comparison-section">

  <h2 className="section-title">
    Compare Plans
  </h2>

  <div className="comparison-table">

    <div className="comparison-header">
      <div>Feature</div>
      <div>Free</div>
      <div>Premium</div>
    </div>

    <div className="comparison-row">
      <div>Grammar Lessons</div>
      <div>✓</div>
      <div>✓</div>
    </div>

    <div className="comparison-row">
      <div>Vocabulary Training</div>
      <div>✓</div>
      <div>✓</div>
    </div>

    <div className="comparison-row">
      <div>Sentence Pronunciation</div>
      <div>✓</div>
      <div>✓</div>
    </div>

    <div className="comparison-row">
      <div>AI Tutor</div>
      <div>Limited</div>
      <div>Unlimited</div>
    </div>

    <div className="comparison-row">
      <div>Speaking Scenarios</div>
      <div>Basic</div>
      <div>Unlimited</div>
    </div>

    <div className="comparison-row">
      <div>Learning Analytics</div>
      <div>—</div>
      <div>✓</div>
    </div>

    <div className="comparison-row">
      <div>Future Premium Features</div>
      <div>—</div>
      <div>✓</div>
    </div>

  </div>

</section>

</section>

      </div>
    </AppLayout>
  );
}