import Link from 'next/link'
import { Metadata } from 'next'
import CTA from '@/components/common/CTA'

export const metadata: Metadata = {
  title: 'Case Studies | Fluxorae',
  description: 'Browse Fluxorae case studies with outcomes across industries, solutions, and ROI metrics.',
}

const filterTags = [
  'Healthcare',
  'Finance',
  'Retail',
  'Manufacturing',
  'Logistics',
  'SaaS',
  'Generative AI',
  'Automation',
  'Data & Analytics',
]

const enterpriseStories = [
  {
    title: 'AI Ops Desk for Global Logistics',
    partner: 'Logistics & Fulfillment',
    problem: 'Manual exception handling slowed SLAs and incurred overtime.',
    solution: 'AI copilots triage tickets, trigger playbooks, and orchestrate approvals with human-in-loop guards.',
    impact: ['-38% resolution time', '+18% SLA adherence', '24/7 triage coverage'],
    slug: '/case-studies',
  },
  {
    title: 'Decision Intelligence for Fintech',
    partner: 'Banking & Finance',
    problem: 'Leadership lacked live risk views and forecasting clarity.',
    solution: 'Intelligent decision dashboards powered by predictive analytics and scenario modeling.',
    impact: ['+42% pipeline clarity', '30% faster approvals', 'Real-time risk views'],
    slug: '/case-studies',
  },
]

const startupStories = [
  {
    title: 'The Rented Runway',
    partner: 'Luxury Retail',
    problem: 'Local SEO traffic and conversions were muted by outdated UX.',
    solution: 'SEO-first rebuild with sticky CTAs, structured data, and localized intent coverage.',
    impact: ['+42% organic inquiries', 'LCP < 2.5s', 'Lead gen +38%'],
    slug: '/case-study-rented-runway',
  },
  {
    title: 'RK Petals & Decor',
    partner: 'Events & Wedding Services',
    problem: 'Mobile UX and manual lead routing created drop-offs.',
    solution: 'Mobile-first experience, localized copy, and automated WhatsApp/call workflows.',
    impact: ['+31% mobile leads', '-50% lead routing time', '24/7 capture'],
    slug: '/case-study-rk-petals',
  },
]

const roiMetrics = [
  { label: 'Avg ROI lift', value: '2.3x' },
  { label: 'Pilot launch', value: '6-8 weeks' },
  { label: 'Ops cost reduction', value: '-28%' },
  { label: 'Production accuracy', value: '98%' },
]

const testimonials = [
  {
    quote: 'Fluxorae connected our AI pilots to measurable KPIs and governance, which gave execs confidence to scale.',
    name: 'Anaya Patel',
    title: 'COO, Nova Bank',
  },
  {
    quote: 'From discovery to launch they tracked every metric, kept us aligned, and beat onboarding SLA targets.',
    name: 'Samar Verma',
    title: 'Head of Growth, Satori SaaS',
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="bg-primary text-secondary">
      <div className="container-custom py-16 space-y-12">
        <header className="space-y-4 max-w-3xl">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs uppercase tracking-[0.5em] text-accent">
            Case Studies
          </p>
          <h1 className="heading-2 text-white">Proof of delivery with Problem → Solution → Impact narratives</h1>
          <p className="text-gray-400">
            Explore how Fluxorae teams turn complex problems into measurable outcomes, share industry-specific playbooks, and keep momentum accelerating.
          </p>
        </header>

        <section className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-gray-400 mb-2">Filters</p>
            <div className="flex flex-wrap gap-3">
              {filterTags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full border border-white/15 text-xs uppercase tracking-[0.4em] text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-500">
            Browse by industry, solution, or engagement model; each page dives into KPIs, stack, automation, and testimonial details.
          </p>
        </section>

        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Enterprise success stories</p>
              <h2 className="heading-3 text-white">Transformation at scale</h2>
            </div>
            <Link href="/case-studies" className="text-accent text-sm font-semibold">
              Browse all
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {enterpriseStories.map((story) => (
              <article key={story.title} className="glass-panel rounded-3xl border border-white/10 p-6 flex flex-col h-full">
                <div className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-2">{story.partner}</div>
                <h3 className="text-2xl text-white font-semibold mb-3">{story.title}</h3>
                <div className="space-y-3 text-sm text-gray-300 flex-grow">
                  <p>
                    <span className="text-white font-semibold">Problem:</span> {story.problem}
                  </p>
                  <p>
                    <span className="text-white font-semibold">Solution:</span> {story.solution}
                  </p>
                </div>
                <div className="mt-4 text-xs uppercase tracking-[0.4em] text-gray-400 mb-2">Impact</div>
                <ul className="space-y-1 text-sm text-gray-200 mb-4">
                  {story.impact.map((impact) => (
                    <li key={`${story.title}-${impact}`} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {impact}
                    </li>
                  ))}
                </ul>
                <Link href={story.slug} className="mt-auto text-sm font-semibold text-accent inline-flex items-center gap-1">
                  View the story
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Startup growth stories</p>
              <h2 className="heading-3 text-white">Startup & revenue acceleration</h2>
            </div>
            <Link href="/case-studies" className="text-accent text-sm font-semibold">
              Browse all
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {startupStories.map((story) => (
              <article key={story.title} className="glass-panel rounded-3xl border border-white/10 p-6 flex flex-col h-full">
                <div className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-2">{story.partner}</div>
                <h3 className="text-2xl text-white font-semibold mb-3">{story.title}</h3>
                <div className="space-y-3 text-sm text-gray-300 flex-grow">
                  <p>
                    <span className="text-white font-semibold">Problem:</span> {story.problem}
                  </p>
                  <p>
                    <span className="text-white font-semibold">Solution:</span> {story.solution}
                  </p>
                </div>
                <div className="mt-4 text-xs uppercase tracking-[0.4em] text-gray-400 mb-2">Impact</div>
                <ul className="space-y-1 text-sm text-gray-200 mb-4">
                  {story.impact.map((impact) => (
                    <li key={`${story.title}-${impact}`} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {impact}
                    </li>
                  ))}
                </ul>
                <Link href={story.slug} className="mt-auto text-sm font-semibold text-accent inline-flex items-center gap-1">
                  View the story
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-gray-400 mb-2">Metrics & ROI summary</p>
            <h2 className="heading-3 text-white">Aggregated outcomes that fuel investment decisions</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {roiMetrics.map((metric) => (
              <div key={metric.label} className="glass-panel rounded-3xl border border-white/10 p-6 text-center">
                <p className="text-3xl font-bold text-white">{metric.value}</p>
                <p className="text-sm text-gray-400 mt-2">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-gray-400 mb-2">Client testimonials</p>
            <h2 className="heading-3 text-white">People who partner with Fluxorae</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="glass-panel rounded-3xl border border-white/10 p-6">
                <p className="text-gray-200 mb-4">“{testimonial.quote}”</p>
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-[0.4em] text-gray-400">{testimonial.title}</p>
              </article>
            ))}
          </div>
        </section>

        <CTA
          title="Ready to scale with measurable proof?"
          description="Share your industry, objectives, and desired outcomes—we will map you to the right case studies and playbooks."
          primaryButton={{ text: 'Book a Call', href: '/book-call' }}
          secondaryButton={{ text: 'View Services', href: '/services' }}
          showContactDetails
        />
      </div>
    </main>
  )
}
