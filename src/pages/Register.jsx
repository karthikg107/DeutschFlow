import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import api from "../utils/api";

function Register() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [otp, setOtp] = useState("");
const [otpSent, setOtpSent] = useState(false);
const [otpVerified, setOtpVerified] = useState(false);  

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleSendOtp = async () => {

  try {

    await api.post(
      "/otp/send-otp",
      {
        email,
      }
    );

    setOtpSent(true);

    alert("OTP sent to email");

  } catch (error) {

    console.log(error);

    alert("Failed to send OTP");

  }

};  

  const handleVerifyOtp = async () => {

  try {

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

      alert("OTP verified");

    }

  } catch (error) {

    console.log(error);

    alert("Invalid OTP");

  }

};

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    setError("");

    try {

      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data =
        await response.json();

      if (!response.ok) {

        throw new Error(
          data.message || "Register failed"
        );
      }

      login(data);

      navigate("/dashboard");

    } catch (err) {

      setError(err.message);

    } finally {

      setLoading(false);
    }
  };

  return (

    <div
      style={{
        minHeight: "100vh",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        background: "#0f172a",
      }}
    >

      <form
        onSubmit={handleSubmit}
        style={{
          width: "350px",

          background: "#111827",

          padding: "40px",

          borderRadius: "16px",
        }}
      >

        <h1
          style={{
            color: "white",
            marginBottom: "30px",
          }}
        >
          Create Account
        </h1>

        {error && (

          <p
            style={{
              color: "red",
              marginBottom: "20px",
            }}
          >
            {error}
          </p>

        )}

        <input
          type="text"

          placeholder="Your Name"

          value={name}

          onChange={(e) =>
            setName(e.target.value)
          }

          required

          style={{
            width: "100%",

            padding: "14px",

            marginBottom: "16px",

            borderRadius: "10px",

            border: "none",
          }}
        />

        <input
          type="email"

          placeholder="Email"

          value={email}

          onChange={(e) =>
            setEmail(e.target.value)
          }

          required

          style={{
            width: "100%",

            padding: "14px",

            marginBottom: "16px",

            borderRadius: "10px",

            border: "none",
          }}
        />

        <button
  type="button"
  onClick={handleSendOtp}
  style={{
    width: "100%",
    padding: "12px",
    marginBottom: "16px",
    border: "none",
    borderRadius: "10px",
    background: "#6d4aff",
    color: "white",
    cursor: "pointer",
  }}
>
  Send OTP
</button>

      {otpSent && (

  <input
    type="text"
    placeholder="Enter OTP"
    value={otp}
    onChange={(e) =>
      setOtp(e.target.value)
    }
    style={{
      width: "100%",
      padding: "14px",
      marginBottom: "16px",
      borderRadius: "10px",
      border: "none",
    }}
  />

)}

{otpSent && (

  <button
    type="button"
    onClick={handleVerifyOtp}
    style={{
      width: "100%",
      padding: "12px",
      marginBottom: "16px",
      border: "none",
      borderRadius: "10px",
      background: "#2563eb",
      color: "white",
      cursor: "pointer",
    }}
  >
    Verify OTP
  </button>

)}

        <input
          type="password"

          placeholder="Password"

          value={password}

          onChange={(e) =>
            setPassword(e.target.value)
          }

          required

          style={{
            width: "100%",

            padding: "14px",

            marginBottom: "20px",

            borderRadius: "10px",

            border: "none",
          }}
        />

        <button
          type="submit"

          disabled={
             loading || !otpVerified
         }

          style={{
            width: "100%",

            padding: "14px",

            border: "none",

            borderRadius: "10px",

            background: "#16a34a",

            color: "white",

            fontWeight: "bold",

            cursor: "pointer",
          }}
        >
          {loading
            ? "Loading..."
    : otpVerified
      ? "Create Account"
      : "Verify OTP First"}
        </button>

      </form>

    </div>
  );
}

export default Register;