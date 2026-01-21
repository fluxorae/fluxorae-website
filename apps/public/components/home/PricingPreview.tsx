type Plan = {
  name: string
  price: string
  bestFor: string
  features: string[]
  cta: { text: string; href: string }
}

const plans: Plan[] = [
  {
    name: 'Starter',
    price: '₹35,000+',
    bestFor: 'Landing pages, rapid launches',
    features: [
      '1-2 core pages (home/offer)',
      'Conversion-focused hero & CTA',
      'SEO-ready metadata & schema',
      'Performance-optimized build',
      'Contact + WhatsApp capture',
      'Analytics & basic events',
    ],
    cta: { text: 'Get quote', href: '/pricing#starter' },
  },
  {
    name: 'Growth',
    price: '₹65,000+',
    bestFor: 'Service sites & lead gen',
    features: [
      '5-8 pages (services, about, contact)',
      'Mega menu + sticky CTAs',
      'Case study & blog templates',
      'Advanced on-page SEO',
      'Form validation + handoff',
      'Performance budget & QA',
    ],
    cta: { text: 'View details', href: '/pricing#growth' },
  },
  {
    name: 'Pro',
    price: '₹95,000+',
    bestFor: 'Productized & multi-service',
    features: [
      '10-15 pages + pricing',
      'Component library & tokens',
      'CMS-ready layouts (optional)',
      'A/B-ready hero/CTA variants',
      'Accessibility & schema depth',
      'Ongoing CRO recommendations',
    ],
    cta: { text: 'Book a call', href: '/pricing#pro' },
  },
]

export default function PricingPreview() {
  return (
    <section className="section-padding bg-primary-dark/30">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-widest">Pricing preview</p>
            <h2 className="heading-2">Packages designed for fast outcomes</h2>
            <p className="text-secondary/80 max-w-2xl">
              Transparent tiers for launch, growth, and enterprise-grade builds. Every plan includes performance, SEO basics,
              and lead-ready CTAs.
            </p>
          </div>
          <a
            href="/pricing"
            className="btn-primary whitespace-nowrap bg-gradient-to-r from-accent to-electric-soft text-primary-dark px-6 py-3 rounded-full font-semibold shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
          >
            View full pricing
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="glass-panel rounded-2xl p-6 border border-white/10 flex flex-col gap-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-white text-xl font-semibold">{plan.name}</h3>
                <span className="text-accent font-bold">{plan.price}</span>
              </div>
              <p className="text-secondary/80 text-sm">{plan.bestFor}</p>
              <ul className="space-y-2 text-secondary/90 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={plan.cta.href}
                className="mt-auto inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/10 text-white font-semibold hover:bg-white/15 transition"
              >
                {plan.cta.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
