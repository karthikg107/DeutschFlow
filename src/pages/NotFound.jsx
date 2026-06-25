import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#0a0a0f",
      color: "white",
      gap: "16px",
      padding: "24px",
      textAlign: "center",
    }}>
      <h1 style={{ fontSize: "5rem", fontWeight: 800, margin: 0 }}>404</h1>
      <p style={{ fontSize: "1.25rem", color: "#94a3b8" }}>
        Page not found
      </p>
      <Link
        to="/"
        style={{
          padding: "10px 24px",
          background: "#2563eb",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
