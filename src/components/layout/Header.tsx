import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header animate-fade-in-down">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo animated-link">
            GS
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link animated-link">
                Home
              </Link>
            </li>
            {/* Dissertation link will be added later */}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
