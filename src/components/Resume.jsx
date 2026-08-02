import { useState, useRef, useEffect } from 'react'
import styles from './Resume.module.css'

const tabs = [
  { id: 'education', label: 'Pendidikan', icon: '🎓' },
  { id: 'experience', label: 'Pengalaman', icon: '💼' },
  { id: 'skills', label: 'Skills', icon: '⚡' },
  { id: 'certificates', label: 'Sertifikat', icon: '🏆' },
]

const education = [
  {
    period: '2021 – 2025',
    title: 'Sarjana Teknik Informatika (S1)',
    place: 'Universitas Banten Jaya',
    desc: 'Menempuh pendidikan S1 Program Studi Teknik Informatika dengan fokus pada pengembangan perangkat lunak, pemrograman, basis data, dan pengembangan aplikasi berbasis web. Mengerjakan berbagai proyek akademik menggunakan PHP, Laravel, dan MySQL.',
  },
  {
    period: '2018 – 2021',
    title: 'Madrasah Aliyah (MA)',
    place: 'MAN 1 Kota Serang',
    desc: 'Menempuh pendidikan di MAN 1 Kota Serang dengan mempelajari mata pelajaran umum dan keagamaan. Mengembangkan kemampuan berpikir kritis, disiplin, kerja sama tim, dan tanggung jawab.',
  },
]

const experience = [
  {
    period: '2025',
    title: 'Full Stack Web Developer (Proyek Skripsi)',
    place: 'Universitas Banten Jaya',
    desc: 'Merancang dan mengembangkan aplikasi "Pengelolaan dan Distribusi Bantuan Sosial" menggunakan PHP, Laravel, dan MySQL dengan metode Agile. Fitur: autentikasi pengguna, pengelolaan data, distribusi bantuan sosial, dan laporan.',
  },
  {
    period: '2025 – 2026',
    title: 'Staff Notaris & PPAT',
    place: 'Kantor Notaris & PPAT Kabupaten Serang',
    desc: 'Pengelolaan dokumen hukum, pengarsipan, pemeriksaan kelengkapan berkas, membantu proses administrasi pembuatan akta, serta koordinasi dengan klien dan instansi terkait.',
  },
  {
    period: '2024',
    title: 'Magang Studi Independen Bersertifikat (MSIB)',
    place: 'Program Kampus Merdeka',
    desc: 'Mengikuti Program MSIB untuk meningkatkan kompetensi di bidang teknologi informasi, pemrograman, pengembangan aplikasi, serta kemampuan kolaboratif dalam proyek berbasis industri.',
  },
  {
    period: '2023',
    title: 'Operator Sekolah',
    place: 'Sekolah Menengah Atas (SMA)',
    desc: 'Mengelola data administrasi sekolah, memperbarui data siswa, memastikan keakuratan data pada sistem sekolah, dan membantu penyusunan laporan administrasi.',
  },
]

const skills = [
  { name: 'HTML5', level: 95, color: '#e44d26' },
  { name: 'CSS3', level: 90, color: '#264de4' },
  { name: 'PHP', level: 85, color: '#777bb4' },
  { name: 'Laravel', level: 80, color: '#ff2d20' },
  { name: 'JavaScript', level: 75, color: '#f0db4f' },
  { name: 'MySQL', level: 85, color: '#00758f' },
  { name: 'jQuery', level: 75, color: '#0769ad' },
  { name: 'Git', level: 70, color: '#f05032' },
]

const certificates = [
  {
    year: '2024',
    title: '[SIB Dicoding Cycle 6] Sertifikat Kelulusan',
    issuer: 'Dicoding Indonesia x Kampus Merdeka (MSIB)',
    desc: 'Berhasil menyelesaikan Program Studi Independen Bersertifikat (SIB) Cycle 6 yang diselenggarakan oleh Dicoding Indonesia melalui Program Kampus Merdeka.',
  },
  {
    year: '2024',
    title: 'Belajar Dasar Pemrograman Web',
    issuer: 'Dicoding Indonesia',
    desc: 'Menyelesaikan kelas dasar pemrograman web yang mencakup HTML, CSS, serta dasar-dasar pengembangan website sesuai standar industri.',
  },
  {
    year: '2024',
    title: 'Belajar Membuat Front-End Web untuk Pemula',
    issuer: 'Dicoding Indonesia',
    desc: 'Mempelajari pengembangan antarmuka website menggunakan HTML, CSS, dan JavaScript untuk membangun website yang interaktif, responsif, dan ramah pengguna.',
  },
]

function SkillBar({ name, level, color, animate }) {
  return (
    <div className={styles.skillItem}>
      <div className={styles.skillHeader}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillPercent}>{level}%</span>
      </div>
      <div className={styles.skillTrack}>
        <div
          className={styles.skillFill}
          style={{
            width: animate ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}99, ${color})`,
            boxShadow: animate ? `0 0 12px ${color}60` : 'none',
          }}
        />
      </div>
    </div>
  )
}

function TimelineItem({ period, title, place, desc }) {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineDot} />
      <div className={styles.timelineCard}>
        <span className={styles.period}>{period}</span>
        <h3 className={styles.itemTitle}>{title}</h3>
        <span className={styles.itemPlace}>{place}</span>
        <p className={styles.itemDesc}>{desc}</p>
      </div>
    </div>
  )
}

export default function Resume() {
  const [activeTab, setActiveTab] = useState('education')
  const [skillsAnimated, setSkillsAnimated] = useState(false)
  const skillsRef = useRef(null)

  useEffect(() => {
    if (activeTab !== 'skills') return
    const timer = setTimeout(() => setSkillsAnimated(true), 100)
    return () => clearTimeout(timer)
  }, [activeTab])

  return (
    <section className="section" id="resume" style={{ background: 'linear-gradient(180deg, var(--dark) 0%, var(--dark-2) 100%)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">My Journey</span>
          <h2 className="section-title">Resume</h2>
          <p className="section-desc">Perjalanan pendidikan, pengalaman kerja, dan keahlian saya</p>
        </div>

        {/* Tab Navigation */}
        <div className={styles.tabs} role="tablist">
          {tabs.map(tab => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab.id)}
              id={`tab-${tab.id}`}
            >
              <span className={styles.tabIcon}>{tab.icon}</span>
              <span className={styles.tabLabel}>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className={styles.tabContent} role="tabpanel" aria-labelledby={`tab-${activeTab}`}>
          {activeTab === 'education' && (
            <div className={styles.timeline}>
              {education.map((item, i) => (
                <TimelineItem key={i} {...item} />
              ))}
            </div>
          )}

          {activeTab === 'experience' && (
            <div className={styles.timeline}>
              {experience.map((item, i) => (
                <TimelineItem key={i} {...item} />
              ))}
            </div>
          )}

          {activeTab === 'skills' && (
            <div className={styles.skillsGrid} ref={skillsRef}>
              {skills.map((skill, i) => (
                <SkillBar key={i} {...skill} animate={skillsAnimated} />
              ))}
            </div>
          )}

          {activeTab === 'certificates' && (
            <div className={styles.certGrid}>
              {certificates.map((cert, i) => (
                <div key={i} className={styles.certCard}>
                  <div className={styles.certYear}>{cert.year}</div>
                  <div className={styles.certIcon}>🏆</div>
                  <h3 className={styles.certTitle}>{cert.title}</h3>
                  <span className={styles.certIssuer}>{cert.issuer}</span>
                  <p className={styles.certDesc}>{cert.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
