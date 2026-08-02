import styles from './Services.module.css'

const services = [
  {
    icon: '🎨',
    title: 'Web Design',
    desc: 'Merancang tampilan website yang modern, responsif, dan menarik dengan memperhatikan estetika dan pengalaman pengguna.',
    tags: ['UI/UX', 'Figma', 'Responsive'],
  },
  {
    icon: '⚙️',
    title: 'Web Development',
    desc: 'Membangun website dan aplikasi web yang fungsional, aman, dan berkinerja tinggi menggunakan teknologi terkini.',
    tags: ['Laravel', 'PHP', 'MySQL'],
  },
  {
    icon: '🗄️',
    title: 'Database Management',
    desc: 'Merancang dan mengelola basis data yang efisien, terstruktur, dan mudah dipelihara untuk kebutuhan aplikasi Anda.',
    tags: ['MySQL', 'Query', 'ERD'],
  },
  {
    icon: '📱',
    title: 'Responsive Website',
    desc: 'Memastikan website dapat diakses dengan baik di semua perangkat, mulai dari desktop, tablet, hingga smartphone.',
    tags: ['Mobile First', 'CSS3', 'Bootstrap'],
  },
  {
    icon: '🔧',
    title: 'Website Maintenance',
    desc: 'Menyediakan layanan pemeliharaan dan pembaruan website untuk memastikan performa dan keamanan tetap optimal.',
    tags: ['Optimization', 'Security', 'Updates'],
  },
  {
    icon: '📊',
    title: 'Admin Dashboard',
    desc: 'Mengembangkan panel administrasi yang intuitif dan informatif untuk pengelolaan data dan sistem internal.',
    tags: ['Dashboard', 'Charts', 'CRUD'],
  },
]

export default function Services() {
  return (
    <section className={`section ${styles.servicesSection}`} id="services">
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header">
          <span className="section-label">What I Offer</span>
          <h2 className="section-title">My Services</h2>
          <p className="section-desc">
            Layanan yang saya tawarkan untuk membantu mewujudkan ide digital Anda
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((svc, i) => (
            <div key={i} className={styles.card} style={{ '--i': i }}>
              <div className={styles.cardGlow} />
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{svc.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{svc.title}</h3>
              <p className={styles.cardDesc}>{svc.desc}</p>
              <div className={styles.tags}>
                {svc.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <div className={styles.cardArrow}>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
