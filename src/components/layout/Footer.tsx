import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            &copy; {currentYear} George Sheppard. All rights reserved.
          </p>
          <div className="social-links">
            {/* Social links will be populated from constants in Phase 3 */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link animated-link"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link animated-link"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
