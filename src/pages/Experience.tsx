import BackToHomeButton from "../components/BackToHomeButton";
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>

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