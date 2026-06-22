import AppLayout from "../components/layout/AppLayout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Settings() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
  <AppLayout>
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Settings
      </h1>

      {/* Account */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Account
        </h2>

        <div className="space-y-2">
          <p className="text-lg font-medium">
  {user?.name || "User"}
</p>

<p className="text-gray-400">
  {user?.email || "No email available"}
</p>
        </div>
      </div>

      {/* Subscription */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Subscription
            </h2>

            <p className="text-gray-400">
              Current Plan
            </p>

            <p className="text-lg font-medium">
              Free Plan
            </p>
          </div>

          <button
            onClick={() => navigate("/pricing")}
            className="px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition"
          >
            View Plans
          </button>
        </div>
      </div>

      {/* Legal */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Legal
        </h2>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => navigate("/privacy")}
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10"
          >
            Privacy Policy
          </button>

          <button
            onClick={() => navigate("/terms")}
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10"
          >
            Terms & Conditions
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10"
          >
            Contact Support
          </button>
        </div>
      </div>

      {/* Logout */}
      <button
        onClick={logout}
        className="px-5 py-3 rounded-xl border border-red-500 text-red-400 hover:bg-red-500/10 transition"
      >
        Logout
      </button>
    </div>
  </AppLayout>

);
}