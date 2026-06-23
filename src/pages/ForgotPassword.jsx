import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import { Eye, EyeOff } from "lucide-react";
import "../styles/forgotPassword.css";

export default function ForgotPassword() {

const navigate = useNavigate();

const [email, setEmail] = useState("");
const [otp, setOtp] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] =
useState("");

const [otpSent, setOtpSent] =
useState(false);

const [otpVerified, setOtpVerified] =
useState(false);

const [showPassword, setShowPassword] =
useState(false);

const [loading, setLoading] =
useState(false);

const [message, setMessage] =
useState("");

const [error, setError] =
useState("");

const sendOtp = async () => {

  if (!email.trim()) {
  setError("Please enter your email");
  return;
}

try {

  setLoading(true);
  setError("");
  setMessage("");

  await api.post(
    "/otp/send-otp",
    {
      email,
    }
  );

  setOtpSent(true);

  setMessage(
    "OTP sent successfully"
  );

} catch (err) {

  setError(
    err.response?.data?.message ||
    "Failed to send OTP"
  );

} finally {

  setLoading(false);

}

};

const verifyOtp = async () => {

try {

  setLoading(true);
  setError("");
  setMessage("");

  const { data } =
    await api.post(
      "/otp/verify-otp",
      {
        email,
        otp,
      }
    );

  if (data.verified) {

    setOtpVerified(true);

    setError("");

    setMessage(
      "OTP verified successfully"
    );

  }

} catch (err) {

  setError(
    err.response?.data?.message ||
    "Invalid OTP"
  );

} finally {

  setLoading(false);

}

};

const resetPassword = async () => {


setError("");
setMessage("");

if (
  password !==
  confirmPassword
) {

  setError(
    "Passwords do not match"
  );

  return;

}

const passwordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

if (
  !passwordRegex.test(password)
) {

  setError(
    "Password must contain uppercase, lowercase, number and be at least 8 characters"
  );

  return;

}

try {

  setLoading(true);

  await api.post(
    "/auth/reset-password",
    {
      email,
      password,
    }
  );

  setMessage(
    "Password changed successfully. Redirecting to login..."
  );

  setTimeout(() => {

    navigate("/login");

  }, 2000);

} catch (err) {

  setError(
    err.response?.data?.message ||
    "Failed to reset password"
  );

} finally {

  setLoading(false);

}

};

return (

  <div className="forgot-page">
    <div className="forgot-card">

  <h1>Forgot Password</h1>

  <p className="forgot-subtitle">
    Recover access to your DeutschFlow account
  </p>

  {message && (
    <div className="success-message">
      {message}
    </div>
  )}

  {error && (
    <div className="error-message">
      {error}
    </div>
  )}

  <input
    className="forgot-input"
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  

  <button
    className="forgot-btn"
    onClick={sendOtp}
    disabled={loading}
  >
    {loading ? "Sending..." : "Send OTP"}
  </button>

  {otpSent && (
    <>
      <input
        className="forgot-input"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <button
        className="forgot-btn"
        onClick={verifyOtp}
        disabled={loading}
      >
        {loading ? "Verifying..." : "Verify OTP"}
      </button>
    </>
  )}

  {otpVerified && (
    <>
      <div className="password-wrapper">

        <input
          className="forgot-input"
          type={showPassword ? "text" : "password"}
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="button"
          className="password-toggle"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword
            ? <EyeOff size={18} />
            : <Eye size={18} />
          }
        </button>

      </div>

      <input
        className="forgot-input"
        type={showPassword ? "text" : "password"}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) =>
          setConfirmPassword(e.target.value)
        }
      />

      <div className="password-rules">
        <h4>Password Requirements</h4>

        <ul>
          <li>✓ At least 8 characters</li>
          <li>✓ One uppercase letter</li>
          <li>✓ One lowercase letter</li>
          <li>✓ One number</li>
        </ul>
      </div>

      <button
        className="forgot-btn"
        onClick={resetPassword}
        disabled={loading}
      >
        {loading
          ? "Updating..."
          : "Reset Password"}
      </button>
    </>
  )}

</div>

  </div>
);

}
