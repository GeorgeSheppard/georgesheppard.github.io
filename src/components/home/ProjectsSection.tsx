import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { PROJECTS } from '../../utils/constants'
import ProjectCard from './ProjectCard'
import './ProjectsSection.css'

function ProjectsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section className="projects-section" ref={ref as any}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'animate-fade-in-up' : 'animate-on-scroll'}`}>
          Projects
        </h2>
        <div className="projects-grid">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className={`project-item ${isVisible ? 'animate-fade-in-up' : 'animate-on-scroll'} stagger-${Math.min(index + 1, 6)}`}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                github={project.github}
                demo={project.demo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
