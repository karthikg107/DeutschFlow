import AppLayout from "../components/layout/AppLayout";

export default function Privacy() {
  return (
    <AppLayout>
      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">
          Privacy Policy
        </h1>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6">

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Information We Collect
            </h2>

            <ul className="list-disc ml-6 text-gray-300">
              <li>Name</li>
              <li>Email Address</li>
              <li>Learning Progress</li>
              <li>XP and Streak Data</li>
              <li>Saved Vocabulary</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              How We Use Your Data
            </h2>

            <p className="text-gray-300">
              We use your information to provide learning
              services, track progress, personalize your
              experience, and improve DeutschFlow.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Your Rights
            </h2>

            <p className="text-gray-300">
              You may request access, correction, or deletion
              of your data at any time.
            </p>
          </div>

        </div>
      </div>
    </AppLayout>
  );
}