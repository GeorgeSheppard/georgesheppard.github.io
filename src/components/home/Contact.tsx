import { useState } from "react";
import { SOCIAL_LINKS } from "../../utils/constants";
import { Section } from "../common/Section";

export const Contact = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const getCopyableValue = (url: string): string | null => {
    if (url.startsWith("mailto:")) {
      return url.replace("mailto:", "");
    }
    if (url.startsWith("tel:")) {
      return url.replace("tel:", "");
    }
    return null;
  };

  const handleCopy = (e: React.MouseEvent, value: string, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(value);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <Section title="contact">
      <div className="flex flex-col gap-3">
        {SOCIAL_LINKS.map((link) => {
          const copyableValue = getCopyableValue(link.url);
          const isCopied = copiedId === link.name;

          return (
            <div key={link.name} className="flex items-center gap-2 group">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-md text-text-primary font-light tracking-tight relative inline-block w-fit"
              >
                {link.name}
                <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-text-primary transition-all duration-500 ease-out group-hover:w-full" />
              </a>
              {copyableValue && (
                <button
                  onClick={(e) => handleCopy(e, copyableValue, link.name)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-text-secondary hover:text-text-primary"
                  title={isCopied ? "Copied!" : `Copy ${link.name.toLowerCase()}`}
                >
                  {isCopied ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  )}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
};
