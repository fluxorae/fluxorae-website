'use client'

import { motion } from 'framer-motion'
import { Globe, Award, Users, Zap } from 'lucide-react'

const reasons = [
  {
    icon: Globe,
    title: 'Global Presence',
    description: 'We operate across 50+ countries, bringing world-class solutions to businesses worldwide.',
  },
  {
    icon: Award,
    title: 'Proven Excellence',
    description: '15+ years of delivering exceptional results with industry-recognized awards and certifications.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: '500+ skilled professionals dedicated to your success, from strategy to execution.',
  },
  {
    icon: Zap,
    title: 'Innovation First',
    description: 'Cutting-edge technologies and methodologies that keep you ahead of the competition.',
  },
]

export default function WhyFluxorae() {
  return (
    <section className="section-padding bg-secondary-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">Why Choose Fluxorae?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine global expertise with local insights to deliver transformative results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="text-accent" size={32} />
                </div>
                <h3 className="heading-3 text-xl mb-4">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
