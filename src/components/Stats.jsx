import { useEffect, useRef, useState } from 'react'
import styles from './Stats.module.css'

const stats = [
  { number: 10, suffix: '+', label: 'Proyek Selesai', icon: '🚀' },
  { number: 3, suffix: '+', label: 'Sertifikat', icon: '🏆' },
  { number: 4, suffix: '+', label: 'Tech Stack', icon: '⚡' },
  { number: 2, suffix: '+', label: 'Tahun Pengalaman', icon: '📅' },
]

function CountUp({ target, suffix, active }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const duration = 1800
    const step = target / (duration / 16)

    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [active, target])

  return <span>{count}{suffix}</span>
}

export default function Stats() {
  const [active, setActive] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true) },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.statsSection} ref={ref}>
      <div className={styles.orb} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.card} style={{ '--i': i }}>
              <div className={styles.icon}>{stat.icon}</div>
              <div className={styles.number}>
                <CountUp target={stat.number} suffix={stat.suffix} active={active} />
              </div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
