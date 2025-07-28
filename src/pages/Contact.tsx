import BackToHomeButton from "../components/BackToHomeButton";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>✉️ Contact Me</h2>

      <p className={styles.text}>
        I’m always excited to hear from new people — whether it’s about a project, a question, or just a shared interest in tech, research, or something in between.
        Feel free to reach out — I’d love to connect!
      </p>

      <div className={styles.links}>
        <div>
          📧{" "}
          <a
            href="mailto:svijay2@jhu.edu"
            className={styles.linkAnchor}
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