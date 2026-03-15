import { personalInfo } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand gradient-text">Sani Haseeb</div>
          <div className="footer-links">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="footer-link">
              GitHub ↗
            </a>
            <a href="https://linkedin.com/in/sani-haseeb" target="_blank" rel="noreferrer" className="footer-link">
              LinkedIn ↗
            </a>
            <a href={`mailto:${personalInfo.email}`} className="footer-link">
              Email ↗
            </a>
          </div>
        </div>
        <div className="footer-copy">
          © {new Date().getFullYear()} Sani Haseeb · Built with React & Node.js
        </div>
      </div>
    </footer>
  )
}
