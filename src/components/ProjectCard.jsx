import { BarChart3, Briefcase, ExternalLink, GitBranch, ShoppingCart, Sparkles } from 'lucide-react'

const iconMap = { BarChart3, Briefcase, ShoppingCart, Sparkles }

function ProjectCard({ title, description, tags, githubLink, liveLink, icon }) {
  const Icon = typeof icon === 'string' ? iconMap[icon] : icon

  return (
    <article className="group rounded-lg border border-accent/20 bg-navyLight p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent sm:p-6">
      <div className="flex aspect-video items-center justify-center rounded-md bg-gradient-to-br from-navy to-accent/10">
        {Icon && <Icon className="text-accent/60 transition-colors duration-300 group-hover:text-accent" size={64} strokeWidth={1.2} />}
      </div>

      <h3 className="mt-6 text-xl font-bold text-textPrimary">{title}</h3>
      <p className="mt-3 min-h-[4.5rem] text-sm leading-7 text-textSecondary">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-navy px-3 py-1 text-xs text-accent">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4 border-t border-textSecondary/10 pt-4">
        {githubLink ? (
          <a
            href={githubLink}
            aria-label={`${title} GitHub repository`}
            title="View repository"
            target="_blank"
            rel="noreferrer"
            className="text-textSecondary transition-colors hover:text-accent"
          >
            <GitBranch size={19} />
          </a>
        ) : null}
        {liveLink ? (
          <a
            href={liveLink}
            aria-label={`${title} live project`}
            title="View live project"
            target="_blank"
            rel="noreferrer"
            className="text-textSecondary transition-colors hover:text-accent"
          >
            <ExternalLink size={19} />
          </a>
        ) : null}
        {!githubLink && !liveLink && (
          <span className="text-xs text-textSecondary">Academic / Private Project</span>
        )}
      </div>
    </article>
  )
}

export default ProjectCard