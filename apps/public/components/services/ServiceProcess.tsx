'use client'

import { motion } from 'framer-motion'
import { Compass, Lightbulb, Cpu, Rocket, BarChart3 } from 'lucide-react'

const processSteps = [
  {
    icon: Compass,
    title: 'Assess & Align',
    description: 'Define OKRs, map journeys, and pick the fastest path to value. Prioritize 6-8 week wins.',
    number: '01',
  },
  {
    icon: Lightbulb,
    title: 'Design the Blueprint',
    description: 'Architect AI, product, and growth plans with security, governance, and analytics by default.',
    number: '02',
  },
  {
    icon: Cpu,
    title: 'Build & Automate',
    description: 'Ship features, pipelines, and automations in weekly sprints with clear demo-ready increments.',
    number: '03',
  },
  {
    icon: Rocket,
    title: 'Launch & Iterate',
    description: 'Go live with guardrails, then iterate via experiments, CRO, and AI feedback loops.',
    number: '04',
  },
  {
    icon: BarChart3,
    title: 'Measure & Scale',
    description: 'Dashboards, uptime, and cost visibility; scale what works with runbooks and training.',
    number: '05',
  },
]

export default function ServiceProcess() {
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
            How we work
          </div>
          <h2 className="heading-2 mb-4">From discovery to measurable scale</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A structured approach with weekly demos, clear SLAs, and outcomes tied to your OKRs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass-panel p-7 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center">
                      <Icon className="text-accent" size={24} />
                    </div>
                    <span className="text-2xl font-bold text-gray-100">{step.number}</span>
                  </div>
                  <h3 className="heading-3 text-xl mb-1">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
