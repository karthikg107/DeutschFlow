import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(
      "Password reset functionality will be connected soon."
    );
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
            marginBottom: "20px",
          }}
        >
          Forgot Password
        </h1>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
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
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "10px",
            background: "#6d4aff",
            color: "white",
            cursor: "pointer",
          }}
        >
          Send Reset Link
        </button>

        {message && (
          <p
            style={{
              color: "white",
              marginTop: "20px",
            }}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}