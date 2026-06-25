import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import api from "../utils/api";
import "../styles/auth.css";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // 0 = email entry, 1 = OTP entry, 2 = new password
  const step = otpVerified ? 2 : otpSent ? 1 : 0;

  const sendOtp = async () => {
    if (!email.trim()) {
      setError("Please enter your email");
      return;
    }
    try {
      setLoading(true);
      setError("");
      setMessage("");
      await api.post("/otp/send-otp", { email });
      setOtpSent(true);
      setMessage("Reset code sent to your email");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send code");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    try {
      setLoading(true);
      setError("");
      setMessage("");
      const { data } = await api.post("/otp/verify-otp", { email, otp });
      if (data.verified) {
        setOtpVerified(true);
        setMessage("Identity verified — set your new password");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid code");
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async () => {
    setError("");
    setMessage("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be 8+ characters with uppercase, lowercase and a number"
      );
      return;
    }

    try {
      setLoading(true);
      await api.post("/auth/reset-password", { email, password });
      setMessage("Password updated! Redirecting to sign in…");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to reset password");
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

        <h1 className="auth-title">Reset password</h1>
        <p className="auth-subtitle">
          We'll verify your identity before setting a new password
        </p>

        {/* Step progress bar */}
        <div className="otp-steps">
          <div className={`otp-step ${step === 0 ? "active" : step > 0 ? "done" : ""}`} />
          <div className={`otp-step ${step === 1 ? "active" : step > 1 ? "done" : ""}`} />
          <div className={`otp-step ${step === 2 ? "active" : ""}`} />
        </div>

        {error && <div className="auth-alert error">{error}</div>}
        {message && <div className="auth-alert success">{message}</div>}

        {/* ── Step 0: Email ── */}
        <div className="auth-field">
          <label className="auth-label">Email address</label>
          <input
            className="auth-input"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={otpSent}
            autoComplete="email"
          />
        </div>

        {!otpSent && (
          <button
            className="auth-btn primary"
            onClick={sendOtp}
            disabled={loading}
          >
            {loading ? "Sending…" : "Send reset code"}
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
              className="auth-btn primary"
              onClick={verifyOtp}
              disabled={loading}
            >
              {loading ? "Verifying…" : "Verify code"}
            </button>
          </>
        )}

        {/* ── Step 2: New password ── */}
        {otpVerified && (
          <>
            <div className="auth-field">
              <label className="auth-label">New password</label>
              <div className="auth-input-wrap">
                <input
                  className="auth-input"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            <div className="auth-field">
              <label className="auth-label">Confirm password</label>
              <input
                className="auth-input"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
              />
            </div>

            <div className="pw-rules">
              <p>Password requirements</p>
              <ul>
                <li>✓ At least 8 characters</li>
                <li>✓ One uppercase letter (A–Z)</li>
                <li>✓ One lowercase letter (a–z)</li>
                <li>✓ One number (0–9)</li>
              </ul>
            </div>

            <button
              className="auth-btn primary"
              onClick={resetPassword}
              disabled={loading}
            >
              {loading ? "Updating…" : "Set new password"}
            </button>
          </>
        )}

        <div className="auth-footer">
          Remember your password?{" "}
          <Link to="/login">Sign in</Link>
        </div>

      </div>
    </div>
  );
}
