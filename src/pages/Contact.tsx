import BackToHomeButton from "../components/BackToHomeButton";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <svg className={styles.bgNeural} width="800" height="160" viewBox="0 0 800 160" fill="none">
      <circle cx="80" cy="70" r="21" fill="#a5b4fc" opacity="0.11" />
      <circle cx="520" cy="75" r="18" fill="#38bdf8" opacity="0.12" />
      <circle cx="730" cy="120" r="24" fill="#6366f1" opacity="0.13" />
      <line x1="80" y1="70" x2="520" y2="75" stroke="#2563eb" strokeWidth="2" opacity="0.07" />
      <line x1="520" y1="75" x2="730" y2="120" stroke="#0ea5e9" strokeWidth="2" opacity="0.09" />
      <text x="30" y="150" fontSize="17" fill="#818cf8" opacity="0.07" fontFamily="monospace">
        Contact · Connect · Hello
      </text>
    </svg>
      <h2 className={styles.heading}>✉️ Contact Me</h2>

      <p className={styles.text}>
        I’m always excited to hear from new people — whether it’s about a project, a question, or just a shared interest in tech, research, or something in between.
        Feel free to reach out — I’d love to connect!
      </p>

      <div className={styles.links}>
        <div>
          📧{" "}
          <a
            href="mailto:subhasrivijay@gmail.com"
            className={styles.linkAnchor}
          >
            subhasrivijay@gmail.com
          </a>
        </div>
        <div>
          🔗{" "}
          <a
            href="https://linkedin.com/in/subhasri-vijay-811a0620a"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkAnchor}
          >
            Connect on LinkedIn ↗
          </a>
        </div>
      </div>

      <a
        href="mailto:svijay2@jhu.edu"
        className={styles.button}
      >
        📩 Say Hello
      </a>

      <blockquote className={styles.quote}>
        “The best connections often start with a simple hello.”
      </blockquote>

      <div className={styles.back}>
        <BackToHomeButton />
      </div>
    </div>
  );
}