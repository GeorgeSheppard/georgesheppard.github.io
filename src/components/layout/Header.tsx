import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-bg-primary py-8">
      <div className="max-w-7xl mx-auto px-8">
        <nav className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            GS
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
