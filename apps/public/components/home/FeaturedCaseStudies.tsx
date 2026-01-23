import Link from 'next/link'

const studies = [
  {
    title: 'The Rented Runway',
    industry: 'Luxury Retail',
    problem: 'Bridal rentals were losing SEO traffic and conversions.',
    solution: 'Local SEO overhaul, conversion UX, and structured data with sticky CTAs and measurement.',
    impact: ['+42% organic inquiries', 'LCP < 2.5s', 'Lead gen forms up 38%'],
    href: '/case-study-rented-runway',
  },
  {
    title: 'RK Petals & Decor',
    industry: 'Events & Weddings',
    problem: 'Inconsistent mobile experience and manual lead routing.',
    solution: 'Mobile-first builds, localized intent coverage, and automation to route WhatsApp/call flows.',
    impact: ['+31% mobile leads', 'New automation for 24/7 touchpoints', 'Cut manual routing in half'],
    href: '/case-study-rk-petals',
  },
  {
    title: 'AI Ops Desk',
    industry: 'Logistics & Operations',
    problem: 'Manual exception tickets and slow SLA adherence.',
    solution: 'AI copilots triaging tickets, surfacing playbooks, and routing approvals.',
    impact: ['-38% turnaround time', '+18% SLA adherence', '24/7 triage coverage'],
    href: '/case-studies',
  },
]

export default function FeaturedCaseStudies() {
  return (
    <section className="section-padding border-t border-white/10">
      <div className="container-custom">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.6em] text-gray-400 mb-2">Featured case studies</p>
          <h2 className="heading-2 text-white">Problem → Solution → Impact</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Every story highlights measurable ROI, cross-team collaboration, and the stacks we relied on.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {studies.map((study) => (
            <article key={study.title} className="glass-panel rounded-3xl border border-white/10 p-6 flex flex-col h-full">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-gray-400 mb-3">
                <span>{study.industry}</span>
                <Link href={study.href} className="text-accent font-semibold">
                  View
                </Link>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">{study.title}</h3>
              <div className="text-sm text-gray-300 space-y-2 mb-4">
                <p>
                  <span className="text-white font-semibold">Problem:</span> {study.problem}
                </p>
                <p>
                  <span className="text-white font-semibold">Solution:</span> {study.solution}
                </p>
              </div>
              <div className="mt-auto text-sm text-gray-200 space-y-1">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Impact</p>
                <ul className="space-y-1">
                  {study.impact.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
