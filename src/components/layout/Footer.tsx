import { PERSONAL_INFO } from '../../utils/constants'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <p className="text-text-secondary text-xs font-light">
            {currentYear} {PERSONAL_INFO.name}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
