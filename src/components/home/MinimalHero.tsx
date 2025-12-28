import AnimatedText from '../common/AnimatedText'
import { PERSONAL_INFO } from '../../utils/constants'
import './MinimalHero.css'

function MinimalHero() {
  return (
    <section className="minimal-hero">
      <div className="container">
        <AnimatedText as="h1" animation="fade-in" className="minimal-hero-name">
          Hi
        </AnimatedText>
        <div className="hero-bio-container">
          <AnimatedText as="span" animation="fade-in" className="minimal-hero-bio">
            Bio
          </AnimatedText>
          <AnimatedText as="p" animation="fade-in" delay={1} className="minimal-hero-title">
            {PERSONAL_INFO.bio}
          </AnimatedText>
        </div>
      </div>
    </section>
  )
}

export default MinimalHero
