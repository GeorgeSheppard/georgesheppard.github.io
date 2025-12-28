import { useEffect, useRef } from "react";
import { PERSONAL_INFO } from "../../utils/constants";
import { Section } from "../common/Section";

const CHARS = '!<>-_\\/[]{}—=+*^?#________--------';

export function Hero() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const text = PERSONAL_INFO.bio[0];

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    const showPower = 0.25; // how fast new characters appear (lower = faster expansion)
    const mashPower = 1.5; // how much scrambling (higher = more scrambling)
    const donePower = 13; // when to settle (higher = settles sooner)
    const speed = 30; // ms between updates
    let frame = 0;

    // Generate random settle times for each character
    const settleFrames = text.split('').map((_, index) => {
      const baseFrame = Math.pow(index / text.length, 1 / showPower) * 100;
      const randomOffset = (Math.random() - 0.3) * mashPower * 20;
      return Math.max(0, baseFrame + randomOffset);
    });

    const animate = () => {
      // Characters revealed so far (exponential growth)
      const revealProgress = Math.pow(frame / 100, showPower);
      const currentLength = Math.min(Math.floor(revealProgress * text.length), text.length);

      element.textContent = text
        .slice(0, currentLength)
        .split('')
        .map((_, index) => {
          // Check if this character has reached its settle time
          if (frame > settleFrames[index] + donePower) {
            return text[index];
          }
          // Show random character
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join('');

      frame++;

      if (currentLength < text.length || element.textContent !== text) {
        setTimeout(animate, speed);
      } else {
        element.textContent = text;
      }
    };

    animate();
  }, [text]);

  return (
      <Section title="bio">
        <p
          ref={textRef}
          className="text-md text-text-primary font-light"
        >
          {text}
        </p>
      </Section>
  );
}
