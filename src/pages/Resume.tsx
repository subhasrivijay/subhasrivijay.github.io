import BackToHomeButton from "../components/BackToHomeButton";
const resumePdfUrl = `${import.meta.env.BASE_URL}RESUME_SUBHASRI_VIJAY.pdf`;

export default function Resume() {
  return (
    <div
      style={{
        maxWidth: 500,
        margin: "4rem auto",
        padding: "2.5rem 1.5rem",
        background: "linear-gradient(135deg, #e0e7ff 70%, #f2f7fd 100%)",
        borderRadius: 18,
        boxShadow: "0 8px 44px #a5b4fc35",
        textAlign: "center",
        fontFamily: "'Inter',sans-serif",
      }}
    >
      <img
        src="/new.jpg"
        alt="Subhasri Vijay"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          objectFit: "cover",
          boxShadow: "0 4px 16px #909ffc2a",
          border: "4px solid #6366f1",
          marginBottom: "1.5rem",
        }}
      />
      <h1 style={{ marginBottom: 8, color: "#4f46e5", letterSpacing: 1 }}>Subhasri Vijay</h1>
      <p style={{ color: "#444", margin: "0 0 0.8em" }}>
        <b>MSE Computer Science Student at</b> @ Johns Hopkins
      </p>
      <div style={{ marginBottom: "1.2em", color: "#252b36", fontSize: '1.09em' }}>
        <a
          href="mailto:svijay2@jhu.edu"
          style={{ color: "#2563eb", textDecoration: "underline", margin: "0 7px" }}
        >
          svijay2@jhu.edu
        </a>
        <span> | </span>
        <a
          href="https://linkedin.com/in/subhasri-vijay-811a0620a"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#2563eb", textDecoration: "underline", margin: "0 7px" }}
        >
          LinkedIn ↗
        </a>
        <span> | </span>
      </div>
      <a
        href={resumePdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          background: "linear-gradient(90deg, #6366f1, #2563eb)",
          color: "white",
          fontWeight: 600,
          textDecoration: "none",
          padding: "0.75em 2.1em",
          borderRadius: 999,
          fontSize: "1.15em",
          marginTop: "1.8em",
          boxShadow: "0 2px 12px #6366f142",
          transition: "transform 0.13s, box-shadow 0.13s",
        }}
        onMouseOver={e => {
          e.currentTarget.style.transform = "scale(1.06)";
          e.currentTarget.style.boxShadow = "0 4px 28px #6366f138";
        }}
        onMouseOut={e => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 2px 12px #6366f142";
        }}
      >
        📄 View PDF Resume
      </a>
      <div><BackToHomeButton /></div>
    </div>
  );
}