import Link from 'next/link'

const industries = [
  {
    title: 'Healthcare',
    description: 'AI diagnostics, patient analytics, and medical imaging insights that respect HIPAA & FDA guardrails.',
    highlights: ['Realtime patient analytics', 'Medical imaging overlays + automation', 'AI ops for care teams'],
    href: '/industries#healthcare',
  },
  {
    title: 'Banking & Finance',
    description: 'Fraud detection, credit scoring, and risk/compliance automation with audit-ready trails.',
    highlights: ['Adaptive fraud detectors', 'Underwriting automation', 'Regulatory-ready governance'],
    href: '/industries#finance',
  },
  {
    title: 'E-Commerce & Retail',
    description: 'Personalization, demand forecasting, and inventory intelligence for omnichannel commerce.',
    highlights: ['Personalized journeys', 'Demand & inventory forecasting', 'AI-assisted merchandising'],
    href: '/industries#retail',
  },
  {
    title: 'Manufacturing',
    description: 'Predictive maintenance, quality control, and ML-driven supply chains optimized for uptime.',
    highlights: ['Predictive maintenance', 'ML-driven quality control', 'Supply chain automation'],
    href: '/industries#manufacturing',
  },
  {
    title: 'Logistics & Supply Chain',
    description: 'Route optimization, warehouse automation, and AI agents orchestrating fulfillment.',
    highlights: ['Smart routing + scheduling', 'Warehouse automation', 'Live fulfillment insights'],
    href: '/industries#logistics',
  },
  {
    title: 'Education',
    description: 'Adaptive learning, performance analytics, and student support bots for better outcomes.',
    highlights: ['Adaptive curriculum engines', 'Student performance analytics', 'Conversational support bots'],
    href: '/industries#education',
  },
  {
    title: 'Real Estate',
    description: 'AI pricing, CRM intelligence, and smart workflows that keep deals moving.',
    highlights: ['Price prediction', 'Smart CRM workflows', 'Valuation dashboards'],
    href: '/industries#real-estate',
  },
  {
    title: 'SaaS & Startups',
    description: 'AI feature integration, growth analytics, and launch-ready MVP accelerators.',
    highlights: ['Embedded AI copilots', 'Growth telemetry + dashboards', 'Rapid MVP launches'],
    href: '/industries#saas',
  },
]

export default function IndustryExpertise() {
  return (
    <section className="section-padding bg-primary-dark/30 border-t border-white/10">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.5em] text-gray-400 mb-2">Industry leadership</p>
          <h2 className="heading-2 text-white">Built for the industries that move the world</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Every engagement references vertical best practices, compliance guardrails, and proven stack choices tailored to the challenge.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {industries.map((industry) => (
            <article key={industry.title} className="glass-panel rounded-3xl border border-white/10 p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold">{industry.title}</h3>
                <Link href={industry.href} className="text-xs uppercase tracking-[0.4em] text-accent font-semibold">
                  View industry
                </Link>
              </div>
              <p className="text-gray-300 mb-4">{industry.description}</p>
              <ul className="space-y-2 text-sm text-gray-200">
                {industry.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent inline-flex" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
