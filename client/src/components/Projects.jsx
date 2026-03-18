import { projects } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import LaptopMockup from './LaptopMockup'
import SkyPulsePreview from './previews/SkyPulsePreview'
import ChatAppPreview from './previews/ChatAppPreview'
import StockPulsePreview from './previews/StockPulsePreview'
import NotesCLIPreview from './previews/NotesCLIPreview'

const previewMap = {
  SkyPulse: SkyPulsePreview,
  ChatApp: ChatAppPreview,
  StockPulse: StockPulsePreview,
  NotesCLI: NotesCLIPreview,
}

export default function Projects() {
  const ref = useScrollAnimation()

  return (
    <section className="section section-alt" id="projects" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div className="section-label fade-up">Projects</div>
          <h2 className="section-title fade-up delay-1">Things I've built</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => {
            const Preview = previewMap[project.preview]
            return (
              <div
                key={project.id}
                className={`project-card fade-up delay-${i + 1}`}
                style={{ '--accent': project.accentColor }}
              >
                {/* Laptop mockup header */}
                <div className="project-card-header">
                  <LaptopMockup>
                    {project.video
                      ? <video autoPlay loop muted playsInline
                          src={project.video}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                      : project.screenshot
                        ? <img src={project.screenshot} alt={`${project.name} screenshot`}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                        : Preview
                          ? <Preview />
                          : <div style={{ background: project.gradient, width: '100%', height: '100%',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontSize: '3rem' }}>{project.icon}</div>
                    }
                  </LaptopMockup>
                </div>

                {/* Body */}
                <div className="project-card-body">
                  <div>
                    <div className="project-name">{project.name}</div>
                    <div className="project-subtitle">{project.subtitle}</div>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map(t => (
                      <span key={t} className="tech-pill">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
