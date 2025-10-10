import { useNavigate } from 'react-router-dom';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import styles from './Home.module.css';

const roles = [
  "MSE CS Student at Johns Hopkins University",
  "Graduate Research Assistant",
  "Head Course Assistant",
  "Masson Fellow 2024"
];

const menuItems = [
  { label: 'Projects', path: '/projects', emoji: '🛠️' },
  { label: 'Resume', path: '/resume', emoji: '📄' },
  { label: 'Experience', path: '/experience', emoji: '💼' },
  { label: 'More About Me', path: '/more-about-me', emoji: '🧩' },
  { label: 'Contact', path: '/contact', emoji: '✉️' },
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

  return (
    <div className={styles.root}>
      {/* SVG Researcher Background */}
      <svg className={styles.bgNeural} width="700" height="400" viewBox="0 0 700 400" fill="none">
        {/* Neurons */}
        <circle cx="100" cy="180" r="26" fill="#a5b4fc" opacity="0.22" />
        <circle cx="240" cy="90" r="18" fill="#818cf8" opacity="0.16" />
        <circle cx="350" cy="200" r="36" fill="#5eead4" opacity="0.15" />
        <circle cx="520" cy="110" r="20" fill="#38bdf8" opacity="0.18" />
        <circle cx="600" cy="220" r="30" fill="#6366f1" opacity="0.15" />
        {/* Connections */}
        <line x1="100" y1="180" x2="240" y2="90" stroke="#2563eb" strokeWidth="2" opacity="0.09" />
        <line x1="240" y1="90" x2="350" y2="200" stroke="#0ea5e9" strokeWidth="2" opacity="0.13" />
        <line x1="350" y1="200" x2="520" y2="110" stroke="#818cf8" strokeWidth="2" opacity="0.12" />
        <line x1="520" y1="110" x2="600" y2="220" stroke="#0ea5e9" strokeWidth="2" opacity="0.1" />
        <line x1="240" y1="90" x2="520" y2="110" stroke="#a5b4fc" strokeWidth="2" opacity="0.08" />
        {/* Optional: formula */}
        <text x="20" y="355" fontSize="20" fill="#818cf8" opacity="0.1" fontFamily="monospace">
          y = σ(Wx + b)
        </text>
      </svg>

      {/* Main glass morph card */}
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

        <div className={styles.menuGrid}>
        {menuItems.map(item => (
          <div
            key={item.label}
            className={styles.menuCard}
            tabIndex={0}
            role="button"
            aria-label={item.label}
            onClick={() => navigate(item.path)}
            onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && navigate(item.path)}
          >
            <span className={styles.menuEmoji}>{item.emoji}</span>
            <span className={styles.menuLabel}>{item.label}</span>
          </div>
        ))}
      </div>

        {/* Call to Action */}
        <button
          className={styles.ctaBtn}
          onClick={() => navigate('/contact')}
        >
          Let&apos;s Connect!
        </button>
      </div>
    </div>
  );
}