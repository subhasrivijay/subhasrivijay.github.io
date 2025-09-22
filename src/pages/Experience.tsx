import BackToHomeButton from "../components/BackToHomeButton";
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <div className={styles.container}>
      {/* AI-inspired Neural Background */}
      <svg className={styles.bgNeural} width="1200" height="400" viewBox="0 0 1200 400" fill="none">
        <circle cx="150" cy="120" r="27" fill="#a5b4fc" opacity="0.15" />
        <circle cx="710" cy="100" r="22" fill="#38bdf8" opacity="0.14" />
        <circle cx="950" cy="230" r="28" fill="#6366f1" opacity="0.15" />
        <line x1="150" y1="120" x2="710" y2="100" stroke="#2563eb" strokeWidth="2" opacity="0.07" />
        <line x1="710" y1="100" x2="950" y2="230" stroke="#0ea5e9" strokeWidth="2" opacity="0.10" />
        <text x="40" y="370" fontSize="18" fill="#818cf8" opacity="0.09" fontFamily="monospace">
          AI · ML · Σ Loss · Backprop
        </text>
      </svg>

      <div className={styles.innerContainer}>
        <h2 className={styles.pageHeader}>
          <span role="img" aria-label="experience">🧠</span> My Experience
        </h2>

        {/* Cataract Research Assistant */}
        <div className={styles.expSection}>
          <div className={styles.expDetails}>
            <div className={styles.title}>
              Cataract Research Assistant
            </div>
            <div className={styles.subtitle}>
              Wilmer Eye Institute
              <span className={styles.duration}>January 2022–Present</span>
            </div>
            <ul className={styles.expList}>
              <li>
                Created and analyzed ground-truths for “Who is the expert surgeon?” Presented at AUPO 2024.
              </li>
              <li>
                Curated 30+ surgical videos for datasets and AI analysis.
              </li>
              <li>
                Applied ML models, encoders/decoders, AUC/confusion matrix for surgical skill evaluation.
              </li>
            </ul>
          </div>
          <div className={styles.expImageContainer}>
            <img
              src="/wilmer_eye_logo.jpg"
              alt="Wilmer Eye Institute"
              className={styles.expImage}
            />
          </div>
        </div>

        {/* Posters & Publications */}
        <div className={`${styles.expSection} ${styles.second}`}>
          <div style={{ flex: 1 }}>
            <div className={styles.posterTitle}>
              Posters & Publications
            </div>
            <ul className={styles.posterList}>
              <li>
                Poster: “Can AI accurately answer: Who is the expert surgeon?” at AUPO 2024.
              </li>
              <li>
                Poster: “Surgical Skill Assessment of Cataract Videos” at ISBI 2025.
              </li>
              <li>
                Paper: “A Vision Foundation Model for Cataract Surgery Using Joint-Embedding Predictive Architecture” at MIDL 2025.
              </li>
            </ul>
          </div>
          <div className={styles.posterImages}>
            <img
              src="/ISBI2025.jpg"
              alt="ISBI 2025 Poster"
              className={styles.expImage}
            />
            <img
              src="/Present.jpg"
              alt="Presenting"
              className={styles.expImage}
            />
          </div>
        </div>

        {/* RescueReady */}
        <div className={`${styles.expSection} ${styles.extraMargin}`}>
          <div className={styles.expDetails}>
            <div className={styles.title}>
              Co-Founder
            </div>
            <div className={styles.subtitle}>
              RescueReady{" "}
              <span className={styles.duration}>January 2025–Present</span>
            </div>
            <ul className={styles.expList}>
              <li>
                Developed an AI-powered EMT training platform simulating real scenarios and clinical decision making.
              </li>
              <li>
                Built a full-stack app with React, TypeScript, SQLite and generative AI in collaboration with EMT professionals.
              </li>
            </ul>
          </div>
          <div className={styles.expImageContainer}>
            <img
              src="/RR.jpg"
              alt="RescueReady"
              className={styles.expImage}
            />
          </div>
        </div>

        {/* Teaching Experience */}
        <div className={styles.taSection}>
          <div className={styles.taDetails}>
            <div className={styles.taTitle}>
              Head Teaching Assistant
              <span className={styles.duration}>EN.601.226 | February 2024–Present</span>
            </div>
            <ul className={styles.taList}>
              <li>
                Guided students in debugging complex programming tasks, simplifying data structures concepts for better understanding and communication.
              </li>
              <li>
                Conducted weekly office hours and hands-on support, promoting engagement through practical learning.
              </li>
              <li>
                Graded 100+ projects and 200+ exams, collaborating on inclusive learning environments.
              </li>
            </ul>
          </div>
          <div className={styles.taImage}>
            <img
              src="/TA.jpg"
              alt="Teaching Assistant"
              className={styles.expImage}
            />
          </div>
        </div>
        <BackToHomeButton />
      </div>
    </div>
  );
}