import { useEffect, useRef } from "react";
import styles from "./About.module.css";

const info = [
  { label: "Nama", value: "Mochamad Farhan Ferdiansyah" },
  { label: "Tanggal Lahir", value: "23 September 2002" },
  { label: "Alamat", value: "Kota Serang, Banten" },
  { label: "Email", value: "muhammadfarhan8743@gmail.com" },
  { label: "No. Telepon", value: "+62 896-1895-2022" },
];

const techStack = [
  "PHP",
  "Laravel",
  "MySQL",
  "HTML5",
  "CSS3",
  "JavaScript",
  "jQuery",
  "Git",
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.15 },
    );

    const els = sectionRef.current?.querySelectorAll("[data-animate]");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="about" ref={sectionRef}>
      <div className="container">
        <div className={styles.grid}>
          {/* Image side */}
          <div className={styles.imageCol} data-animate>
            <div className={styles.imageWrapper}>
              <div className={styles.imageBorder} />
              <div className={styles.imagePlaceholder}>
                <img
                  src="/farhan.jpg"
                  alt="Mochamad Farhan Ferdiansyah"
                  className={styles.profileImage}
                />
                <div className={styles.avatarRing} />
              </div>
              {/* Floating badge */}
              <div className={styles.floatBadge}>
                <span className={styles.badgeIcon}>💼</span>
                <div>
                  <div className={styles.badgeTitle}>Experience</div>
                  <div className={styles.badgeVal}>2+ Years</div>
                </div>
              </div>
              <div className={`${styles.floatBadge} ${styles.floatBadge2}`}>
                <span className={styles.badgeIcon}>🎓</span>
                <div>
                  <div className={styles.badgeTitle}>Degree</div>
                  <div className={styles.badgeVal}>S1 Informatika</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div
            className={styles.contentCol}
            data-animate
            style={{ "--delay": "0.2s" }}
          >
            <span className="section-label">Tentang Saya</span>
            <h2 className={styles.heading}>
              Passionate <span className="gradient-text">Web Developer</span>
              <br />& Problem Solver
            </h2>

            <p className={styles.bio}>
              Saya adalah lulusan S1 Teknik Informatika yang memiliki minat
              dalam pengembangan web, pengelolaan basis data, dan teknologi
              informasi. Saya senang mempelajari hal-hal baru, mampu bekerja
              secara individu maupun dalam tim, serta berkomitmen memberikan
              hasil kerja yang terbaik.
            </p>

            {/* Info list */}
            <ul className={styles.infoList}>
              {info.map(({ label, value }) => (
                <li key={label} className={styles.infoItem}>
                  <span className={styles.infoLabel}>{label}</span>
                  <span className={styles.infoValue}>{value}</span>
                </li>
              ))}
            </ul>

            {/* Tech stack */}
            <div className={styles.techStack}>
              <p className={styles.techLabel}>Tech Stack</p>
              <div className={styles.techTags}>
                {techStack.map((tech) => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

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
              </a>
              <a
                href="#resume"
                className="btn btn-outline"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("resume")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Lihat Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
