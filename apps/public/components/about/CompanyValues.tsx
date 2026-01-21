'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Gauge, Beaker, Sparkles, Users } from 'lucide-react'

const values = [
  {
    icon: Gauge,
    title: 'Velocity with Rigor',
    description: 'Weekly demos, clear SLAs, and engineering discipline keep quality high while moving fast.',
  },
  {
    icon: Beaker,
    title: 'Experiment-Obsessed',
    description: 'We test, measure, and learn - shipping features, automations, and CRO experiments continuously.',
  },
  {
    icon: Users,
    title: 'One Team',
    description: 'Embedded squads across strategy, product, AI, and growth working as extensions of your team.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Default',
    description: 'Governance, privacy, and compliance are baked in from day one - not bolted on later.',
  },
  {
    icon: Sparkles,
    title: 'Delightful Experiences',
    description: 'Design systems, motion, and performance tuned to build trust and convert.',
  },
]

export default function CompanyValues() {
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
          <h2 className="heading-2 mb-4">Our Core Values</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            The principles that keep us shipping dependable, high-performing products and growth programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-panel p-7 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="text-accent" size={24} />
                </div>
                <h3 className="heading-3 text-xl mb-3">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
