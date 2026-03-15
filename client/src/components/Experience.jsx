import { experience } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Experience() {
  const ref = useScrollAnimation()

  return (
    <section className="section" id="experience" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="section-label fade-up">Experience</div>
          <h2 className="section-title fade-up delay-1">Where I've worked</h2>
        </div>

        <div className="experience-list">
          {experience.map((job, i) => (
            <div key={job.company} className={`exp-card fade-up delay-${i + 1}`}>
              <div className="exp-logo" style={{ background: job.color }}>
                {job.logo}
              </div>
              <div>
                <div className="exp-role">{job.role}</div>
                <div className="exp-company">{job.company}</div>
                <div className="exp-meta">
                  <span className="exp-meta-item">📅 {job.period}</span>
                  <span className="exp-meta-item">📍 {job.location}</span>
                </div>
                <ul className="exp-highlights">
                  {job.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
