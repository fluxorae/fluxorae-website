import Link from 'next/link'
import CTA from '@/components/common/CTA'
import CostCalculator from '@/components/pricing/CostCalculator'

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: '₹35,000+',
    bestFor: 'Landing pages, rapid launches',
    features: [
      '1-2 core pages (home/offer)',
      'Conversion-led hero + CTAs',
      'SEO-ready metadata & schema',
      'Performance budget & QA',
      'Contact + WhatsApp capture',
      'Analytics & basic events',
      'Handoff documentation & training',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '₹65,000+',
    bestFor: 'Service sites & lead gen',
    features: [
      '5-8 pages (services, about, contact)',
      'Mega menu + sticky CTAs',
      'Case study & blog templates',
      'Advanced on-page SEO',
      'Form UX + validation',
      'Performance + accessibility pass',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '₹95,000+',
    bestFor: 'Multi-service + pricing-forward',
    features: [
      '10-15 pages + pricing + resources',
      'Design system + component library',
      'CMS-ready layouts (optional)',
      'A/B-ready hero/CTA variants',
      'Accessibility & schema depth',
      'CRO recommendations starter pack',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    bestFor: 'Multi-brand, multi-region, integrations',
    features: [
      'Multi-domain or multi-brand IA',
      'Custom integrations + workflows',
      'Design system expansion',
      'Security, compliance alignment',
      'Performance SLOs + observability',
      'Dedicated success cadence',
    ],
  },
]

const engagementModels = [
  {
    name: 'Fixed Price',
    description: 'Predictable scope, milestones, and SLAs tied to defined deliverables.',
    benefits: ['Weekly demos', 'Shared success criteria', 'Governance + risk plan'],
  },
  {
    name: 'Time & Material',
    description: 'Flexible delivery with bi-weekly reviews and adjustable scope or teams.',
    benefits: ['Dedicated pod', 'Rolling backlog', 'Transparent burn dashboard'],
  },
  {
    name: 'Dedicated Teams',
    description: 'Bank of hours for sustained product, data, and automation builds.',
    benefits: ['White-labeled pods', 'Embedded reporting', 'On-demand experimentation'],
  },
]

const pricingFaq = [
  ['Do prices include content?', 'Core copy guidance and messaging reviews are included; full copywriting is optional.'],
  ['Can you integrate with my CRM?', 'Yes, we support webhook-based lead routing and deeper CRM work scoped separately.'],
  ['Do you offer revisions?', 'Yes. Each tier includes multiple review rounds; enterprise engagements get an adaptive cadence.'],
  ['How long does a build take?', 'Starter ~2 weeks, Growth ~3-4 weeks, Pro ~4-6 weeks, Enterprise is scoped.'],
  ['Is hosting included?', 'Hosting is not included; we deliver to your preferred platform (Vercel, AWS, Amplify).'],
  ['Can you migrate my current site?', 'Yes, we migrate content, SEO signals, and redirect maps to preserve rankings.'],
]

export const metadata = {
  title: 'Pricing | Fluxorae Private Limited',
  description: 'Transparent packages and engagement models for premium AI and product initiatives.',
}

export default function PricingPage() {
  return (
    <div className="bg-primary text-secondary">
      <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-primary-dark/80 border-b border-white/10">
        <div className="container-custom space-y-6">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest">Pricing Philosophy</p>
          <h1 className="heading-1">Predictable packages, flexible models, measurable governance</h1>
          <p className="text-secondary/85 max-w-3xl">
            Transparent tiers, engagement models, and governance that keep compliance, ROI, and delivery velocity aligned.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link className="btn-primary bg-gradient-to-r from-accent to-electric-soft text-primary-dark px-6 py-3 rounded-full font-semibold shadow-[0_15px_40px_rgba(0,0,0,0.35)]" href="/contact">
              Request Proposal
            </Link>
            <Link className="btn-secondary border border-white/20 text-white px-6 py-3 rounded-full" href="/case-studies">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-white/10">
        <div className="container-custom grid gap-6 md:grid-cols-2">
          {engagementModels.map((model) => (
            <div key={model.name} className="glass-panel rounded-3xl border border-white/10 p-6">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-2">{model.name}</p>
              <h3 className="text-xl font-semibold text-white mb-3">{model.description}</h3>
              <ul className="space-y-2 text-sm text-gray-200">
                {model.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-gray-400 mb-2">Packages</p>
            <h2 className="heading-2 text-white">Packages designed for pilot, growth, and enterprise</h2>
            <p className="text-gray-400 max-w-3xl">Each tier includes security reviews, performance targets, and clear CTAs.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan) => (
              <div key={plan.id} className="glass-panel rounded-3xl p-6 border border-white/10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white text-xl font-semibold">{plan.name}</h3>
                  <span className="text-accent font-bold">{plan.price}</span>
                </div>
                <p className="text-secondary/80 text-sm mb-4">{plan.bestFor}</p>
                <ul className="space-y-2 text-secondary/90 text-sm mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-col gap-2">
                  <Link
                    href="/contact"
                    className="w-full text-center px-4 py-2 rounded-full bg-gradient-to-r from-accent to-electric-soft text-primary-dark font-semibold shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
                  >
                    Request Proposal
                  </Link>
                  {plan.id !== 'enterprise' && (
                    <Link
                      href="/pricing"
                      className="w-full text-center px-4 py-2 rounded-full border border-white/15 text-white hover:bg-white/10 transition"
                    >
                      Schedule a call
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-dark/30 border-y border-white/10">
        <div className="container-custom grid gap-6 md:grid-cols-2">
          <div className="glass-panel rounded-3xl p-6 border border-white/10">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-2">Startup Pricing</p>
            <h3 className="text-2xl text-white font-semibold mb-3">Lean budgets for ambitious launches</h3>
            <p className="text-gray-300 mb-4">
              Special runway-friendly rates, rapid prototyping, and prioritized MVP delivery with transparent reports and playbooks.
            </p>
            <ul className="space-y-2 text-sm text-gray-200 mb-4">
              <li>Shared pods with startup ops playbooks</li>
              <li>Pilot-focused dashboards and KPIs</li>
              <li>Advisory for funding decks & GTM</li>
            </ul>
            <Link href="/book-call" className="text-accent font-semibold hover:underline">
              Request a startup proposal
            </Link>
          </div>
          <div className="glass-panel rounded-3xl p-6 border border-white/10">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-2">Enterprise Custom Pricing</p>
            <h3 className="text-2xl text-white font-semibold mb-3">Complex IA, governance, and scale</h3>
            <p className="text-gray-300 mb-4">
              Multi-brand, global rollouts with security, compliance, and dedicated success managers.
            </p>
            <ul className="space-y-2 text-sm text-gray-200 mb-4">
              <li>Dedicated teams + SLA-based support</li>
              <li>Cost modeling for integrations & migrations</li>
              <li>Executive reporting + change governance</li>
            </ul>
            <Link href="/book-call" className="text-accent font-semibold hover:underline">
              Request an enterprise briefing
            </Link>
          </div>
        </div>
      </section>

      <CostCalculator />

      <section className="section-padding">
        <div className="container-custom glass-panel rounded-3xl p-6 border border-white/10">
          <h2 className="heading-2 text-white mb-4">Pricing FAQ</h2>
          <div className="divide-y divide-white/10">
            {pricingFaq.map(([question, answer]) => (
              <div key={question} className="py-3">
                <h3 className="text-white font-semibold">{question}</h3>
                <p className="text-secondary/85 text-sm">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Need a detailed proposal?"
        description="Share your goals and we will respond with pricing, delivery cadence, and optional NDAs."
        primaryButton={{ text: 'Request Proposal', href: '/book-call' }}
        secondaryButton={{ text: 'View Services', href: '/services' }}
        showContactDetails
      />
    </div>
  )
}
