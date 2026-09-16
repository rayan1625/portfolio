import { Camera, GitBranch, Mail, Phone } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/rayan1625', icon: GitBranch },
  { label: 'Instagram', href: 'https://www.instagram.com/heyrayan._', icon: Camera },
]

function Contact() {
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
      { threshold: 0.2 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="px-6 py-24 lg:px-8 lg:py-32">
      <div className={`mx-auto max-w-2xl text-center ${isVisible ? 'animate-fade-in-up' : 'translate-y-4 opacity-0'}`}>
        <div className="flex items-center gap-4">
          <span className="h-px w-full bg-textSecondary/30" aria-hidden="true" />
          <h2 className="shrink-0 text-2xl font-bold text-textPrimary sm:text-3xl">
            <span className="mr-2 font-mono text-base font-normal text-accent sm:text-lg">04.</span>
            Get In Touch
          </h2>
          <span className="h-px w-full bg-textSecondary/30" aria-hidden="true" />
        </div>

        <h3 className="mt-12 text-3xl font-bold text-textPrimary sm:text-5xl">Let&apos;s Build Something Together</h3>
        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-textSecondary sm:text-lg">
          I&apos;m currently open to internships, freelance web and e-commerce projects, and collaboration opportunities. Have an idea in mind? I&apos;d love to hear from you.
        </p>

        <a
          href="mailto:rayanshahbaz573@gmail.com"
          aria-label="Send Rayan an email"
          className="mt-9 inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 font-medium text-navy transition-all duration-200 hover:-translate-y-1 hover:scale-105 hover:bg-accent/90"
        >
          <Mail size={19} />
          Say Hello
        </a>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-textSecondary">
          <a href="tel:+923270671697" aria-label="Call Rayan at +92 327 0671697" className="flex items-center gap-2 transition-colors hover:text-accent">
            <Phone size={17} />
            <span>+92 327 0671697</span>
          </a>
          <div className="flex items-center gap-5">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-textSecondary transition-all duration-200 hover:-translate-y-1 hover:text-accent"
              >
                <Icon size={20} strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact