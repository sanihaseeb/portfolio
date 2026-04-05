import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolio'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
]

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers = links.map(l => {
      const el = document.getElementById(l.href.slice(1))
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(l.href.slice(1)) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(obs => obs?.disconnect())
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#" className="navbar-brand gradient-text">SH</a>

        <div className="navbar-links">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className={`navbar-link${activeSection === l.href.slice(1) ? ' active' : ''}`}
            >
              {l.label}
            </a>
          ))}
          <button className="theme-toggle" onClick={() => setDark(d => !d)} aria-label="Toggle dark mode">
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
            GitHub ↗
          </a>
        </div>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className={`mobile-menu-link${activeSection === l.href.slice(1) ? ' active' : ''}`}
              onClick={close}
            >
              {l.label}
            </a>
          ))}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="mobile-menu-link"
            onClick={close}
          >
            GitHub ↗
          </a>
          <button
            className="mobile-menu-link mobile-theme-toggle"
            onClick={() => { setDark(d => !d); close() }}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
            <span>{dark ? 'Light mode' : 'Dark mode'}</span>
          </button>
        </div>
      )}
    </nav>
  )
}
