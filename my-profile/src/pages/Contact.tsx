import BackToHomeButton from "../components/BackToHomeButton";

export default function Contact() {
  return (
    <div
      style={{
        maxWidth: 520,
        margin: "3rem auto",
        padding: "2.5rem 2rem",
        background: "white",
        borderRadius: 15,
        boxShadow: "0 4px 22px #2563eb19",
        fontFamily: "Inter, sans-serif",
        position: "relative"
      }}
    >
      <h2 style={{ color: "#2563eb", textAlign: "center", marginBottom: "1.5rem" }}>
        ✉️ Contact Me
      </h2>

      <p style={{ fontSize: "1.13rem", lineHeight: 1.9, color: "#444", marginBottom: "1.8rem" }}>
        I’m always excited to hear from new people — whether it’s about a project, a question, or just a shared interest in tech, research, or something in between.
        Feel free to reach out — I’d love to connect!
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", fontSize: "1.1rem" }}>
        <div>
          📧{" "}
          <a
            href="mailto:svijay2@jhu.edu"
            style={{ color: "#2563eb", textDecoration: "none" }}
          >
            svijay2@jhu.edu
          </a>
        </div>
        <div>
          🔗{" "}
          <a
            href="https://linkedin.com/in/subhasri-vijay-811a0620a"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#2563eb", textDecoration: "none" }}
          >
            Connect on LinkedIn ↗
          </a>
        </div>
      </div>

      <a
        href="mailto:svijay2@jhu.edu"
        style={{
          marginTop: "2.2rem",
          display: "block",
          textAlign: "center",
          backgroundColor: "#2563eb",
          color: "white",
          padding: "0.9rem 1.6rem",
          borderRadius: "8px",
          fontWeight: "600",
          fontSize: "1rem",
          textDecoration: "none",
          transition: "background 0.3s"
        }}
      >
        📩 Say Hello
      </a>

      <blockquote
        style={{
          fontStyle: "italic",
          color: "#555",
          background: "#f5f7ff",
          borderLeft: "4px solid #2563eb",
          padding: "1rem 1.2rem",
          marginTop: "2rem",
          borderRadius: "8px"
        }}
      >
        “The best connections often start with a simple hello.”
      </blockquote>

      <div style={{ marginTop: "2rem" }}>
        <BackToHomeButton />
      </div>
    </div>
  );
}
