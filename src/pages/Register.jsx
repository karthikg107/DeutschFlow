import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import api from "../utils/api";
import "../styles/auth.css";

function Register() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // 0 = info entry, 1 = OTP entry, 2 = password + submit
  const step = otpVerified ? 2 : otpSent ? 1 : 0;

  const handleSendOtp = async () => {
    if (!email.trim()) {
      setError("Please enter your email first");
      return;
    }
    try {
      setLoading(true);
      setError("");
      setMessage("");
      await api.post("/otp/send-otp", { email });
      setOtpSent(true);
      setMessage("Verification code sent to your email");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send code");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      setLoading(true);
      setError("");
      setMessage("");
      const { data } = await api.post("/otp/verify-otp", { email, otp });
      if (data.verified) {
        setOtpVerified(true);
        setMessage("Email verified — set your password below");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid code");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data } = await api.post("/auth/register", { name, email, password });
      login(data);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <Link to="/" className="auth-logo">
          <img src="/logo.png" alt="DeutschFlow" />
          <span className="auth-logo-text">DeutschFlow</span>
        </Link>

        <h1 className="auth-title">Create account</h1>
        <p className="auth-subtitle">Start learning German for free</p>

        {/* Step progress bar */}
        <div className="otp-steps">
          <div className={`otp-step ${step === 0 ? "active" : step > 0 ? "done" : ""}`} />
          <div className={`otp-step ${step === 1 ? "active" : step > 1 ? "done" : ""}`} />
          <div className={`otp-step ${step === 2 ? "active" : ""}`} />
        </div>

        {error && <div className="auth-alert error">{error}</div>}
        {message && <div className="auth-alert success">{message}</div>}

        <form onSubmit={handleSubmit}>

          {/* ── Step 0: name + email ── */}
          <div className="auth-field">
            <label className="auth-label">Full name</label>
            <input
              className="auth-input"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={otpSent}
              autoComplete="name"
            />
          </div>

          <div className="auth-field">
            <label className="auth-label">Email</label>
            <input
              className="auth-input"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={otpSent}
              autoComplete="email"
            />
          </div>

          {!otpSent && (
            <button
              type="button"
              className="auth-btn secondary"
              onClick={handleSendOtp}
              disabled={loading}
            >
              {loading ? "Sending…" : "Send verification code"}
            </button>
          )}

          {/* ── Step 1: OTP ── */}
          {otpSent && !otpVerified && (
            <>
              <div className="auth-field">
                <label className="auth-label">Verification code</label>
                <input
                  className="auth-input"
                  type="text"
                  inputMode="numeric"
                  placeholder="Enter 6-digit code"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                  autoComplete="one-time-code"
                />
              </div>

              <button
                type="button"
                className="auth-btn secondary"
                onClick={handleVerifyOtp}
                disabled={loading}
              >
                {loading ? "Verifying…" : "Verify code"}
              </button>
            </>
          )}

          {/* ── Step 2: password + submit ── */}
          {otpVerified && (
            <>
              <div className="auth-field">
                <label className="auth-label">Password</label>
                <div className="auth-input-wrap">
                  <input
                    className="auth-input"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className="auth-eye"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="auth-btn primary"
                disabled={loading}
              >
                {loading ? "Creating account…" : "Create account"}
              </button>
            </>
          )}

        </form>

        <div className="auth-footer">
          Already have an account?{" "}
          <Link to="/login">Sign in</Link>
        </div>

      </div>
    </div>
  );
}

export default Register;
