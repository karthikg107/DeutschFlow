import AppLayout from "../components/layout/AppLayout";

export default function Terms() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">
          Terms & Conditions
        </h1>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6">

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Educational Purpose
            </h2>

            <p className="text-gray-300">
              DeutschFlow is designed to help users learn German
              through lessons, vocabulary, speaking practice,
              and AI-assisted learning.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              User Responsibilities
            </h2>

            <p className="text-gray-300">
              Users are responsible for maintaining account
              security and using the platform respectfully.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              No Guarantees
            </h2>

            <p className="text-gray-300">
              DeutschFlow does not guarantee language fluency,
              exam success, or employment outcomes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Service Changes
            </h2>

            <p className="text-gray-300">
              Features may be updated, modified, or removed
              as the platform evolves.
            </p>
          </div>

        </div>
      </div>
    </AppLayout>
  );
}