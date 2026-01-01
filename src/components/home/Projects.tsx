import { useState } from "react";
import { PROJECTS } from "../../utils/constants";
import { Section } from "../common/Section";

export function Projects() {
  const [expandedId, setExpandedId] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    setExpandedId(prev => {
      const curr = new Set(prev)
      if (curr.has(id)) curr.delete(id)
      else curr.add(id)
      return curr
    })
  };

  return (
    <Section title="projects">
      <div className="flex flex-col gap-3">
        {PROJECTS.map((project) => {
          const isExpanded = expandedId.has(project.id);
          return (
            <div
              key={project.id}
              className="group project-item"
              onClick={() => toggleExpanded(project.id)}
            >
              {/* Vertical layout - title and content flow naturally */}
              <div className="flex flex-col">
                {/* Title row */}
                <div className="flex items-baseline gap-3 cursor-pointer">
                  <span className="index text-md text-text-secondary opacity-50 transition-opacity duration-500 group-hover:opacity-100">
                    {project.year}
                  </span>
                  <span className="title text-md text-text-primary font-light tracking-tight relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-[2.5rem] after:bg-text-secondary after:-translate-x-[calc(2.5rem+0.75rem)] after:transition-all after:duration-500 after:ease-out group-hover:after:translate-x-0 group-hover:after:w-full group-hover:after:bg-text-primary">
                    {project.title}
                  </span>
                </div>

                {/* Expanded content - appears below title when clicked */}
                <div className={`project-details transition-all duration-300
                  ${isExpanded ? 'max-h-[800px] opacity-100 mt-3' : 'max-h-0 opacity-0'}
                  overflow-hidden
                  ml-[4.5rem]`}>
                  <p className="text-sm text-text-secondary mb-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm text-accent hover:underline font-medium"
                      >
                        View Project →
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm text-accent hover:underline font-medium"
                      >
                        View Code →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
