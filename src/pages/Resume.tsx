import BackToHomeButton from "../components/BackToHomeButton";
import styles from "./Resume.module.css";

const resumePdfUrl = `${import.meta.env.BASE_URL}RESUME _SUBHASRI_VIJAY_.pdf`;

export default function Resume() {
  return (
    <div className={styles.root}>
      <svg className={styles.bgNeural} width="900" height="220" viewBox="0 0 900 220" fill="none">
        <circle cx="150" cy="70" r="27" fill="#a5b4fc" opacity="0.09" />
        <circle cx="680" cy="60" r="21" fill="#38bdf8" opacity="0.09" />
        <circle cx="880" cy="130" r="32" fill="#6366f1" opacity="0.12" />
        <line x1="150" y1="70" x2="680" y2="60" stroke="#2563eb" strokeWidth="2" opacity="0.07" />
        <line x1="680" y1="60" x2="880" y2="130" stroke="#0ea5e9" strokeWidth="2" opacity="0.09" />
        <text x="40" y="200" fontSize="18" fill="#818cf8" opacity="0.07" fontFamily="monospace">
          Resume · Academics
        </text>
      </svg>
      <div className={styles.card}>
        <img src="/new.jpg" alt="Subhasri Vijay" className={styles.avatar} />
        <h1 className={styles.heading}>Subhasri Vijay</h1>
        <p className={styles.subheading}>
          <b>MSE Computer Science Student</b> @ Johns Hopkins
        </p>
        <div className={styles.links}>
          <a href="mailto:svijay2@jhu.edu" className={styles.link}>
            svijay2@jhu.edu
          </a>
          <span>|</span>
          <a
            href="https://linkedin.com/in/subhasri-vijay-811a0620a"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn ↗
          </a>
          <span>|</span>
        </div>
        <a
          href={resumePdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeBtn}
        >
          📄 View PDF Resume
        </a>
        <div style={{ marginTop: "2.1rem" }}>
          <BackToHomeButton />
        </div>
      </div>
    </div>
  );
}