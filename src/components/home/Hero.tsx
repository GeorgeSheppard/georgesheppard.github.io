import AnimatedText from '../common/AnimatedText'
import { PERSONAL_INFO } from '../../utils/constants'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="container-narrow">
        <AnimatedText as="h1" animation="fade-in-up" className="hero-title">
          {PERSONAL_INFO.name}
        </AnimatedText>
        <AnimatedText as="p" animation="fade-in-up" delay={1} className="hero-subtitle">
          {PERSONAL_INFO.title} at {PERSONAL_INFO.company}
        </AnimatedText>
        <AnimatedText as="p" animation="fade-in-up" delay={2} className="hero-location">
          {PERSONAL_INFO.location}
        </AnimatedText>
        <div className="hero-bio">
          {PERSONAL_INFO.bio.map((paragraph, index) => (
            <AnimatedText
              key={index}
              as="p"
              animation="fade-in-up"
              delay={3 + index}
              className="hero-bio-text"
            >
              {paragraph}
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
