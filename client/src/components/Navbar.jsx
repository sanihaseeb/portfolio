import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolio'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#" className="navbar-brand gradient-text">SH</a>
        <div className="navbar-links">
          {links.map(l => (
            <a key={l.label} href={l.href} className="navbar-link">{l.label}</a>
          ))}
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
            GitHub ↗
          </a>
        </div>
      </div>
    </nav>
  )
}
