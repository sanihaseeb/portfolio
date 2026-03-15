import { personalInfo } from '../data/portfolio'

const topSkills = ['Java', 'TypeScript', 'React', 'Node.js', 'AWS', 'Spring Boot']

const companies = [
  { name: 'Citi', color: '#003B70' },
  { name: 'Architek', color: '#10B981' },
  { name: 'Manulife', color: '#00A758' },
]

export default function Hero() {
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
            <div className="hero-greeting fade-up visible">
              <span>👋</span> Available for new opportunities
            </div>

            <h1 className="hero-name fade-up visible delay-1">
              <span className="gradient-text">Sani</span>
              <br />Haseeb
            </h1>

            <p className="hero-title fade-up visible delay-2">
              Full-Stack Software Engineer
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
                <div className="hero-stat-value gradient-text">3</div>
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
                <div className="hero-card-avatar">SH</div>
                <div>
                  <div className="hero-card-name">Sani Haseeb</div>
                  <div className="hero-card-role">Software Developer · AVP @ Citi</div>
                </div>
              </div>

              <div className="hero-card-status">
                <span className="hero-card-status-dot" />
                Currently at Citigroup, Mississauga ON
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
                    <span
                      key={c.name}
                      className="hero-card-company-badge"
                      style={{ background: c.color }}
                    >
                      {c.name}
                    </span>
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
