import { useTypewriter, Cursor } from "react-simple-typewriter";
import styles from "./Home.module.css";

const roles = [
  "Incoming Intern at Inflection Medicine",
  "MSE CS Graduate from Johns Hopkins University",
];

const navItems = [
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
];

export default function Home() {
  const [typedText] = useTypewriter({
    words: roles,
    loop: 0,
    typeSpeed: 62,
    deleteSpeed: 34,
    delaySpeed: 1400,
  });

  const scrollToSection = (id:string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.root}>
      <header className={styles.navbar}>
        <div className={styles.brand}>Subhasri Vijay</div>
        <nav className={styles.navLinks}>
          {navItems.map((item) => (
            <button
              key={item.label}
              className={styles.navBtn}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      <div className={styles.bgOrbOne}></div>
      <div className={styles.bgOrbTwo}></div>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.title}>
            Hi, I&apos;m <span className={styles.name}>Subhasri Vijay</span>
          </h1>

          <p className={styles.subtitle}>
            <span>{typedText}</span>
            <Cursor cursorColor="#60a5fa" />
          </p>
          
         <p className={styles.description}>
            I design thoughtful, impactful solutions where technology, research, and design meet.
          </p>

          <div className={styles.honorsSection}>
            <h3 className={styles.honorsTitle}>Honors & Awards</h3>
            <ul className={styles.honorsList}>
              <li>
                <b>Joel Dean Award for Excellence in Teaching</b> :  Head Course Assistant for Data Structures
              </li>
              <li>
                <b>Masson Fellow 2024</b> :  Computer Science scholarship for BS/MSE students involved in research
              </li>
            </ul>
          </div>
          <div className={styles.ctaGroup}>
            <a
              href={`${import.meta.env.BASE_URL}Subhasri_Vijay_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryBtn}
            >
              📄 View Resume
            </a>

            <button
              className={styles.secondaryBtn}
              onClick={() => scrollToSection("projects")}
            >
              🛠️ Projects
            </button>

            <button
              className={styles.secondaryBtn}
              onClick={() => scrollToSection("experience")}
            >
              💼 Experience
            </button>

            <button
              className={styles.ghostBtn}
              onClick={() => scrollToSection("contact")}
            >
              ✉️ Contact
            </button>
          </div>
        </div>

        <div className={styles.heroCard}>
          <img src="/new.jpg" alt="Subhasri Vijay" className={styles.avatar} />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className={styles.section}>
        <div className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <p className={styles.sectionSubtitle}>
              A few projects that reflect my work in AI, accessibility, and software development.
            </p>
          </div>

          <div className={styles.cardStack}>
            <article className={styles.infoCard}>
              <div className={styles.cardText}>
                <div className={styles.cardTag}>AI / Healthcare</div>
                <h3>RescueReady</h3>
                <p className={styles.cardSubtitle}>
                  AI-powered EMT training platform
                </p>
                <ul className={styles.bulletList}>
                  <li>Built to complement EMT training with realistic emergency scenarios.</li>
                  <li>Supports rapid decision-making through practice-based simulations.</li>
                  <li>Created with React, TypeScript, SQLite, and generative AI.</li>
                </ul>
                <div className={styles.linkRow}>
                  <a
                    href="https://hub.jhu.edu/2025/07/01/students-develop-emergency-response-tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.inlineLink}
                  >
                    Article ↗
                  </a>
                  <a
                    href="/RescueReady.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.inlineLink}
                  >
                    Poster ↗
                  </a>
                </div>
              </div>

              <div className={styles.cardMedia}>
                <img src="/RR.jpg" alt="RescueReady" className={styles.cardImage} />
              </div>
            </article>

            <article className={styles.infoCard}>
              <div className={styles.cardText}>
                <div className={styles.cardTag}>Accessibility</div>
                <h3>CAREATHON</h3>
                <p className={styles.cardSubtitle}>
                  Communication tool for speech and hearing impairments
                </p>
                <ul className={styles.bulletList}>
                  <li>Developed in Python with speech-to-text and text-to-speech features.</li>
                  <li>Added translation support for accessible communication.</li>
                  <li>Designed to help users express thoughts and participate in conversations.</li>
                </ul>
                <div className={styles.linkRow}>
                  <a
                    href="https://github.com/subhasrivijay/CAREATHON"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.inlineLink}
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>

              <div className={styles.cardMedia}>
                <img src="/Careathon.jpg" alt="CAREATHON" className={styles.cardImage} />
              </div>
            </article>

            <article className={styles.infoCard}>
              <div className={styles.cardText}>
                <div className={styles.cardTag}>Python / GUI</div>
                <h3>IMAZER</h3>
                <p className={styles.cardSubtitle}>
                  Image resizing app with a graphical interface
                </p>
                <ul className={styles.bulletList}>
                  <li>Built a GUI for intuitive image resizing.</li>
                  <li>Integrated Python libraries for multiple image formats.</li>
                  <li>Focused on efficiency and user-friendly interaction.</li>
                </ul>
                <div className={styles.linkRow}>
                  <a
                    href="https://github.com/subhasrivijay/IMAZER"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.inlineLink}
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>

              <div className={styles.cardMedia}>
                <img src="/Imazer.jpg" alt="IMAZER" className={styles.cardImage} />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className={styles.section}>
        <div className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.sectionSubtitle}>
              Research, teaching, and product-building experience.
            </p>
          </div>

          <div className={styles.cardStack}>
            <article className={styles.infoCard}>
              <div className={styles.cardText}>
                <div className={`${styles.cardTag} ${styles.researchTag}`}>Research</div>
                <h3>Cataract Research Assistant</h3>
                <p className={styles.cardSubtitle}>
                  Wilmer Eye Institute · January 2022–May 2026
                </p>
                <ul className={styles.bulletList}>
                  <li>Created and analyzed six surgeon-specific ground-truth strategies to benchmark model performance on the question: “Can AI accurately identify the expert 
                      surgeon?”; evaluated using accuracy, sensitivity, specificity, and precision. Findings presented at AUPO 2024. </li>
                  <li>Curated and preprocessed 30+ cataract surgery videos in collaboration with clinicians to build high-quality, structured datasets for training and evaluating 
                      deep learning models. </li>
                  <li>Applied and evaluated deep learning architectures (encoders, decoders) and metrics (AUC, confusion matrix) for surgical skill assessment, contributing to 
clinically relevant advancements in AI-driven surgical evaluation. </li>
                </ul>
                <div className={styles.linkRow}>
                  <a
                    href="/ISBI2025.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.inlineLink}
                  >
                    ISBI Poster ↗
                  </a>
                </div>
              </div>

              <div className={styles.cardMedia}>
                <img
                  src="/Present.jpg"
                  alt="Presenting"
                  className={styles.cardImage}
                />
              </div>
            </article>

            <article className={styles.infoCard}>
              <div className={styles.cardText}>
                <div className={`${styles.cardTag} ${styles.teachingTag}`}>Teaching</div>
                <h3>Head Course Assistant</h3>
                <p className={styles.cardSubtitle}>
                  EN.601.226 · February 2024–May 2026
                </p>
                <ul className={styles.bulletList}>
                  <li>Guided students in debugging complex programming tasks and simplified Data Structures concepts into accessible explanations, fostering better 
                      understanding, problem-solving, and technical communication skills.</li>
                  <li>Graded over 300 project submissions and 400 exam submissions while conducting 50+ office hours and collaborating with faculty to 
                      create an inclusive and effective learning environment. </li>
                  <li>Designed rubrics and grading guidelines, and analyzed grading statistics to ensure consistency in the grading process and provide clear feedback.</li>
                </ul>
             
               <div className={styles.linkRow}>
                  <a
                    href="https://www.cs.jhu.edu/news/faculty-students-receive-joel-dean-excellence-in-teaching-awards/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.inlineLink}
                  >
                    Article↗
                  </a>
                </div>
                </div>
              <div className={styles.cardMedia}>
                <img src="/TA.jpg" alt="Teaching Assistant" className={styles.cardImage} />
              </div>

            </article>
            <article className={styles.infoCard}>
              <div className={styles.cardText}>
                <div className={`${styles.cardTag} ${styles.productTag}`}>Product</div>
                <h3>Co-Founder — RescueReady</h3>
                <p className={styles.cardSubtitle}>
                  January 2025–September 2025
                </p>
                <ul className={styles.bulletList}>
                  <li>Co-founded and led development of an AI-powered EMT training platform that simulates high-pressure emergency scenarios to enhance decision-making 
                  and situational awareness. </li>
                  <li>Built a full-stack web application using React, TypeScript, and SQLite, integrating generative AI to generate realistic, protocol-aligned simulations in 
                  collaboration with EMTs and healthcare professionals.</li>
                  <li>Achieved 3rd Place at HopStart General Ventures and won the Pava Center for Entrepreneurship Award, responsible for product vision, technical architecture, 
                  and user testing.</li>
                </ul>
                <div className={styles.linkRow}>
                  <a
                    href="/RescueReady.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.inlineLink}
                  >
                    Poster ↗
                  </a>
                </div>
                <div className={styles.linkRow}>
                  <a
                    href="https://hub.jhu.edu/2025/07/01/students-develop-emergency-response-tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.inlineLink}
                  >
                    Article ↗
                  </a>
                </div>
              </div>
              
              <div className={styles.cardMedia}>
                <img src="/RR.jpg" alt="RescueReady" className={styles.cardImage} />
              </div>
            </article>
          </div>

          <div className={styles.publications}>
            <h3 className={styles.subSectionTitle}>Posters & Publications</h3>
            <ul className={styles.pubList}>
              <li>“Can AI accurately answer: Who is the expert surgeon?” :  AUPO 2024</li>
              <li>“Surgical Skill Assessment of Cataract Videos” :  ISBI 2025</li>
              <li>“A Vision Foundation Model for Cataract Surgery Using Joint-Embedding Predictive Architecture” : MIDL 2025</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className={styles.section}>
        <div className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Resume</h2>
            <p className={styles.sectionSubtitle}>
              View my latest resume and professional profile.
            </p>
          </div>

          <div className={styles.resumeActions}>
            <a
              href={`${import.meta.env.BASE_URL}Subhasri_Vijay_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryBtn}
            >
              📄 Open PDF
            </a>

            <a
              href="https://linkedin.com/in/subhasri-vijay-811a0620a"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={styles.section}>
        <div className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Contact</h2>
            <p className={styles.sectionSubtitle}>
              I&apos;m always happy to connect about research, projects, or opportunities.
            </p>
          </div>

          <div className={styles.contactLinks}>
            <a
              href="https://linkedin.com/in/subhasri-vijay-811a0620a"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              Connect on LinkedIn ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}