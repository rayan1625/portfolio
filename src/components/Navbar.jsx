import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

const navItems = [
  { label: 'About', target: 'about' },
  { label: 'Skills', target: 'skills' },
  { label: 'Projects', target: 'projects' },
  { label: 'Contact', target: 'contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 50)

    handleScroll()
    window.addEventListener('scroll', handleScroll)

     const observer = new IntersectionObserver(
       (entries) => {
         const visibleSection = entries.find((entry) => entry.isIntersecting)
         if (visibleSection) setActiveSection(visibleSection.target.id)
       },
       { rootMargin: '-20% 0px -60% 0px', threshold: 0 },
     )

     navItems.forEach((item) => {
       const section = document.getElementById(item.target)
       if (section) observer.observe(section)
     })

     return () => {
       window.removeEventListener('scroll', handleScroll)
       observer.disconnect()
     }
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-textSecondary/20 bg-navy/90 backdrop-blur-md transition-shadow duration-300 ${
        hasScrolled ? 'shadow-lg shadow-black/20' : ''
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Main navigation">
        <Link to="hero" smooth duration={500} className="flex cursor-pointer items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center border border-accent text-sm font-semibold tracking-widest text-accent">
            RS
          </span>
          <span className="hidden text-sm font-medium tracking-wide text-textPrimary sm:inline">Rayan Shahbaz</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.target}
              to={item.target}
              smooth
              offset={-70}
              duration={500}
              className={`group relative cursor-pointer py-2 text-sm transition-colors hover:text-accent ${
                activeSection === item.target ? 'text-accent' : 'text-textSecondary'
              }`}
            >
              {item.label}
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          className="z-50 text-textPrimary transition-colors hover:text-accent md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <div
          className={`fixed inset-0 top-20 flex flex-col items-center justify-center gap-8 bg-navy transition-transform duration-300 md:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.target}
              to={item.target}
              smooth
              offset={-70}
              duration={500}
              onClick={closeMenu}
              className={`cursor-pointer text-xl transition-colors hover:text-accent ${
                activeSection === item.target ? 'text-accent' : 'text-textSecondary'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar