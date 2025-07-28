import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Projects', path: '/projects', emoji: '🛠️' },
    { label: 'Resume', path: '/resume', emoji: '📄' },
    { label: 'Experience', path: '/experience', emoji: '💼' },
    { label: 'More About Me', path: '/more-about-me', emoji: '🧩' },
    { label: 'Contact', path: '/contact', emoji: '✉️' },
  ];

  return (
    <div className={styles.root}>
      <div className={styles.card}>
        <img
          src="/new.jpg"
          alt="Subhasri Vijay"
          className={styles.avatar}
        />
        <h1 className={styles.title}>
          Hi, I&apos;m <span className={styles.name}>Subhasri Vijay</span>
          <span className={styles.wave}>👋</span>
        </h1>
        <div className={styles.subtitle}>
          MSE CS Student at Johns Hopkins University <span style={{color:'#0ea5e9'}}> | </span>
          Student Research Assistant <span style={{color:'#0ea5e9'}}> | </span>
          Head Course Assistant <span style={{color:'#0ea5e9'}}> | </span>
          Masson Fellow
          <br/>
          <span className={styles.tagline}>
            Transforming Ideas into Impactful Solutions for the Future
          </span>
        </div>

        <div className={styles.menu}>
          {menuItems.map(item => (
            <button
              key={item.label}
              className={styles.menuBtn}
              onClick={() => navigate(item.path)}
            >
              <span>{item.emoji}</span> {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}