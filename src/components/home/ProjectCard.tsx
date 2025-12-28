import { useState } from 'react'
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
  const [isExpanded, setIsExpanded] = useState(false)

  const shortDescription = description.length > 80
    ? description.substring(0, 80) + '...'
    : description

  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    if (!target.closest('a')) {
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <Card
      className={`project-card ${isExpanded ? 'expanded' : ''}`}
      onClick={handleCardClick}
    >
      <div className="project-card-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description project-description-short">
          {shortDescription}
        </p>
        <div className="project-expanded-content">
          <p className="project-description project-description-full">
            {description}
          </p>
          <div className="project-technologies">
            {technologies.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
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
