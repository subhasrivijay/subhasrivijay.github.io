import BackToHomeButton from "../components/BackToHomeButton";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <div className={styles.root}>
      <div className={styles.inner}>

        {/* RESCUEREADY */}
        <div className={styles.projectSection}>
          <div className={styles.projectText}>
            <div className={styles.projectTitle}>
              RescueReady <span className={styles.rescueReadySpan}></span>
            </div>
            <ul className={styles.projectList}>
              <li>
                <b>AI-driven application</b> designed to complement EMT training with extra practice for rapid, high-stakes decision-making in realistic, challenging scenarios.
              </li>
              <li>
                Enables EMTs and first responders to create <b>infinite emergency scenes</b> — sharpening situational awareness and practical decision skills.
              </li>
              <li>
                <b>Gamified engagement:</b> Station-based competitions and performance tracking reinforce critical thinking under pressure and boost motivation.
              </li>
              <li>
                <a
                  href="/RescueReady.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  RescueReady Design Day Poster
                </a>
                &nbsp;— Showcased at Johns Hopkins Engineering Design Day.
              </li>
            </ul>
          </div>
          <div className={styles.projectImageArea}>
            <img
              src="/RR.jpg"
              alt="RescueReady Logo"
              className={`${styles.projectImage} ${styles.rescueReadyImage}`}
              onError={e => { e.currentTarget.style.display="none"; }}
            />
          </div>
        </div>

        {/* IMAZER */}
        <div className={styles.projectSection}>
          <div className={styles.projectText}>
            <div className={styles.projectTitle}>IMAZER</div>
            <ul className={styles.projectList}>
              <li>
                Designed and developed a Python-based image resizing application with a Graphical User Interface (GUI)
                for intuitive user interaction and seamless image resizing.
              </li>
              <li>
                Integrated multiple Python packages and libraries to support resizing images in various formats, ensuring high performance and versatility.
              </li>
              <li>
                Implemented efficient algorithms for resizing images to custom dimensions, providing users with a streamlined experience across different image formats.
              </li>
            </ul>
          </div>
          <div className={styles.projectImageArea}>
            <img
              src="/Imazer.jpg"
              alt="IMAZER Screenshot"
              className={`${styles.projectImage} ${styles.imazerImage}`}
            />
          </div>
        </div>

        {/* CAREATHON */}
        <div className={styles.projectSection}>
          <div className={styles.projectText}>
            <div className={styles.projectTitle}>CAREATHON</div>
            <ul className={styles.projectList}>
              <li>
                Developed 'CAREATHON', an accessibility tool using Python, enabling speech-to-text, text-to-speech, and translation functionalities to assist individuals with speech and hearing impairments.
              </li>
              <li>
                Leveraged Python libraries and packages to build robust speech and language processing capabilities, facilitating seamless communication for users with impairments.
              </li>
              <li>
                This contributes to a healthcare initiative by creating a tool that allows people with speech and hearing disabilities to express their thoughts and engage in conversations effectively.
              </li>
            </ul>
          </div>
          <div className={styles.projectImageArea}>
            <img
              src="/Careathon.jpg"
              alt="CAREATHON Screenshot"
              className={`${styles.projectImage} ${styles.careathonImage}`}
            />
          </div>
        </div>

        <BackToHomeButton />
      </div>
    </div>
  );
}