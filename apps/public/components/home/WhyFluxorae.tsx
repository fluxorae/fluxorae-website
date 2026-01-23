'use client'

import { motion } from 'framer-motion'
import { Globe2, Layers, ShieldCheck, Zap, LineChart, Lightbulb } from 'lucide-react'

const reasons = [
  {
    icon: Layers,
    title: 'Hybrid strategy + engineering pods',
    description: 'Consultants, product managers, and engineers co-own discovery, roadmap, and delivery for every sprint.',
  },
  {
    icon: Zap,
    title: 'Rapid prototyping & PoCs',
    description: 'Clickable experiments and AI pilots in 6-8 weeks to prove value before scale.',
  },
  {
    icon: ShieldCheck,
    title: 'Security & compliance-first',
    description: 'ISO 27001, SOC 2, GDPR, and HIPAA guardrails baked into architecture and data flows.',
  },
  {
    icon: Lightbulb,
    title: 'AI-native delivery',
    description: 'Automation, copilots, and data loops stitched into every release from day one.',
  },
  {
    icon: LineChart,
    title: 'Performance obsessed',
    description: 'Core Web Vitals, SEO, and experimentation instrumentation shipped by default.',
  },
  {
    icon: Globe2,
    title: 'Global delivery with local context',
    description: 'Cross-border pods covering North America, Europe, and India with matched cultural fluency.',
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
