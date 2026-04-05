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
              <div className="exp-logo" style={{ background: job.logoImg ? '#fff' : job.color }}>
                {job.logoImg
                  ? <img src={job.logoImg} alt={job.company} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '6px' }} />
                  : job.logo}
              </div>
              <div>
                <div className="exp-role">{job.role}</div>
                <div className="exp-company">{job.company}</div>
                <div className="exp-meta">
                  <span className="exp-meta-item">
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="2" width="14" height="13" rx="2"/><path d="M1 6h14"/><path d="M5 1v2M11 1v2"/>
                    </svg>
                    {job.period}
                  </span>
                  <span className="exp-meta-item">
                    <svg width="11" height="13" viewBox="0 0 12 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 1C3.24 1 1 3.24 1 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z"/><circle cx="6" cy="6" r="1.5"/>
                    </svg>
                    {job.location}
                  </span>
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
