import { PROJECTS } from "../../utils/constants";
import { Section } from "../common/Section";

export function Projects() {
  return (
    <Section title="projects">
      <div className="flex flex-col gap-3">
        {PROJECTS.map((project) => (
          <a
            key={project.id}
            href={project.github || project.demo || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-baseline gap-3 group no-underline"
          >
            <span className="index text-md text-text-secondary opacity-50 transition-opacity duration-500 group-hover:opacity-100">
              {project.year}
            </span>
            <span className="title text-md text-text-primary font-light tracking-tight relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-[2.5rem] after:bg-text-secondary after:-translate-x-[calc(2.5rem+0.75rem)] after:transition-all after:duration-500 after:ease-out group-hover:after:translate-x-0 group-hover:after:w-full group-hover:after:bg-text-primary">
              {project.title}
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
