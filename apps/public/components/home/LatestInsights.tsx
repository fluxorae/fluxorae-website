import Link from 'next/link'

const contentCards = [
  {
    type: 'AI Thought Leadership',
    title: 'Designing enterprise copilots that share responsibility, not just automation.',
    description: 'Framework for co-pilot governance, KPIs, and iteration cadences.',
    href: '/insights#thought-leadership',
  },
  {
    type: 'How-to Guide',
    title: 'Roadmap for integrating AI agents into customer support workflows.',
    description: 'Checklist, success metrics, and security guardrails for deployment.',
    href: '/insights#how-to',
  },
  {
    type: 'Whitepaper',
    title: 'Modernizing legacy systems with AI-powered dashboards.',
    description: 'Playbook for data contracts, observability, and adoption.',
    href: '/insights#whitepapers',
  },
]

export default function LatestInsights() {
  return (
    <section className="section-padding bg-primary-dark/40 border-t border-white/10">
      <div className="container-custom">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.5em] text-gray-400 mb-2">Latest insights</p>
          <h2 className="heading-2 text-white">Data-backed thought leadership</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">Short reads across blogs, guides, and research that keep teams ahead of the AI curve.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contentCards.map((card) => (
            <article key={card.title} className="glass-panel rounded-3xl p-6 border border-white/10 h-full flex flex-col">
              <span className="text-xs uppercase tracking-[0.4em] text-accent mb-3">{card.type}</span>
              <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
              <p className="text-sm text-gray-300 flex-grow">{card.description}</p>
              <Link
                href={card.href}
                className="mt-6 inline-flex items-center gap-2 text-accent text-sm font-semibold"
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
