import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { SKILLS } from '../../utils/constants'
import './SkillsSection.css'

function SkillsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section className="skills-section" ref={ref as any}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'animate-on-scroll'}`}>
          Skills & Technologies
        </h2>
        <div className="skills-grid">
          {Object.entries(SKILLS).map(([category, skills], categoryIndex) => (
            <div
              key={category}
              className={`skill-category ${isVisible ? 'animate-fade-in-up' : 'animate-on-scroll'} stagger-${Math.min(categoryIndex + 1, 6)}`}
            >
              <h3 className="skill-category-title">{category}</h3>
              <div className="skill-tags">
                {skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
