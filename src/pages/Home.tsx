import Hero from '../components/home/Hero'
import ProjectsSection from '../components/home/ProjectsSection'
import SkillsSection from '../components/home/SkillsSection'
import ContactSection from '../components/home/ContactSection'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <Hero />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  )
}

export default Home
