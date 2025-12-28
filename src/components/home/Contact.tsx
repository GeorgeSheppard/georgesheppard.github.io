import { SOCIAL_LINKS } from "../../utils/constants";
import { Section } from "../common/Section";

export const Contact = () => {
  return (
    <Section title="contact">
      <div className="flex flex-col gap-3">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-md text-text-primary font-light tracking-tight relative inline-block w-fit group"
          >
            {link.name}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-text-primary transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>
    </Section>
  );
};
