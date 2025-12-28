import MinimalHero from '../components/home/MinimalHero'
import MinimalProjects from '../components/home/MinimalProjects'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <MinimalHero />
      <MinimalProjects />
    </div>
  )
}

export default Home
