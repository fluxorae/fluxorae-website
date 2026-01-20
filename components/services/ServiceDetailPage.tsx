'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

type ServiceDetailData = {
  title: string
  subtitle: string
  description: string
  primaryCTA?: { text: string; href: string }
  secondaryCTA?: { text: string; href: string }
  painPoints: string[]
  solutions: string[]
  outcomes: string[]
  process: { title: string; description: string }[]
  stack: string[]
}

export function ServiceDetailPage({
  data,
}: {
  data: ServiceDetailData
}) {
  return (
    <div className="space-y-16">
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.25),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.18),transparent_40%)]" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold"
            >
              {data.subtitle}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-1 text-white mt-6 mb-4 text-balance"
            >
              {data.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-200 max-w-3xl"
            >
              {data.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {data.primaryCTA && (
                <Link href={data.primaryCTA.href} className="btn-primary">
                  {data.primaryCTA.text}
                </Link>
              )}
              {data.secondaryCTA && (
                <Link href={data.secondaryCTA.href} className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                  {data.secondaryCTA.text}
                </Link>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container-custom space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="glass-panel rounded-2xl p-6 border border-white/10">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3">What hurts</p>
            <ul className="space-y-2 text-gray-200">
              {data.painPoints.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-panel rounded-2xl p-6 border border-white/10">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3">How we solve</p>
            <ul className="space-y-2 text-gray-200">
              {data.solutions.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="w-1.5 h-1.5 bg-electric-soft rounded-full mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-panel rounded-2xl p-6 border border-white/10">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3">Outcomes</p>
            <ul className="space-y-2 text-gray-200">
              {data.outcomes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-custom space-y-8">
        <div className="text-center space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400">How we work</p>
          <h2 className="heading-2">From discovery to scale</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A velocity-driven playbook with weekly demos, guardrails, and measurable KPIs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {data.process.map((step, idx) => (
            <div key={step.title} className="glass-panel rounded-2xl border border-white/10 p-6 h-full">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-[0.2em] text-gray-400">Step {idx + 1}</span>
                <span className="text-sm font-semibold text-accent">0{idx + 1}</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-custom space-y-6">
        <div className="text-center space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Tech & tools</p>
          <h3 className="heading-3 text-2xl">Built with proven stacks</h3>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {data.stack.map((item) => (
            <span key={item} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-200">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="container-custom">
        <div className="glass-panel rounded-3xl border border-white/10 p-8 md:p-10 text-center space-y-4">
          <h3 className="heading-2 text-3xl">Ready to move fast?</h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Book a 30-minute consult to map your goals to a 6–8 week roadmap, with clear milestones and accountability.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Book a Free Consultation</Link>
            <Link href="/solutions" className="btn-outline border-white text-white hover:bg-white hover:text-primary">See case studies</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
