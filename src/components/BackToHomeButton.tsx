import { useNavigate } from "react-router-dom";

export default function BackToHomeButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/")}
      style={{
        display: "inline-flex",
        alignItems: "center",
        color: "#2563eb",
        background: "white",
        border: "2px solid #6366f1",
        borderRadius: 999,
        padding: "0.5em 1.5em",
        fontWeight: 600,
        fontSize: "1rem",
        boxShadow: "0 1px 6px #6366f112",
        cursor: "pointer",
        gap: "0.45em",
        margin: "1.3em 0",
        transition: "background 0.15s, color 0.15s, box-shadow 0.15s, transform 0.13s",
      }}
      onMouseOver={e => {
        e.currentTarget.style.background = "#6366f1";
        e.currentTarget.style.color = "white";
        e.currentTarget.style.transform = "scale(1.04)";
        e.currentTarget.style.boxShadow = "0 2px 16px #6366f129";
      }}
      onMouseOut={e => {
        e.currentTarget.style.background = "white";
        e.currentTarget.style.color = "#2563eb";
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 1px 6px #6366f112";
      }}
    >
      <span style={{ fontSize: "1.3em" }}>🏠</span>
      Back to Home
    </button>
  );
}