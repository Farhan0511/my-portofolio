import { useState, useEffect, useRef } from "react";
import styles from "./Hero.module.css";

const roles = [
  "Web Developer.",
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentRole = roles[roleIdx];

    if (!deleting && charIdx < currentRole.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      }, 80);
    } else if (!deleting && charIdx === currentRole.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, 45);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setRoleIdx((r) => (r + 1) % roles.length);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [charIdx, deleting, roleIdx]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.hero} id="home">
      {/* Background orbs */}
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />
      <div className={`${styles.orb} ${styles.orb3}`} />

      {/* Particle grid */}
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Available for work
        </div>

        <p className={styles.greeting}>Hey! I am</p>
        <h1 className={styles.name}>
          Mochamad <br />
          <span className={styles.lastName}>Farhan Ferdiansyah</span>
        </h1>

        <h2 className={styles.role}>
          I&apos;m a{" "}
          <span className={styles.roleText}>
            {displayText}
            <span className={styles.cursor} aria-hidden="true">
              |
            </span>
          </span>
        </h2>

        <p className={styles.tagline}>
          Lulusan S1 Teknik Informatika yang bersemangat membangun
          <br />
          solusi digital yang fungsional dan berkesan.
        </p>

        <div className={styles.actions}>
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Hubungi Saya
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#projects"
            className="btn btn-outline"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Lihat Proyek
          </a>
        </div>

        <div className={styles.socials}>
          {/* GitHub */}
          <a
            href="https://github.com/Farhan0511"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/farhan-ansyah-182491284/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:muhammadfarhan8743@gmail.com"
            className={styles.socialLink}
            aria-label="Email"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              width="20"
              height="20"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 7l-10 7L2 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className={styles.scrollDown}
        onClick={scrollToAbout}
        aria-label="Scroll to about"
      >
        <span className={styles.scrollMouse}>
          <span className={styles.scrollWheel} />
        </span>
        <span className={styles.scrollText}>Scroll</span>
      </button>
    </section>
  );
}
