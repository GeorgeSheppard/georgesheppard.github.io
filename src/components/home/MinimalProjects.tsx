import { useState } from 'react'
import { PROJECTS } from '../../utils/constants'
import './MinimalProjects.css'

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
}

function MinimalProjects() {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleProjectClick = (project: Project) => {
    // On mobile, toggle selection
    if (selectedProject?.id === project.id) {
      setSelectedProject(null)
    } else {
      setSelectedProject(project)
    }
  }

  const displayedProject = selectedProject || hoveredProject

  return (
    <div className="minimal-projects">
      <div className="projects-list">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className={`project-item ${displayedProject?.id === project.id ? 'active' : ''}`}
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
            onClick={() => handleProjectClick(project)}
          >
            <span className="project-name">{project.title}</span>
          </div>
        ))}
      </div>

      <div className="project-preview">
        {displayedProject && (
          <div className="preview-content">
            <h3 className="preview-title">{displayedProject.title}</h3>
            <p className="preview-description">{displayedProject.description}</p>
            <div className="preview-technologies">
              {displayedProject.technologies.map((tech) => (
                <span key={tech} className="preview-tech">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MinimalProjects
