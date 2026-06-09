import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import api from "../utils/api";

function Login() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    setError("");

    try {

  const response = await api.post(
    "/auth/login",
    {
      email,
      password,
    }
  );

  const data = response.data;

  login(data);

  navigate("/dashboard");

} catch (err) {

  setError(
    err.response?.data?.message ||
    "Login failed"
  );

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
          Login
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
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "10px",
            background: "#2563eb",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {loading ? "Loading..." : "Login"}
        </button>

      </form>

    </div>
  );
}

export default Login;