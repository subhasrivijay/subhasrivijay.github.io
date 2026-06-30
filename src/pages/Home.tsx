import { useEffect, useState} from "react";
import styles from "./Home.module.css";

const roles = [
  "Software Intern at Inflection Medicine",
  "BS/MSE CS Graduate :  Johns Hopkins '26",
  "AI + Healthcare Researcher",
  "Award-winning Entrepreneur",
];

export default function Home() {
  const [activeRole, setActiveRole] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Role rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scroll spy for active section and scroll-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 500);

      // Determine active section
      const sections = ["hero", "resume", "projects", "experience"];
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.root}>
      {/* Navigation */}
      <header className={styles.navbar}>
        <div className={styles.brand}>Subhasri Vijay</div>
        <nav className={styles.navLinks}>
          <button
            className={`${styles.navLink} ${activeSection === "hero" ? styles.navLinkActive : ""}`}
            onClick={() => scrollToSection("hero")}
          >
            Home
          </button>
          <button
            className={`${styles.navLink} ${activeSection === "resume" ? styles.navLinkActive : ""}`}
            onClick={() => scrollToSection("resume")}
          >
            Resume
          </button>
          <button
            className={`${styles.navLink} ${activeSection === "projects" ? styles.navLinkActive : ""}`}
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>
          <button
            className={`${styles.navLink} ${activeSection === "experience" ? styles.navLinkActive : ""}`}
            onClick={() => scrollToSection("experience")}
          >
            Experience
          </button>
        </nav>
        <div className={styles.navSocials}>
          <a
            href="https://linkedin.com/in/subhasri-vijay-811a0620a"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="mailto:subhasrivijay@gmail.com"
            className={styles.socialIcon}
            aria-label="Email"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
            </svg>
          </a>
        </div>
      </header>

      {/* Background Elements */}
      <div className={styles.bgOrbOne}></div>
      <div className={styles.bgOrbTwo}></div>
      <div className={styles.bgOrbThree}></div>

      {/* Hero Section */}
      <section id="hero" className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.title}>
            Hi, I&apos;m <span className={styles.name}>Subhasri Vijay</span>
          </h1>

          <div className={styles.sliderWrap}>
            <div className={styles.sliderPill} key={activeRole}>
              {roles[activeRole]}
            </div>
          </div>

          {/* Quick Highlights
          <div className={styles.highlights}>
            <div className={styles.highlightItem}>
              <span className={styles.highlightIcon}>💼</span>
              <span className={styles.highlightText}>
                Software Intern @ Inflection Medicine
                <span className={styles.currentBadge}>Current</span>
              </span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.highlightIcon}>🎓</span>
              <span>BS/MSE CS : Johns Hopkins '26</span>
            </div>
          </div> */}

          <div className={styles.descriptionWrap}>
          <p className={styles.description}>
          A BS/MSE Computer Science graduate from Johns Hopkins University, specializing in Deep Learning with a concentration in Computer Vision. Currently, I'm a Software Intern at Inflection Medicine.
          </p>
          <p className={styles.description}>
          I co-founded RescueReady, an AI-driven training platform for EMTs, and have driven research on AI-based surgical skill assessment as a Research Assistant at Wilmer Eye Institute with work presented at AUPO, ISBI, and MIDL. I'm passionate about building tools that solve real problems with currently exploring the intersection of healthcare, AI, and software.
          </p>
          </div>

          <div className={styles.ctaGroup}>
            <button
              className={`${styles.btnBase} ${styles.primaryBtn}`}
              onClick={() => scrollToSection("resume")}
            >
              Resume
            </button>
            <button
              className={`${styles.btnBase} ${styles.primaryBtn}`}
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
            <button
              className={`${styles.btnBase} ${styles.primaryBtn}`}
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </button>
          </div>
        </div>

        <div className={styles.heroCard}>
          <img src="/new.jpg" alt="Subhasri Vijay" className={styles.avatar} />
          <div className={styles.heroCardOverlay}>
            <div className={styles.heroCardInfo}>
              {/* <span className={styles.heroCardName}>Subhasri Vijay</span>
              <span className={styles.heroCardRole}>CS Graduate & AI Researcher</span> */}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.section}>
        <div className={styles.skillsContainer}>
          <h2 className={styles.skillsTitle}>Technical Skills</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>Languages</h3>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>Python</span>
                <span className={styles.skillTag}>Java</span>
                <span className={styles.skillTag}>C/C++</span>
                <span className={styles.skillTag}>SQL</span>
                <span className={styles.skillTag}>JavaScript</span>
                <span className={styles.skillTag}>TypeScript</span>
              </div>
            </div>
            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>Frameworks & Libraries</h3>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>React</span>
                <span className={styles.skillTag}>PyTorch</span>
                <span className={styles.skillTag}>TensorFlow</span>
                <span className={styles.skillTag}>Node.js</span>
                <span className={styles.skillTag}>OpenCV</span>
              </div>
            </div>
            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>Tools & Platforms</h3>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>Git</span>
                <span className={styles.skillTag}>SQLite</span>
              </div>
            </div>
            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>Domains</h3>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>Deep Learning</span>
                <span className={styles.skillTag}>Computer Vision</span>
                <span className={styles.skillTag}>Healthcare AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className={styles.section}>
        <div className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Resume</h2>
            <p className={styles.sectionSubtitle}>
              My full resume with education, experience, and skills.
            </p>
          </div>

          <div className={styles.pdfWrapper}>
            <iframe
              src={`${import.meta.env.BASE_URL}Subhasri_Vijay_Resume.pdf`}
              title="Subhasri Vijay Resume"
              className={styles.resumePdf}
            />
          </div>

          <div className={styles.resumeActions}>
            <a
              href={`${import.meta.env.BASE_URL}Subhasri_Vijay_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btnBase} ${styles.primaryBtn} ${styles.mobilePdfLink}`}
            >
              📄 Open Resume in New Tab
            </a>
            <a
              href={`${import.meta.env.BASE_URL}Subhasri_Vijay_Resume.pdf`}
              download
              className={`${styles.btnBase} ${styles.secondaryBtn}`}
            >
              ⬇️ Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.section}>
        <div className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <p className={styles.sectionSubtitle}>
              A selection of projects showcasing my work in AI, accessibility, and software development.
            </p>
          </div>

          <div className={styles.cardStack}>
            {/* RescueReady */}
            <article className={`${styles.infoCard} ${styles.infoCardProduct}`}>
              <div className={styles.cardText}>
                <div className={`${styles.cardTag} ${styles.productTag}`}>AI / Healthcare</div>
                <h3>RescueReady</h3>
                <p className={styles.cardSubtitle}>
                  AI-powered EMT training platform
                </p>
                <p className={styles.cardDescription}>
                  RescueReady is an AI-driven platform designed to help EMTs practice
                  rapid decision-making in realistic, high-pressure emergency scenarios.
                  It uses generative AI to create dynamic simulations that adapt to user choices.
                </p>
                <ul className={styles.bulletList}>
                  <li>Built to complement EMT training with realistic emergency scenarios</li>
                  <li>Supports rapid decision-making through practice-based simulations</li>
                  <li>Created with React, TypeScript, SQLite, and generative AI</li>
                  <li>Won the Pava Center for Entrepreneurship Award and placed 3rd at HopStart</li>
                </ul>
                <div className={styles.linkRow}>
                  <a
                    href="https://www.cs.jhu.edu/news/from-classroom-to-crisis/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.inlineLink}
                  >
                    📰 Article
                  </a>
                  <a
                    href="/RescueReady.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.inlineLink}
                  >
                    📊 Poster
                  </a>
                </div>
              </div>

              <div className={styles.cardMedia}>
                <video
                  className={styles.projectVideo}
                  controls
                  poster="/RR.jpg"
                  preload="none"
                >
                  <source src="RescueReady-Demo-7_24-2.mov" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </article>

            {/* CAREATHON */}
            <article className={`${styles.infoCard} ${styles.infoCardResearch}`}>
              <div className={styles.cardText}>
                <div className={`${styles.cardTag} ${styles.researchTag}`}>Accessibility</div>
                <h3>CAREATHON</h3>
                <p className={styles.cardSubtitle}>
                  Communication tool for speech and hearing impairments
                </p>
                <p className={styles.cardDescription}>
                  CAREATHON is an accessibility tool built to help individuals with
                  speech and hearing impairments communicate more easily. It combines
                  speech-to-text, text-to-speech, and translation features in a simple
                  Python interface.
                </p>
                <ul className={styles.bulletList}>
                  <li>Developed in Python with speech-to-text and text-to-speech features</li>
                  <li>Added translation support for accessible communication</li>
                  <li>Designed to help users express thoughts and participate in conversations</li>
                </ul>
                <div className={styles.linkRow}>
                  <a
                    href="https://github.com/subhasrivijay/CAREATHON"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.inlineLink}
                  >
                    💻 GitHub
                  </a>
                </div>
              </div>

              <div className={styles.cardMedia}>
                <video
                  className={styles.projectVideo}
                  controls
                  poster="/Careathon.jpg"
                  preload="none"
                >
                  <source src="/CAREATHON_Demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </article>

            {/* IMAZER */}
            <article className={`${styles.infoCard} ${styles.infoCardTeaching}`}>
              <div className={styles.cardText}>
                <div className={`${styles.cardTag} ${styles.teachingTag}`}>Python / GUI</div>
                <h3>IMAZER</h3>
                <p className={styles.cardSubtitle}>
                  Image resizing app with a graphical interface
                </p>
                <p className={styles.cardDescription}>
                  IMAZER is a lightweight Python application with a graphical interface
                  for resizing images quickly and efficiently. It supports multiple
                  formats and is designed for ease of use.
                </p>
                <ul className={styles.bulletList}>
                  <li>Built a GUI for intuitive image resizing</li>
                  <li>Integrated Python libraries for multiple image formats</li>
                  <li>Focused on efficiency and user-friendly interaction</li>
                </ul>
                <div className={styles.linkRow}>
                  <a
                    href="https://github.com/subhasrivijay/IMAZER"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.inlineLink}
                  >
                    💻 GitHub
                  </a>
                </div>
              </div>

              <div className={styles.cardMedia}>
                <video
                  className={styles.projectVideo}
                  controls
                  poster="/Imazer.jpg"
                  preload="none"
                >
                  <source src="/IMAZER_Demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={styles.section}>
        <div className={styles.sectionCard}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.sectionSubtitle}>
              Research, teaching, and product-building experience.
            </p>
          </div>

          <div className={styles.cardStack}>
            {/* Current Role - Inflection Medicine
            <article className={`${styles.infoCard} ${styles.infoCardCurrent}`}>
              <div className={styles.cardText}>
                <div className={styles.cardTagRow}>
                  <div className={`${styles.cardTag} ${styles.currentTag}`}>Current</div>
                  <div className={`${styles.cardTag} ${styles.productTag}`}>Industry</div>
                </div>
                <h3>Software Intern</h3>
                <p className={styles.cardSubtitle}>
                  Inflection Medicine · July 2026 – Present
                </p>
                <ul className={styles.bulletList}>
                  <li>Working on AI-driven healthcare solutions</li>
                  <li>Contributing to software development initiatives</li>
                  <li>Collaborating with cross-functional teams on product development</li>
                </ul>
              </div>

              <div className={styles.cardMedia}>
                <div className={styles.placeholderImage}>
                  <span className={styles.placeholderIcon}>💼</span>
                  <span className={styles.placeholderText}>Inflection Medicine</span>
                </div>
              </div>
            </article> */}

            {/* Research */}
            <article className={`${styles.infoCard} ${styles.infoCardResearch}`}>
              <div className={styles.cardText}>
                <div className={`${styles.cardTag} ${styles.researchTag}`}>Research</div>
                <h3>Cataract Research Assistant</h3>
                <p className={styles.cardSubtitle}>
                  Wilmer Eye Institute · Jan 2022 – May 2026
                </p>
                <ul className={styles.bulletList}>
                  <li>
                    Created and analyzed six surgeon-specific ground-truth strategies to
                    benchmark model performance on the question: "Can AI accurately identify
                    the expert surgeon?"; evaluated using accuracy, sensitivity, specificity,
                    and precision. Findings presented at AUPO 2024.
                  </li>
                  <li>
                    Curated and preprocessed 30+ cataract surgery videos in collaboration
                    with clinicians to build high-quality, structured datasets for training
                    and evaluating deep learning models.
                  </li>
                  <li>
                    Applied and evaluated deep learning architectures (encoders, decoders)
                    and metrics (AUC, confusion matrix) for surgical skill assessment,
                    contributing to clinically relevant advancements in AI-driven surgical evaluation.
                  </li>
                </ul>
                <div className={styles.linkRow}>
                  <a
                    href="/ISBI2025.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.inlineLink}
                  >
                    📊 ISBI Poster
                  </a>
                </div>
              </div>

              <div className={styles.cardMedia}>
                <img
                  src="/Present.jpg"
                  alt="Presenting research"
                  className={styles.cardImage}
                  loading="lazy"
                />
              </div>
            </article>

            {/* Teaching */}
            <article className={`${styles.infoCard} ${styles.infoCardTeaching}`}>
              <div className={styles.cardText}>
                <div className={`${styles.cardTag} ${styles.teachingTag}`}>Teaching</div>
                <h3>Head Course Assistant</h3>
                <p className={styles.cardSubtitle}>
                  EN.601.226 Data Structures · Feb 2024 – May 2026
                </p>
                <ul className={styles.bulletList}>
                  <li>
                    Guided students in debugging complex programming tasks and simplified
                    Data Structures concepts into accessible explanations, fostering better
                    understanding, problem-solving, and technical communication skills.
                  </li>
                  <li>
                    Graded over 300 project submissions and 400 exam submissions while
                    conducting 50+ office hours and collaborating with faculty to create
                    an inclusive and effective learning environment.
                  </li>
                  <li>
                    Designed rubrics and grading guidelines, and analyzed grading statistics
                    to ensure consistency in the grading process and provide clear feedback.
                  </li>
                </ul>
                <div className={styles.linkRow}>
                  <a
                    href="https://www.cs.jhu.edu/news/faculty-students-receive-joel-dean-excellence-in-teaching-awards/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.inlineLink}
                  >
                    🏆 Teaching Award Article
                  </a>
                </div>
              </div>

              <div className={styles.cardMedia}>
                <img
                  src="/TA.jpg"
                  alt="Teaching Assistant"
                  className={styles.cardImage}
                  loading="lazy"
                />
              </div>
            </article>

            {/* Product - RescueReady */}
            <article className={`${styles.infoCard} ${styles.infoCardProduct}`}>
              <div className={styles.cardText}>
                <div className={`${styles.cardTag} ${styles.productTag}`}>Entrepreneurship</div>
                <h3>Co-Founder: RescueReady</h3>
                <p className={styles.cardSubtitle}>
                  Jan 2025 – Sep 2025
                </p>
                <ul className={styles.bulletList}>
                  <li>
                    Co-founded and led development of an AI-powered EMT training platform
                    that simulates high-pressure emergency scenarios to enhance decision-making
                    and situational awareness.
                  </li>
                  <li>
                    Built a full-stack web application using React, TypeScript, and SQLite,
                    integrating generative AI to generate realistic, protocol-aligned simulations
                    in collaboration with EMTs and healthcare professionals.
                  </li>
                  <li>
                    Achieved 3rd Place at HopStart General Ventures and won the Pava Center
                    for Entrepreneurship Award, responsible for product vision, technical
                    architecture, and user testing.
                  </li>
                </ul>
                <div className={styles.linkRow}>
                  <a
                    href="https://hub.jhu.edu/2025/07/01/students-develop-emergency-response-tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.inlineLink}
                  >
                    📰 Article
                  </a>
                  <a
                    href="/RescueReady.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.inlineLink}
                  >
                    📊 Poster
                  </a>
                </div>
              </div>

              <div className={styles.cardMedia}>
                <img
                  src="/RR.jpg"
                  alt="RescueReady"
                  className={styles.cardImage}
                  loading="lazy"
                />
              </div>
            </article>
          </div>

          {/* Publications */}
          <div className={styles.publications}>
            <h3 className={styles.subSectionTitle}>📚 Posters & Publications</h3>

            <div className={styles.pubStack}>
              <a
                href="/AUPO2024.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.pubCard}
              >
                <div className={styles.pubLeft}>
                  <span className={`${styles.pubTag} ${styles.posterTag}`}>Poster</span>
                  <span className={styles.pubTitle}>
                    "Can AI accurately answer: Who is the expert surgeon?"
                  </span>
                </div>
                <div className={styles.pubRight}>
                  <span className={styles.pubVenue}>AUPO 2024</span>
                  <span className={styles.pubArrow}>→</span>
                </div>
              </a>

              <a
                href="/Subhasri_ISBI_2025_Poster.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.pubCard}
              >
                <div className={styles.pubLeft}>
                  <span className={`${styles.pubTag} ${styles.posterTag}`}>Poster</span>
                  <span className={styles.pubTitle}>
                    "Surgical Skill Assessment of Cataract Videos"
                  </span>
                </div>
                <div className={styles.pubRight}>
                  <span className={styles.pubVenue}>ISBI 2025</span>
                  <span className={styles.pubArrow}>→</span>
                </div>
              </a>

              <a
                href="https://openreview.net/pdf?id=QbBPeAIdrk"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.pubCard}
              >
                <div className={styles.pubLeft}>
                  <span className={`${styles.pubTag} ${styles.paperTag}`}>Paper</span>
                  <span className={styles.pubTitle}>
                    "A Vision Foundation Model for Cataract Surgery Using Joint-Embedding
                    Predictive Architecture"
                  </span>
                </div>
                <div className={styles.pubRight}>
                  <span className={styles.pubVenue}>MIDL 2025</span>
                  <span className={styles.pubArrow}>→</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <span className={styles.footerName}>Subhasri Vijay</span>
            <span className={styles.footerTagline}>CS Graduate & AI Researcher</span>
          </div>

          <div className={styles.footerLinks}>
            <a
              href="https://linkedin.com/in/subhasri-vijay-811a0620a"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a href="mailto:subhasrivijay@gmail.com" className={styles.footerLink}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
              </svg>
              Email
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        className={`${styles.scrollToTop} ${showScrollTop ? styles.scrollToTopVisible : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
        </svg>
      </button>
    </div>
  );
}