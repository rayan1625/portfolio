import { BrainCircuit, Code2, Monitor, Server, TrendingUp, Wrench } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const skillGroups = [
  { title: 'Languages', icon: Code2, skills: ['JavaScript', 'Python', 'Java', 'PHP'] },
  { title: 'Frontend', icon: Monitor, skills: ['React', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  { title: 'Backend & Frameworks', icon: Server, skills: ['Laravel', 'Node.js'] },
  { title: 'Machine Learning', icon: BrainCircuit, skills: ['Scikit-learn', 'K-Means Clustering', 'PCA', 'Pandas'] },
  { title: 'Tools & Platforms', icon: Wrench, skills: ['Git & GitHub', 'VS Code', 'WordPress', 'Shopify'] },
  { title: 'SEO & Digital Marketing', icon: TrendingUp, skills: ['SEO Strategy', 'Keyword Research', 'On-Page SEO', 'Google PageSpeed Insights', 'WordPress/Shopify SEO'] },
]

function Skills() {
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
    <section id="skills" ref={sectionRef} className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-4">
          <h2 className="shrink-0 text-2xl font-bold text-textPrimary sm:text-3xl">
            <span className="mr-2 font-mono text-base font-normal text-accent sm:text-lg">02.</span>
            Skills
          </h2>
          <span className="h-px w-full max-w-xs bg-textSecondary/30" aria-hidden="true" />
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ title, icon: Icon, skills }, index) => (
            <article
              key={title}
              className={`rounded-lg border border-accent/20 bg-navyLight p-6 transition-all duration-700 hover:border-accent ${
                isVisible ? 'animate-fade-in-up' : 'translate-y-4 opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3">
                <Icon className="text-accent" size={21} strokeWidth={1.8} />
                <h3 className="font-semibold text-textPrimary">{title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-navy px-3 py-1.5 text-sm text-textSecondary">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills