'use client'

import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

const milestones = [
  {
    year: '2025',
    title: 'Company Incorporated',
    description: 'Fluxorae Private Limited was officially incorporated on 16th October 2025 with a vision to transform businesses through technology.',
  },
  {
    year: '2025',
    title: 'Ops & Public Stack',
    description: 'Built the foundation across marketing site, ops portal, and API with security and governance baked in.',
  },
  {
    year: '2026',
    title: 'AI & Automation Sprints',
    description: 'Delivered AI pilots, workflow automations, and data products for early clients - shipping in 6-8 week cycles.',
  },
  {
    year: '2026',
    title: 'Growth Engines',
    description: 'Launched performance marketing and SEO programs with analytics and CRO loops to scale customer acquisition.',
  },
]

export default function Timeline() {
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
          <h2 className="heading-2 mb-4">Our Journey</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Momentum built through focused sprints, measurable outcomes, and long-term partnerships.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-electric-soft hidden md:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Timeline Dot */}
                <div className="relative z-10 w-24 flex-shrink-0 text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg shadow-accent/30">
                    <Calendar className="text-white" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-accent">{milestone.year}</div>
                </div>

                {/* Content */}
                <div className={`flex-1 glass-panel p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                  <h3 className="heading-3 text-xl mb-3">{milestone.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                </div>

                {/* Empty space for alignment */}
                <div className="hidden md:block w-24 flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
