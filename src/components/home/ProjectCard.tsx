import Card from '../common/Card'
import './ProjectCard.css'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
}

function ProjectCard({ title, description, technologies, github, demo }: ProjectCardProps) {
  return (
    <Card className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-technologies">
        {technologies.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
      {(github || demo) && (
        <div className="project-links">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link animated-link"
            >
              View Code →
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link animated-link"
            >
              Live Demo →
            </a>
          )}
        </div>
      )}
    </Card>
  )
}

export default ProjectCard
