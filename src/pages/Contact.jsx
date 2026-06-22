import AppLayout from "../components/layout/AppLayout";

export default function Contact() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">
          Contact Support
        </h1>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">
            DeutschFlow Support
          </h2>

          <p className="text-gray-300 mb-4">
            Need help with your account, learning progress,
            subscriptions, or reporting a bug?
          </p>

          <p className="text-lg font-medium">
            support@deutschflow.com
          </p>

          <p className="text-gray-400 mt-4">
            We typically respond within 48 hours.
          </p>
        </div>
      </div>
    </AppLayout>
  );
}