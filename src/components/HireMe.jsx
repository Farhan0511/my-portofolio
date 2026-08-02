import styles from './HireMe.module.css'

export default function HireMe() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />

        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.dot} />
            Open to Work
          </div>

          <h2 className={styles.title}>
            Saya <span>Tersedia</span> untuk<br />
            Freelance & Kolaborasi
          </h2>

          <p className={styles.desc}>
            Siap membantu Anda mewujudkan ide menjadi produk digital yang luar biasa.
            Mari berdiskusi tentang proyek Anda!
          </p>

          <div className={styles.actions}>
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Hire Me Now
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="mailto:muhammadfarhan8743@gmail.com" className="btn btn-outline">
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
