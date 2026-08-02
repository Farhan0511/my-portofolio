import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#resume', label: 'Resume' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      // Active section detection
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive('#' + sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setActive(href)
    setMenuOpen(false)
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a className={styles.logo} href="#home" onClick={() => handleNav('#home')}>
          <span className={styles.logoAccent}>F</span>arhan
        </a>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.menuOpen : ''}`}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`${styles.navLink} ${active === link.href ? styles.navLinkActive : ''}`}
                onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
              >
                {link.label}
                <span className={styles.linkUnderline} />
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className={`btn btn-primary ${styles.ctaBtn}`} onClick={(e) => { e.preventDefault(); handleNav('#contact') }}>
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
