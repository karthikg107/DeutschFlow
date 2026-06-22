import AppLayout from "../components/layout/AppLayout";

export default function Pricing() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">
          DeutschFlow Premium
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Free Plan
            </h2>

            <ul className="space-y-3">
              <li>✓ Grammar</li>
              <li>✓ Vocabulary</li>
              <li>✓ Speaking Practice</li>
              <li>✓ AI Tutor</li>
            </ul>
          </div>

          <div className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Premium Plan
            </h2>

            <ul className="space-y-3">
              <li>✓ Everything in Free</li>
              <li>✓ Unlimited AI Tutor</li>
              <li>✓ Advanced Analytics</li>
              <li>✓ Future Premium Features</li>
            </ul>
          </div>

        </div>
      </div>
    </AppLayout>
  );
}