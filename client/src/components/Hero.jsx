import { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolio'

const TITLES = ['Full-Stack Software Engineer', 'Backend Architect']

function useTypingTitle() {
  const [titleIdx, setTitleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = TITLES[titleIdx]
    let timeout

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setTitleIdx((titleIdx + 1) % TITLES.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, titleIdx])

  return displayed
}

const topSkills = ['Java', 'TypeScript', 'React', 'Node.js', 'AWS', 'LLM APIs']

const companies = [
  { name: 'Citi',      logo: '/logos/citi.png',      url: 'https://www.citigroup.com' },
  { name: 'Architek',  logo: '/logos/architek.jpg',  url: 'https://www.architekhealth.com' },
  { name: 'Manulife',  logo: '/logos/manulife.svg',  url: 'https://www.manulife.com' },
  { name: 'Microsoft', logo: '/logos/microsoft.png', url: 'https://www.nuance.com' },
]

export default function Hero() {
  const typedTitle = useTypingTitle()

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
      </div>

      <div className="container">
        <div className="hero-inner">
          {/* Left: Text */}
          <div>
            <h1 className="hero-name fade-up visible delay-1">
              <span className="gradient-text">Sani</span>
              <br />Haseeb
            </h1>

            <p className="hero-title fade-up visible delay-2">
              {typedTitle}<span className="hero-cursor">|</span>
            </p>

            <p className="hero-tagline fade-up visible delay-3">
              {personalInfo.tagline}
            </p>

            <div className="hero-cta fade-up visible delay-3">
              <a href="#projects" className="btn btn-primary">View Projects →</a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn btn-outline">
                GitHub ↗
              </a>
              <a href={`https://linkedin.com/in/sani-haseeb`} target="_blank" rel="noreferrer" className="btn btn-outline">
                LinkedIn ↗
              </a>
            </div>

            <div className="hero-stats fade-up visible delay-4">
              <div>
                <div className="hero-stat-value gradient-text">3+</div>
                <div className="hero-stat-label">Years Experience</div>
              </div>
              <div>
                <div className="hero-stat-value gradient-text">4</div>
                <div className="hero-stat-label">Companies</div>
              </div>
              <div>
                <div className="hero-stat-value gradient-text">McGill</div>
                <div className="hero-stat-label">BEng Software</div>
              </div>
            </div>
          </div>

          {/* Right: Profile Card */}
          <div className="hero-card-wrapper fade-up visible delay-2">
            <div className="hero-card">
              <div className="hero-card-header">
                <div className="hero-card-avatar-ring">
                  <img src="/avatar.png" alt="Sani Haseeb" className="hero-card-avatar" style={{ objectFit: 'cover', objectPosition: 'center 25%' }} />
                </div>
                <div>
                  <div className="hero-card-name">Sani Haseeb</div>
                  <div className="hero-card-role">Software Developer · AVP @ Citi</div>
                </div>
              </div>

              <div className="hero-card-status">
                <span className="hero-card-status-dot" />
                Currently at Citigroup, Mississauga ON
              </div>

              <div className="hero-card-status" style={{ marginTop: '8px', background: 'rgba(99,102,241,0.08)', borderColor: 'rgba(99,102,241,0.25)' }}>
                <img src="/logos/mcgill-coa.png" alt="McGill" style={{ width: '18px', height: '18px' }} />
                Software Engineer, McGill University 2021
              </div>

              <div className="hero-card-skills">
                {topSkills.map(s => (
                  <span key={s} className="hero-card-skill">{s}</span>
                ))}
              </div>

              <div className="hero-card-companies">
                <div className="hero-card-companies-label">Worked at</div>
                <div className="hero-card-company-list">
                  {companies.map(c => (
                    <a
                      key={c.name}
                      href={c.url}
                      target="_blank"
                      rel="noreferrer"
                      className="hero-card-company-logo"
                    >
                      <img src={c.logo} alt={c.name} />
                      <span className="hero-card-company-name">{c.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
