const quickFacts = [
  {
    label: 'Education',
    value: 'BS Software Engineering, COMSATS University Islamabad (Vehari Campus)',
  },
  {
    label: 'Focus',
    value: 'Full-Stack Development & Machine Learning',
  },
  {
    label: 'Currently',
    value: 'Final Year Project: SmartCart (ML-based customer segmentation)',
  },
  {
    label: 'Runs',
    value: 'DigiCrazeTech (digital agency)',
  },
  {
    label: 'SEO',
    value: 'toolaifree.com (keyword research & optimization)',
  },
]

function SectionHeading({ number, title }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="shrink-0 text-2xl font-bold text-textPrimary sm:text-3xl">
        <span className="mr-2 font-mono text-base font-normal text-accent sm:text-lg">{number}.</span>
        {title}
      </h2>
      <span className="h-px w-full max-w-xs bg-textSecondary/30" aria-hidden="true" />
    </div>
  )
}

function About() {
  return (
    <section id="about" className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading number="01" title="About Me" />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div className="space-y-5 text-base leading-8 text-textSecondary sm:text-lg">
            <p>
              I&apos;m a Software Engineering student at COMSATS University Islamabad, Vehari Campus, who enjoys turning ideas into full-stack web applications and e-commerce platforms. I care about building products that are practical, thoughtful, and easy to use.
            </p>
            <p>
              Alongside my studies, I run DigiCrazeTech, a digital agency offering web development, SEO, and design services. I also own toolaifree.com, an AI tools discovery website that helps people find useful tools for their work.
            </p>
            <p>
              My final year project is SmartCart, a customer segmentation system built with unsupervised machine learning. It combines K-Means, Hierarchical Clustering, PCA, and RFM scoring to turn customer data into actionable insights.
            </p>
          </div>

          <div className="rounded-lg border border-accent/20 bg-navyLight p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-textPrimary">Quick Facts</h3>
            <dl className="mt-6 space-y-5">
              {quickFacts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-mono text-xs uppercase tracking-wider text-accent">{fact.label}</dt>
                  <dd className="mt-1 text-sm leading-6 text-textSecondary">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About