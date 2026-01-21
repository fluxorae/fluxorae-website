'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

const solutions = [
  {
    title: 'AI Ops Desk for Logistics',
    description: 'Reduced manual ops with AI copilots handling exception tickets and proactive alerts.',
    results: ['-38% turnaround time', '+18% SLA adherence', '24/7 triage coverage'],
    gradient: 'from-emerald-500/80 to-teal-400',
  },
  {
    title: 'Headless Web for B2B SaaS',
    description: 'Next.js + edge caching + SEO overhaul to capture more inbound and demo requests.',
    results: ['+42% organic demos', 'LCP < 2.5s', '+35% conversion on pricing'],
    gradient: 'from-electric-soft to-cyan-500',
  },
  {
    title: 'D2C Growth Engine',
    description: 'Full-funnel SEO + CRO + automation with experimentation at the center.',
    results: ['+27% AOV', '+19% ROAS', 'Automated lead nurture'],
    gradient: 'from-amber-500 to-orange-500',
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
            Recent outcomes
          </div>
          <h2 className="heading-2 mb-4">Proof that ships fast</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Business impact delivered through AI, engineering, and growth in weeks - not quarters.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group overflow-hidden rounded-2xl border border-white/10 glass-panel"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
              <div className="relative p-8 h-full flex flex-col gap-4">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-300">
                  <Sparkles size={14} className="text-accent" />
                  Case study
                </div>
                <h3 className="heading-3 text-xl">
                  {solution.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {solution.description}
                </p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {solution.results.map((result) => (
                    <li key={result} className="flex items-center gap-2 text-sm text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                      {result}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  View the approach
                  <ArrowRight className="transition-transform" size={20} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/solutions" className="btn-secondary">
            Discover All Solutions
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
