import { AnimatedText } from "./AnimatedText"

export const SectionTitle = ({ title }: { title: string }) => {
  return <AnimatedText
            as="span"
            animation="fade-in"
            className="text-sm text-text-secondary opacity-70"
          >
            {title}
  </AnimatedText>
}
