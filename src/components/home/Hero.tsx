import AnimatedText from "../common/AnimatedText";
import { PERSONAL_INFO } from "../../utils/constants";
import { Section } from "../common/Section";

export function Hero() {
  return (
      <Section title="bio">
        <AnimatedText
          as="p"
          animation="fade-in"
          delay={1}
          className="text-md text-text-primary font-light"
        >
          {PERSONAL_INFO.bio}
        </AnimatedText>
      </Section>
  );
}
