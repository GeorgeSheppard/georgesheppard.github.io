import './AnimatedLogo.css'

export function AnimatedLogo() {
  return (
    <div className="animated-logo-container">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Column 1 */}
        <rect className="cube col-1" x="2" y="22" width="4" height="4" fill="#555555"/>

        {/* Column 2 */}
        <rect className="cube col-2" x="7" y="22" width="4" height="4" fill="#555555"/>
        <rect className="cube col-2" x="7" y="17" width="4" height="4" fill="#777777"/>

        {/* Column 3 (center/tallest) */}
        <rect className="cube col-3" x="12" y="22" width="4" height="4" fill="#555555"/>
        <rect className="cube col-3" x="12" y="17" width="4" height="4" fill="#777777"/>
        <rect className="cube col-3" x="12" y="12" width="4" height="4" fill="#999999"/>
        <rect className="cube col-3" x="12" y="7" width="4" height="4" fill="#BBBBBB"/>
        <rect className="cube col-3" x="12" y="2" width="4" height="4" fill="#FFFFFF"/>

        {/* Column 4 */}
        <rect className="cube col-4" x="17" y="22" width="4" height="4" fill="#555555"/>
        <rect className="cube col-4" x="17" y="17" width="4" height="4" fill="#777777"/>
        <rect className="cube col-4" x="17" y="12" width="4" height="4" fill="#999999"/>

        {/* Column 5 */}
        <rect className="cube col-5" x="22" y="22" width="4" height="4" fill="#555555"/>
      </svg>
    </div>
  )
}
