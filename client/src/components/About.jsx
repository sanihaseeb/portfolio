import { education } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const stats = [
  { value: '3+', label: 'Years of Experience', gradient: true },
  { value: '11', label: 'Microservices Migrated', gradient: false },
  { value: '6', label: 'Engineers Mentored', gradient: false },
  { value: '95%', label: 'Order Throughput Boost', gradient: true },
]

export default function About() {
  const ref = useScrollAnimation()

  return (
    <section className="section section-alt" id="about" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="section-label fade-up">About Me</div>
          <h2 className="section-title fade-up delay-1">Passionate about building things that scale</h2>
        </div>

        <div className="about-grid">
          <div className="fade-up delay-1">
            <p className="about-text">
              I'm a full-stack software engineer with over 3 years of experience designing, building, and scaling
              enterprise-grade applications — from mission-critical financial systems at <strong>Citigroup</strong> to
              health-tech platforms at <strong>Architek Health</strong>.
            </p>
            <p className="about-text">
              I thrive across the entire SDLC: from architecting microservices and designing APIs, to shipping
              polished frontends and setting up CI/CD pipelines. I'm a strong believer in AI-augmented development
              and actively integrate tools like Claude, GitHub Copilot, and Devin into my workflow.
            </p>
            <p className="about-text">
              Outside of enterprise work, I enjoy building personal projects that sharpen my skills and solve real
              problems — from real-time chat apps to weather dashboards.
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
