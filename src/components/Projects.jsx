import { ShoppingCart, Sparkles } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'TechZone',
    icon: ShoppingCart,
    tags: ['Laravel', 'PHP', 'MySQL', 'Blade'],
    description: 'A full-featured e-commerce platform built with Laravel 12 — product catalog, cart, and order management — developed as a group project.',
    githubLink: null,
    liveLink: null,
  },
  {
    title: 'toolaifree.com',
    icon: Sparkles,
    tags: ['SEO', 'Keyword Research', 'On-Page SEO', 'Content Strategy'],
    description: 'A discovery platform for free AI tools. Rayan owns the site and drives its growth through SEO — keyword research, on-page optimization, and content strategy — rather than having built it himself.',
    githubLink: null,
    liveLink: 'https://toolaifree.com',
  },
]

function Projects() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-4">
          <h2 className="shrink-0 text-2xl font-bold text-textPrimary sm:text-3xl">
            <span className="mr-2 font-mono text-base font-normal text-accent sm:text-lg">03.</span>
            Projects
          </h2>
          <span className="h-px w-full max-w-xs bg-textSecondary/30" aria-hidden="true" />
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={isVisible ? 'animate-fade-in-up' : 'translate-y-4 opacity-0'}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects