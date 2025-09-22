import BackToHomeButton from "../components/BackToHomeButton";
import styles from './MoreAboutMe.module.css';

export default function MoreAboutMe() {
  return (
    <div className={styles.root}>
      {/* Neural net background */}
      <svg className={styles.bgNeural} width="1100" height="340" viewBox="0 0 1100 340" fill="none">
        <circle cx="180" cy="120" r="27" fill="#a5b4fc" opacity="0.11" />
        <circle cx="800" cy="90" r="21" fill="#38bdf8" opacity="0.11" />
        <circle cx="1080" cy="150" r="32" fill="#6366f1" opacity="0.13" />
        <line x1="180" y1="120" x2="800" y2="90" stroke="#2563eb" strokeWidth="2" opacity="0.07" />
        <line x1="800" y1="90" x2="1080" y2="150" stroke="#0ea5e9" strokeWidth="2" opacity="0.09" />
        <text x="40" y="320" fontSize="20" fill="#818cf8" opacity="0.08" fontFamily="monospace">
          Creativity · Learning · Impact
        </text>
      </svg>

      <div className={styles.contentContainer}>
        {/* Header */}
        <div className={styles.headerCard}>
          <span className={styles.headerEmoji}>👩‍🎓</span>
          <div>
            <div className={styles.headerTitle}>More About Me</div>
            <div className={styles.headerSubtitle}>
              MSE CS student at Johns Hopkins University | Student Research Assistant | Head Course Assistant | Masson Fellow<br />
              <span className={styles.headerTagline}>
                Transforming Ideas into Impactful Solutions for the Future.
              </span>
            </div>
          </div>
        </div>

        {/* Section 1: Photography */}
        <section className={styles.sectionCard} tabIndex={0}>
          <span className={styles.sectionEmoji} aria-label="photographer">📷</span>
          <div className={styles.sectionContent}>
            <div className={styles.sectionTitle}>Budding Photographer</div>
            <ul className={styles.sectionBullets}>
              <li>
                Displayed my photographic work at the
                {' '}
                <a href="https://museums.jhu.edu/exhibitions/past/evergreen-as-muse-2023/" target="_blank" rel="noopener noreferrer" style={{ color: "#2563eb", textDecoration: "underline" }}>
                  Evergreen Exhibition
                </a> at JHU.
              </li>
              <li>Love capturing moments that blend natural light and genuine emotion.</li>
              <li>Document daily life and meaningful stories.</li>
            </ul>
          </div>
          <div className={styles.sectionImageArea}>
            <img
              src="/Photograph.jpg"
              alt="Photography"
              className={styles.sectionImage}
            />
          </div>
        </section>

        {/* Section 2: NUS */}
        <section className={styles.sectionCard} tabIndex={0}>
          <span className={styles.sectionEmoji} aria-label="award">🏆</span>
          <div className={styles.sectionContent}>
            <div className={styles.sectionTitle}>Design Thinking at NUS Singapore</div>
            <ul className={styles.sectionBullets}>
              <li>Earned <b>A+</b> for a healthcare innovation project.</li>
              <li>Project focused on empathy and research-driven solutions.</li>
              <li>One of my proudest international academic experiences.</li>
            </ul>
          </div>
          <div className={styles.sectionImageArea}>
            <img
              src="/nus.jpg"
              alt="NUS Singapore"
              className={styles.sectionImage}
            />
          </div>
        </section>

        {/* Section 3: Crafts */}
        <section className={styles.sectionCard} tabIndex={0}>
          <span className={styles.sectionEmoji} aria-label="craft">🎨</span>
          <div className={styles.sectionContent}>
            <div className={styles.sectionTitle}>Advanced Crafter</div>
            <ul className={styles.sectionBullets}>
              <li>Design intricate paper flowers, leaves, and decor.</li>
              <li>Use premium materials like Clairefontaine and Irish Paper.</li>
              <li>Employ advanced tools: Big Shot, punchers, embossers.</li>
              <li>Mix inking, 3D texturing, and lifelike details.</li>
            </ul>
          </div>
          <div className={styles.sectionImageArea}>
            <img
              src="/Craft.jpg"
              alt="Craft Pieces"
              className={styles.sectionImage}
            />
          </div>
        </section>

        {/* Section 4: Tennis & Skating */}
        <section className={styles.sectionCard} tabIndex={0}>
          <span className={styles.sectionEmoji} aria-label="tennis and skating">🎾</span>
          <div className={styles.sectionContent}>
            <div className={styles.sectionTitle}>Tennis & Skating for Fun</div>
            <ul className={styles.sectionBullets}>
              <li>Tennis and roller skating are my favorite ways to recharge.</li>
              <li>Enjoy focus, movement, and balance outside the classroom.</li>
              <li>Value the community and healthy competition.</li>
            </ul>
          </div>
          <div className={styles.sectionImageArea}>
            <img
              src="/Skating.jpg"
              alt="Tennis and Skating"
              className={styles.sectionImage}
            />
          </div>
        </section>

        <div style={{ marginTop: "3rem" }}>
          <BackToHomeButton />
        </div>
      </div>
    </div>
  );
}