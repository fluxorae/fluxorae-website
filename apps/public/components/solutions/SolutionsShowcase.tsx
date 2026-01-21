'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const solutions = [
  {
    title: 'AI Ops Desk',
    industry: 'Logistics',
    problem: 'Manual exception handling slowed resolution and missed SLAs.',
    solution: 'AI copilots triage tickets, surface playbooks, and trigger automations with human-in-loop approvals.',
    results: ['-38% turnaround time', '+18% SLA adherence', '24/7 triage coverage'],
  },
  {
    title: 'Headless Web + SEO',
    industry: 'B2B SaaS',
    problem: 'Slow pages and weak messaging limited demo requests.',
    solution: 'Next.js edge caching, design system rebuild, and technical + on-page SEO with CRO experiments.',
    results: ['+42% organic demos', 'LCP < 2.5s', '+35% pricing page conversion'],
  },
  {
    title: 'Growth Engine',
    industry: 'D2C',
    problem: 'Fragmented attribution and stagnant ROAS across channels.',
    solution: 'Full-funnel analytics, experimentation, creative testing, and automation for nurture.',
    results: ['+27% AOV', '+19% ROAS', 'Automated lead nurture'],
  },
  {
    title: 'Data & Decision Intelligence',
    industry: 'Fintech',
    problem: 'Leadership lacked real-time visibility on pipeline, risk, and ops.',
    solution: 'Customer 360, predictive scoring, and decision dashboards with governed data contracts.',
    results: ['Live exec dashboards', 'Faster approvals', 'Data quality SLAs'],
  },
  {
    title: 'Service Design + Copilots',
    industry: 'Customer Support',
    problem: 'High ticket volume, inconsistent resolutions, and limited self-serve.',
    solution: 'Redesigned flows, built knowledge copilots, and automated common intents with safe handoffs.',
    results: ['-25% ticket volume', '-30% handling time', 'Higher CSAT and deflection'],
  },
  {
    title: 'Cloud Modernization',
    industry: 'Enterprise',
    problem: 'Rising cloud costs, unreliable deploys, and missing observability.',
    solution: 'IaC, CI/CD, SRE runbooks, and cost visibility with alerts and budgets.',
    results: ['99.9%+ uptime targets', 'Faster releases', 'Cost optimization levers identified'],
  },
]

export default function SolutionsShowcase() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.2em] text-gray-300 mb-4">
            Case studies & plays
          </div>
          <h2 className="heading-2 mb-4">Proof of impact</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A snapshot of how we deliver results with AI, product, growth, and data - fast.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel border border-white/10 rounded-2xl p-7 hover:border-white/20 transition-all duration-300 h-full"
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">{solution.industry}</p>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-gray-200">Outcome playbook</span>
              </div>
              <h3 className="heading-3 text-2xl mb-3">{solution.title}</h3>
              <div className="space-y-2 text-sm text-gray-300 mb-4">
                <p><span className="text-white font-semibold">Problem:</span> {solution.problem}</p>
                <p><span className="text-white font-semibold">Solution:</span> {solution.solution}</p>
              </div>
              <div className="space-y-2 mb-6">
                <p className="text-xs text-gray-400 uppercase tracking-[0.2em]">Outcomes</p>
                <ul className="space-y-1">
                  {solution.results.map((result) => (
                    <li key={result} className="flex items-center gap-2 text-sm text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-accent font-semibold"
              >
                Book a walkthrough
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
