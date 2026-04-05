import { projects } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import MacbookMockup from './MacbookMockup'
import ScreenCarousel from './ScreenCarousel'
import SkyPulsePreview from './previews/SkyPulsePreview'
import ChatAppPreview from './previews/ChatAppPreview'
import StockPulsePreview from './previews/StockPulsePreview'
import NotesCLIPreview from './previews/NotesCLIPreview'

function TechPills({ tech, max = 5 }) {
  const visible = tech.slice(0, max)
  const overflow = tech.length - max
  return (
    <div className="project-tech">
      {visible.map(t => <span key={t} className="tech-pill">{t}</span>)}
      {overflow > 0 && <span className="tech-pill tech-pill--more">+{overflow}</span>}
    </div>
  )
}

const previewMap = {
  SkyPulse: SkyPulsePreview,
  ChatApp: ChatAppPreview,
  StockPulse: StockPulsePreview,
  NotesCLI: NotesCLIPreview,
}

function ProjectScreen({ project }) {
  if (project.screenshots?.length) {
    return <ScreenCarousel slides={project.screenshots} />
  }
  if (project.video) {
    return (
      <video autoPlay loop muted playsInline
        src={project.video}
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
    )
  }
  if (project.screenshot) {
    return (
      <img src={project.screenshot} alt={`${project.name} screenshot`}
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
    )
  }
  const Preview = previewMap[project.preview]
  if (Preview) return <Preview />
  return (
    <div style={{
      background: project.gradient, width: '100%', height: '100%',
      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem',
    }}>{project.icon}</div>
  )
}

export default function Projects() {
  const ref = useScrollAnimation()

  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section className="section section-alt" id="projects" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="section-label fade-up">Projects</div>
          <h2 className="section-title fade-up delay-1">Things I've built</h2>
        </div>

        {/* Featured projects — full width */}
        {featured.map((project, i) => (
          <div
            key={project.id}
            className={`project-card project-card--featured fade-up delay-${i + 1}`}
            style={{ '--accent': project.accentColor }}
          >
            <div className="project-featured-inner">
              {/* Screen */}
              <div className="project-featured-screen">
                <MacbookMockup>
                  <ProjectScreen project={project} />
                </MacbookMockup>
              </div>

              {/* Info */}
              <div className="project-featured-info">
                <div>
                  <div className="project-name">{project.name}</div>
                  <div className="project-subtitle">{project.subtitle}</div>
                </div>
                <p className="project-description">{project.description}</p>

                {project.highlights && (
                  <ul className="project-highlights">
                    {project.highlights.map(h => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}

                <TechPills tech={project.tech} max={8} />

                <div className="project-card-footer" style={{ padding: 0 }}>
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="project-link">
                      ↗ Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Regular grid */}
        <div className="projects-grid">
          {rest.map((project, i) => (
            <div
              key={project.id}
              className={`project-card fade-up delay-${i + 2}`}
              style={{ '--accent': project.accentColor }}
            >
              <div className="project-card-header">
                <MacbookMockup>
                  <ProjectScreen project={project} />
                </MacbookMockup>
              </div>

              <div className="project-card-body">
                <div>
                  <div className="project-name">{project.name}</div>
                  <div className="project-subtitle">{project.subtitle}</div>
                </div>
                <p className="project-description">{project.description}</p>

                {project.highlights && (
                  <ul className="project-highlights">
                    {project.highlights.map(h => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}

                <TechPills tech={project.tech} max={7} />
              </div>

              <div className="project-card-footer">
                <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="project-link">
                    ↗ Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
