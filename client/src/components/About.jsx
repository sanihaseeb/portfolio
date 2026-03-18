import { education } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const companies = [
  { name: 'Citigroup',       logo: '/logos/citi.png',      url: 'https://www.citigroup.com' },
  { name: 'Architek Health', logo: '/logos/architek.jpg',  url: 'https://www.architekhealth.com' },
  { name: 'Manulife',        logo: '/logos/manulife.svg',  url: 'https://www.manulife.com' },
  { name: 'Microsoft',       logo: '/logos/microsoft.png', url: 'https://www.nuance.com' },
]

const stats = [
  { value: '3+', label: 'Years of Experience', gradient: true },
  { value: '40%', label: 'Throughput Gain via AI', gradient: true },
  { value: '95%', label: 'API Order Latency Reduced', gradient: false },
  { value: '6', label: 'Engineers Mentored', gradient: false },
]

export default function About() {
  const ref = useScrollAnimation()

  return (
    <section className="section section-alt" id="about" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="section-label fade-up">About Me</div>
          <h2 className="section-title fade-up delay-1">Passionate about building things that scale</h2>
          <div className="about-companies fade-up delay-2">
            <span className="about-companies-label">Worked at</span>
            {companies.map(c => (
              <a key={c.name} href={c.url} target="_blank" rel="noreferrer"
                className="about-company-logo">
                <img src={c.logo} alt={c.name} />
                <span className="about-company-name">{c.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="about-grid">
          <div className="fade-up delay-1">
            <p className="about-text">
              I'm a full-stack engineer with 3+ years building systems that handle real load — mission-critical
              deal settlement in financial services, real-time health-tech platforms, and enterprise insurance tooling.
              I own the full SDLC: architecture, APIs, frontends, CI/CD.
            </p>
            <p className="about-text">
              What sets me apart is how I build. I embed AI directly into my workflow — integrating LLM APIs
              (Claude, GPT-4) into production systems, and using tools like{' '}
              <strong>Claude Code</strong> and <strong>Devin</strong> to move faster without cutting corners.
              That's translated into a <strong>40% throughput gain</strong> on everything I ship.
            </p>
            <p className="about-text">
              Outside of work I build side projects to stay sharp — real-time chat, stock dashboards,
              CLI tools. If it's an interesting engineering problem, I'm probably already tinkering with it.
            </p>

            <div className="about-education">
              <div className="about-edu-icon">🎓</div>
              <div>
                <div className="about-edu-degree">{education.degree}</div>
                <div className="about-edu-school">{education.institution}</div>
                <div className="about-edu-meta">{education.location} · {education.period}</div>
              </div>
            </div>
          </div>

          <div className="about-stats fade-up delay-2">
            {stats.map(s => (
              <div key={s.label} className="about-stat-card">
                <div className={`about-stat-number${s.gradient ? ' gradient-text' : ''}`}>
                  {s.value}
                </div>
                <div className="about-stat-desc">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
