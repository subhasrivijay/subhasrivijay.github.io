import React, { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";

type Section = {
  id: string;
  title: string;
  lead: string;
  body: string;
  ctas?: { label: string; href: string }[];
};

const sections: Section[] = [
  {
    id: "about",
    title: "About",
    lead: "Building impactful solutions at Johns Hopkins University.",
    body:
      "Hi, I’m Subhasri Vijay. I’m a CS graduate student, research assistant, and Masson Fellow. I love merging theory and real-world applications in machine learning, optimization, and digital systems.",
    ctas: [
      { label: "View Resume", href: "/resume" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    id: "experience",
    title: "Experience",
    lead: "Research, teaching, and leadership roles.",
    body:
      "From leading course assistant teams to advancing research in computer science and AI, I thrive in collaborative, challenging environments solving problems with impact.",
    ctas: [{ label: "See Details", href: "/experience" }],
  },
  {
    id: "projects",
    title: "Projects",
    lead: "Selected work in ML, optimization, and software.",
    body:
      "Highlights include ML-powered simulations, algorithmic toolkits, and scalable systems. I enjoy making abstract ideas practical and accessible.",
    ctas: [{ label: "Explore Projects", href: "/projects" }],
  },
  {
    id: "more",
    title: "More About Me",
    lead: "Interests, values, and personal growth.",
    body:
      "Curious, creative, and driven. I value mentorship, diversity, and continuous learning—in tech and beyond.",
    ctas: [{ label: "Learn More", href: "/more-about-me" }],
  },
  {
    id: "contact",
    title: "Contact",
    lead: "Let’s connect or collaborate.",
    body:
      "Reach out for projects, mentoring, or professional opportunities. I respond fastest by email or LinkedIn.",
    ctas: [
      { label: "Email", href: "mailto:subhasri@example.com" },
      { label: "LinkedIn", href: "https://linkedin.com/in/subhasrivijay" },
    ],
  },
];

export default function Home() {
  const [activeId, setActiveId] = useState<string>(sections[0].id);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => {
      const snapEls = sections.map(s => document.getElementById(s.id));
      let best = { id: sections[0].id, top: Infinity };
      for (const el of snapEls) {
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < best.top + 20) {
          best = { id: el.id, top: rect.top };
        }
      }
      setActiveId(best.id);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={styles.root}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <img
            src="/new.jpg"
            alt="Portrait of Subhasri Vijay"
            className={styles.avatar}
            loading="lazy"
            width={88}
            height={88}
          />
          <div>
            <h1 className={styles.name}>Subhasri Vijay</h1>
            <div className={styles.role}>CS Graduate Student, JHU</div>
          </div>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {sections.map(s => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={
                    activeId === s.id ? styles.navLinkActive : styles.navLink
                  }
                  onClick={e => handleNavClick(e, s.id)}
                  aria-current={activeId === s.id ? "page" : undefined}
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main className={styles.infinity} ref={containerRef}>
        {sections.map(s => (
          <section id={s.id} key={s.id} className={styles.snapSection}>
            <div className={styles.sectionCard} tabIndex={0}>
              <header className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>{s.title}</h2>
                <div className={styles.sectionLead}>{s.lead}</div>
              </header>
              <div className={styles.sectionBody}>{s.body}</div>
              {s.ctas?.length ? (
                <div className={styles.ctaRow}>
                  {s.ctas.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      className={
                        c.label.toLowerCase().includes("email") ||
                        c.label.toLowerCase().includes("resume")
                          ? styles.primaryBtn
                          : styles.secondaryBtn
                      }
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {c.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}