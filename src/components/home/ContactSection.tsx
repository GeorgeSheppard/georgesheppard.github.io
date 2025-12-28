import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { SOCIAL_LINKS, PERSONAL_INFO } from '../../utils/constants'
import './ContactSection.css'

function ContactSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section className="contact-section" ref={ref as any}>
      <div className="container-narrow">
        <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'animate-on-scroll'}`}>
          Get In Touch
        </h2>
        <p className={`contact-intro ${isVisible ? 'animate-fade-in-up' : 'animate-on-scroll'} stagger-1`}>
          I'm always open to discussing new opportunities, interesting projects, or potential collaborations.
          Feel free to reach out!
        </p>
        <div className={`contact-links ${isVisible ? 'animate-fade-in-up' : 'animate-on-scroll'} stagger-2`}>
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link hover-lift"
            >
              <span className="contact-link-name">{link.name}</span>
              <span className="contact-link-arrow">→</span>
            </a>
          ))}
        </div>
        <div className={`contact-email ${isVisible ? 'animate-fade-in-up' : 'animate-on-scroll'} stagger-3`}>
          <p className="contact-email-label">Or email me directly at:</p>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="email-link animated-link">
            {PERSONAL_INFO.email}
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
