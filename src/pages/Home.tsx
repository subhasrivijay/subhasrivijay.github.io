import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import styles from './Home.module.css';

const roles = [
  'MSE CS Student at Johns Hopkins University',
  'Graduate Research Assistant',
  'Head Course Assistant',
  'Masson Fellow 2024',
];

const sections = [
  { label: 'Projects', path: '/projects', emoji: '🛠️', tagline: 'ML, optimization, systems, and fun builds' },
  { label: 'Resume', path: '/resume', emoji: '📄', tagline: 'Skills, education, and accomplishments' },
  { label: 'Experience', path: '/experience', emoji: '💼', tagline: 'Research, teaching, and industry work' },
  { label: 'More About Me', path: '/more-about-me', emoji: '🧩', tagline: 'Interests, hobbies, and values' },
  { label: 'Contact', path: '/contact', emoji: '✉️', tagline: 'Let’s collaborate or chat' },
];

export default function Home() {
  const navigate = useNavigate();
  const [typedText] = useTypewriter({
    words: roles,
    loop: 0, // infinite
    typeSpeed: 72,
    deleteSpeed: 34,
    delaySpeed: 1650,
  });

  // Infinite scroll stack
  const [stack, setStack] = useState(() => [...sections, ...sections]); // start with 2 cycles
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          // Append another cycle when near bottom
          setStack((prev) => [...prev, ...sections]);
        }
      },
      { root: null, rootMargin: '800px', threshold: 0 }
    );

    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.root}>
      {/* SVG Researcher Background */}
      <svg className={styles.bgNeural} width="700" height="400" viewBox="0 0 700 400" fill="none">
        <circle cx="100" cy="180" r="26" fill="#a5b4fc" opacity="0.22" />
        <circle cx="240" cy="90" r="18" fill="#818cf8" opacity="0.16" />
        <circle cx="350" cy="200" r="36" fill="#5eead4" opacity="0.15" />
        <circle cx="520" cy="110" r="20" fill="#38bdf8" opacity="0.18" />
        <circle cx="600" cy="220" r="30" fill="#6366f1" opacity="0.15" />
        <line x1="100" y1="180" x2="240" y2="90" stroke="#2563eb" strokeWidth="2" opacity="0.09" />
        <line x1="240" y1="90" x2="350" y2="200" stroke="#0ea5e9" strokeWidth="2" opacity="0.13" />
        <line x1="350" y1="200" x2="520" y2="110" stroke="#818cf8" strokeWidth="2" opacity="0.12" />
        <line x1="520" y1="110" x2="600" y2="220" stroke="#0ea5e9" strokeWidth="2" opacity="0.1" />
        <line x1="240" y1="90" x2="520" y2="110" stroke="#a5b4fc" strokeWidth="2" opacity="0.08" />
        <text x="20" y="355" fontSize="20" fill="#818cf8" opacity="0.1" fontFamily="monospace">
          y = σ(Wx + b)
        </text>
      </svg>

      {/* Hero card */}
      <div className={styles.card}>
        <img
          src="/new.jpg"
          alt="Portrait of Subhasri Vijay"
          className={styles.avatar}
        />
        <h1 className={styles.title}>
          Hi, I&apos;m <span className={styles.name}>Subhasri Vijay</span>
          <span className={styles.wave}>👋</span>
        </h1>

        <div className={styles.subtitle}>
          <span className={styles.typingRole}>
            {typedText}
            <Cursor />
          </span>
          <br />
          <span className={styles.tagline}>
            Transforming Ideas into Impactful Solutions for the Future
          </span>
        </div>
      </div>

      {/* Infinite vertical sections */}
      <div className={styles.infinity}>
        {stack.map((item, idx) => (
          <section
            key={`${item.label}-${idx}`}
            className={styles.snapSection}
            onClick={() => navigate(item.path)}
            aria-label={item.label}
            role="button"
          >
            <div className={styles.sectionCard}>
              <span className={styles.bigEmoji} aria-hidden="true">{item.emoji}</span>
              <h2 className={styles.sectionTitle}>{item.label}</h2>
              <p className={styles.sectionTagline}>{item.tagline}</p>
              <div className={styles.sectionGlow} />
              <div className={styles.progressBar} />
            </div>
          </section>
        ))}
        <div ref={sentinelRef} className={styles.sentinel} />
      </div>
    </div>
  );
}