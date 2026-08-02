import { useState } from "react";
import styles from "./Projects.module.css";
import dinsos from "/Dinsos.png";

const categories = ["All", "Web App"];

const projects = [
  {
    id: 1,
    title: "Sistem Bantuan Sosial",
    category: "Web App",
    Image: "/Dinsos.png",
    desc: "Aplikasi pengelolaan dan distribusi bantuan sosial dalam program rehabilitasi sosial. Dibangun dengan PHP, Laravel, MySQL, dan metode Agile.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    color: "#6366f1",
    emoji: "🏛️",
  },
  {
    id: 2,
    title: "Saung Engkong",
    category: "Web App",
    desc: "Website pemesanan restoran berbasis QR Code yang memungkinkan pelanggan memindai QR di setiap meja untuk melihat menu dan melakukan pemesanan secara langsung tanpa perlu menunggu pelayan.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    color: "#ec4899",
    emoji: "🍽️",
  },
  {
    id: 3,
    title: "Website Kedai Kopi",
    category: "Web App",
    desc: "Website kedai kopi yang menampilkan informasi menu, promo, lokasi, dan kontak. Dibangun menggunakan HTML, CSS, dan JavaScript dengan desain responsif untuk memberikan pengalaman pengguna yang menarik di berbagai perangkat.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "#f59e0b",
    emoji: "☕",
  },
  {
    id: 4,
    title: "Front-End Web Components",
    category: "Web App",
    desc: "Koleksi komponen front-end interaktif yang dikembangkan selama mengikuti kelas Dicoding, menggunakan HTML, CSS, dan JavaScript modern.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    color: "#8b5cf6",
    emoji: "🎨",
  },
  {
    id: 5,
    title: "MSIB Project - Kampus Merdeka",
    category: "Web App",
    desc: "Proyek kolaboratif yang dikerjakan selama Program Magang Studi Independen Bersertifikat, mengaplikasikan teknologi informasi dalam lingkungan industri.",
    tech: ["JavaScript", "API", "Teamwork"],
    color: "#06b6d4",
    emoji: "🚀",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [hovered, setHovered] = useState(null);

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className={`section ${styles.projectsSection}`} id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">My Projects</h2>
          <p className="section-desc">
            Kumpulan proyek yang telah saya kerjakan
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={styles.filters}
          role="group"
          aria-label="Project categories"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${filter === cat ? styles.filterActive : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className={styles.grid}>
          {filtered.map((project) => (
            <div
              key={project.id}
              className={styles.card}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ "--accent-color": project.color }}
            >
              {/* Preview */}
              <div className={styles.preview}>
                <div
                  className={styles.previewBg}
                  style={{
                    background: `linear-gradient(135deg, ${project.color}22 0%, ${project.color}11 100%)`,
                  }}
                >
                  <span className={styles.previewEmoji}>{project.emoji}</span>
                </div>
                <div className={styles.categoryBadge}>{project.category}</div>
              </div>

              {/* Content */}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.desc}</p>

                <div className={styles.techRow}>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={styles.techBadge}
                      style={{
                        color: project.color,
                        borderColor: `${project.color}44`,
                        background: `${project.color}11`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className={styles.cardFooter}>
                  <a
                    href="#"
                    className={styles.viewLink}
                    aria-label={`View ${project.title}`}
                  >
                    View Project
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
                    href="#"
                    className={styles.githubLink}
                    aria-label="View source code"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width="18"
                      height="18"
                    >
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Hover line accent */}
              <div
                className={styles.accentLine}
                style={{ background: project.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
