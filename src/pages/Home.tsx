import { AnimatedText } from "../components/common/AnimatedText"
import { Section } from "../components/common/Section"
import { Contact } from "../components/home/Contact"
import { Hero } from "../components/home/Hero"
import { Projects } from '../components/home/Projects'

function Home() {
  return (
    <div className="w-full">
      <Section title="">
        <AnimatedText
          as="h1"
          animation="fade-in"
          className="text-2xl lg:text-3xl text-text-primary mb-2 font-light tracking-tight"
        >
          hi
        </AnimatedText>
      </Section>
      <Hero />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
