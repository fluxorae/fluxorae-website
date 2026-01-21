import Link from 'next/link'

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: '₹35,000+',
    bestFor: 'Landing pages, rapid launches',
    features: [
      '1-2 core pages (home/offer)',
      'Conversion-led hero and CTAs',
      'SEO-ready metadata and schema',
      'Performance budget and QA',
      'Contact + WhatsApp capture',
      'Analytics and basic events',
      'Handoff documentation',
      '2 rounds of revisions',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '₹65,000+',
    bestFor: 'Service sites and lead gen',
    features: [
      '5-8 pages (services, about, contact)',
      'Mega menu and sticky CTAs',
      'Case study + blog templates',
      'Advanced on-page SEO and FAQ',
      'Form validation and thank-you UX',
      'Performance and accessibility pass',
      'Structured data (Organization/FAQ)',
      '3 rounds of revisions',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '₹95,000+',
    bestFor: 'Multi-service + pricing forward',
    features: [
      '10-15 pages + pricing + resources',
      'Component library and tokens',
      'CMS-ready layouts (optional)',
      'A/B-ready hero/CTA variants',
      'Accessibility and schema depth',
      'CRO recommendations starter pack',
      'Launch checklist and training',
      '4 rounds of revisions',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    bestFor: 'Complex IA, multi-brand, integrations',
    features: [
      'Multi-domain or multi-brand IA',
      'Custom integrations and workflows',
      'Design system expansion',
      'Security, compliance alignment',
      'Performance SLOs and observability',
      'Migration and rollout planning',
      'Dedicated success cadence',
      'On-demand CRO/SEO sprints',
    ],
  },
]

const addOns = [
  'Copywriting for offers and services',
  'Additional case studies and landing pages',
  'Illustrations or lightweight iconography',
  'Lead routing or CRM webhooks (lightweight)',
  'Localization-ready structures',
]

const pricingFaq = [
  ['Do prices include content?', 'Core copy guidance is included; full copywriting available as an add-on.'],
  ['Can you integrate with my CRM?', 'We support lightweight webhooks/lead routing; deeper CRM work is scoped separately.'],
  ['Do you offer revisions?', 'Yes. Each tier includes multiple revision rounds as listed; enterprise is collaborative.'],
  ['How long does a build take?', 'Starter ~2 weeks, Growth ~3-4 weeks, Pro ~4-6 weeks, Enterprise is scoped.'],
  ['Is hosting included?', 'Hosting is not included; we deploy to your existing platform (Amplify/Vercel).'],
  ['Can you migrate my current site?', 'Yes, we can migrate content and URLs to preserve SEO.'],
]

export const metadata = {
  title: 'Pricing | Fluxorae Private Limited',
  description: 'Transparent packages for premium web experiences. Choose Starter, Growth, Pro, or Enterprise.',
}

export default function PricingPage() {
  return (
    <div className="bg-primary text-secondary">
      <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-primary-dark/80 border-b border-white/10">
        <div className="container-custom space-y-4">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest">Pricing</p>
          <h1 className="heading-1">Packages for launch, growth, and scale</h1>
          <p className="text-secondary/85 max-w-3xl">
            Premium, enterprise-style builds without changing your tech stack. Every plan includes performance, accessibility,
            and conversion-first UX.
          </p>
          <div className="flex flex-wrap gap-3">
            <a className="btn-primary bg-gradient-to-r from-accent to-electric-soft text-primary-dark px-6 py-3 rounded-full font-semibold shadow-[0_15px_40px_rgba(0,0,0,0.35)]" href="/contact">
              Book a call
            </a>
            <a className="btn-secondary border border-white/20 text-white px-6 py-3 rounded-full" href="https://wa.me/91XXXXXXX">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div key={plan.id} id={plan.id} className="glass-panel rounded-2xl p-6 border border-white/10 flex flex-col gap-4">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-white text-xl font-semibold">{plan.name}</h2>
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
              <div className="grid gap-2">
                <a
                  className="w-full text-center px-4 py-2 rounded-full bg-gradient-to-r from-accent to-electric-soft text-primary-dark font-semibold shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
                  href="/contact"
                >
                  Get quote
                </a>
                <a
                  className="w-full text-center px-4 py-2 rounded-full border border-white/15 text-white hover:bg-white/10 transition"
                  href="https://wa.me/91XXXXXXX"
                >
                  WhatsApp
                </a>
                <a
                  className="w-full text-center px-4 py-2 rounded-full border border-white/15 text-white hover:bg-white/10 transition"
                  href="/contact"
                >
                  Book call
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-primary-dark/40 border-t border-b border-white/10">
        <div className="container-custom grid md:grid-cols-2 gap-6">
          <div className="glass-panel rounded-2xl p-6 border border-white/10">
            <h2 className="heading-2">Add-ons</h2>
            <ul className="mt-4 space-y-2 text-secondary/90 text-sm">
              {addOns.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-panel rounded-2xl p-6 border border-white/10">
            <h2 className="heading-2">Comparison snapshot</h2>
            <p className="text-secondary/85 text-sm">
              Starter: launch fast. Growth: multi-page lead gen. Pro: pricing-forward, library + CMS ready. Enterprise: custom IA, integrations, and governance.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-secondary/85">
              <div><strong className="text-white">Performance</strong><p>All plans include performance and accessibility checks.</p></div>
              <div><strong className="text-white">SEO</strong><p>Metadata, schema, and FAQ basics included; Pro+ adds depth.</p></div>
              <div><strong className="text-white">CRO</strong><p>Sticky CTAs, forms, and hero clarity; Pro+ adds test-ready variants.</p></div>
              <div><strong className="text-white">Support</strong><p>Revisions per tier; Enterprise includes cadence and planning.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom glass-panel rounded-2xl p-6 border border-white/10">
          <h2 className="heading-2">Pricing FAQ</h2>
          <div className="divide-y divide-white/10 mt-4">
            {pricingFaq.map(([q, a]) => (
              <div key={q} className="py-3">
                <h3 className="text-white font-semibold">{q}</h3>
                <p className="text-secondary/85 text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-dark/50 border-t border-white/10">
        <div className="container-custom flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="heading-2">Ready to scope your build?</h2>
            <p className="text-secondary/80 max-w-2xl">Share your goals. We’ll map you to the right package and timeline.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="bg-gradient-to-r from-accent to-electric-soft text-primary-dark font-semibold px-6 py-3 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.35)]" href="/contact">
              Contact Fluxorae
            </a>
            <a className="border border-white/20 text-white px-6 py-3 rounded-full" href="https://wa.me/91XXXXXXX">
              WhatsApp
            </a>
            <a className="border border-white/20 text-white px-6 py-3 rounded-full" href="/case-studies">
              View case studies
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
