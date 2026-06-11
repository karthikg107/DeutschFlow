import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Eye, EyeOff } from "lucide-react";

import { useAuth } from "../context/AuthContext";

import api from "../utils/api";

function Login() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    setError("");

    try {

      const response =
        await api.post(
          "/auth/login",
          {
            email,
            password,
          }
        );

      const data =
        response.data;

      login(data);

      navigate(
        "/dashboard"
      );

    } catch (err) {

      setError(

        err.response?.data?.message ||

        "Login failed. Please try again."

      );

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
        padding: "20px",
      }}
    >

      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "350px",
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
              color: "#ef4444",
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
          onChange={(e) => {

            setEmail(
              e.target.value
            );

            if (error) {
              setError("");
            }

          }}
          required
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "16px",
            borderRadius: "10px",
            border: "none",
            boxSizing: "border-box",
          }}
        />

        <div
          style={{
            position: "relative",
            marginBottom: "20px",
          }}
        >

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Password"
            value={password}
            onChange={(e) => {

              setPassword(
                e.target.value
              );

              if (error) {
                setError("");
              }

            }}
            required
            style={{
              width: "100%",
              padding: "14px",
              paddingRight: "45px",
              borderRadius: "10px",
              border: "none",
              boxSizing: "border-box",
            }}
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform:
                "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#6b7280",
            }}
          >

            {
              showPassword
                ? <EyeOff size={18} />
                : <Eye size={18} />
            }

          </button>

        </div>

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
            opacity:
              loading ? 0.7 : 1,
          }}
        >

          {
            loading
              ? "Loading..."
              : "Login"
          }

        </button>

      </form>

    </div>

  );

}

export default Login;