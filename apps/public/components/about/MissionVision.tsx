'use client'

import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'

export default function MissionVision() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 rounded-2xl border border-white/10"
          >
            <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center mb-4">
              <Target className="text-accent" size={24} />
            </div>
            <h2 className="heading-3 mb-4">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To compound growth for ambitious teams by shipping AI-powered products, automation, and marketing systems with measurable outcomes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 rounded-2xl border border-white/10"
          >
            <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center mb-4">
              <Eye className="text-accent" size={24} />
            </div>
            <h2 className="heading-3 mb-4">Our Vision</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To be the AI-first partner businesses trust for rapid experimentation, resilient platforms, and marketing engines that never stop learning.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
