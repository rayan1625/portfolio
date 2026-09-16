import { Camera, GitBranch, Mail } from 'lucide-react'
import { Link } from 'react-scroll'
import profileImage from '../assets/profile.jpeg'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/rayan1625', icon: GitBranch },
  { label: 'Instagram', href: 'https://www.instagram.com/heyrayan._', icon: Camera },
  { label: 'Email', href: 'mailto:rayanshahbaz573@gmail.com', icon: Mail },
]

function Hero() {
  return (
    <section id="hero" className="flex min-h-screen items-center px-6 pb-16 pt-32 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div className="order-2 max-w-3xl lg:order-1">
          <p className="animate-fade-in-up text-sm font-medium tracking-[0.2em] text-accent [animation-delay:100ms] sm:text-base">
            Hi, my name is
          </p>
          <h1 className="animate-fade-in-up mt-4 text-4xl font-bold leading-tight text-textPrimary [animation-delay:200ms] sm:text-6xl lg:text-7xl">
            Rayan Shahbaz
          </h1>
          <h2 className="animate-fade-in-up mt-3 text-2xl font-semibold leading-tight text-textSecondary [animation-delay:300ms] sm:text-4xl lg:text-5xl">
            I build things for the web.
          </h2>
          <p className="animate-fade-in-up mt-7 max-w-xl text-base leading-8 text-textSecondary [animation-delay:400ms] sm:text-lg">
            I&apos;m a Software Engineering student at COMSATS University Islamabad, Vehari Campus. I build full-stack web applications and e-commerce solutions, with interests in React, Laravel, and machine learning.
          </p>

          <div className="animate-fade-in-up mt-9 flex flex-wrap gap-4 [animation-delay:500ms]">
            <Link
              to="projects"
              smooth
              offset={-70}
              duration={500}
              className="cursor-pointer border border-accent px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              smooth
              offset={-70}
              duration={500}
              className="cursor-pointer bg-accent px-6 py-3 text-sm font-medium text-navy transition-colors hover:bg-accent/80"
            >
              Get In Touch
            </Link>
          </div>

          <div className="animate-fade-in-up mt-9 flex items-center gap-5 [animation-delay:600ms]">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
                className="text-textSecondary transition-all duration-200 hover:-translate-y-1 hover:text-accent"
              >
                <Icon size={21} strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative w-56 sm:w-72 lg:w-[26rem]">
            <div className="absolute -bottom-4 -right-4 h-full w-full border-2 border-accent" aria-hidden="true" />
            <img
              src={profileImage}
              alt="Rayan Shahbaz"
              className="relative aspect-square w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero