import { skills } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Skills() {
  const ref = useScrollAnimation()

  return (
    <section className="section" id="skills" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="section-label fade-up">Skills</div>
          <h2 className="section-title fade-up delay-1">Technologies I work with</h2>
        </div>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <div key={group.category} className={`skill-card fade-up delay-${(i % 4) + 1}`}>
              <div className="skill-card-header">
                <span className="skill-icon">{group.icon}</span>
                <span className="skill-category">{group.category}</span>
              </div>
              <div className="skill-items">
                {group.items.map(item => (
                  <span key={item} className="tech-pill">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
