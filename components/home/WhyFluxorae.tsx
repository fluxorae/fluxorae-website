'use client'

import { motion } from 'framer-motion'
import { Globe2, Layers, ShieldCheck, Zap, Timer, LineChart } from 'lucide-react'

const reasons = [
  {
    icon: Layers,
    title: 'Strategy → Build → Scale',
    description: 'One team across discovery, product, AI, and growth—no handoff friction.',
  },
  {
    icon: Zap,
    title: 'AI-Native Delivery',
    description: 'Automation, copilots, and data loops baked into every engagement from week one.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Compliant',
    description: 'Security, governance, and privacy-first patterns aligned with enterprise standards.',
  },
  {
    icon: Timer,
    title: 'Momentum by Design',
    description: 'Weekly demos, OKR-tracked outcomes, and clear SLAs to keep decisions fast.',
  },
  {
    icon: LineChart,
    title: 'Performance Obsessed',
    description: 'Core Web Vitals, SEO, and analytics instrumentation shipped by default.',
  },
  {
    icon: Globe2,
    title: 'Global Delivery',
    description: 'Teams across timezones with local context for India, US, and EU go-to-market.',
  },
]

export default function WhyFluxorae() {
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
            Why Fluxorae
          </div>
          <h2 className="heading-2 mb-4">Built for ambitious teams</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            High-velocity squads, measurable outcomes, and a playbook tuned for AI-era products and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="text-accent" size={24} />
                </div>
                <h3 className="heading-3 text-xl mb-3">{reason.title}</h3>
                <p className="text-gray-300 leading-relaxed">{reason.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
