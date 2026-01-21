'use client'

import { motion } from 'framer-motion'
import NeonGrid from '../common/NeonGrid'

export default function SolutionsHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <NeonGrid />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-4 py-2 mb-6 bg-accent/20 text-accent rounded-full text-sm font-semibold"
          >
            Solutions & case studies
          </motion.span>
          <h1 className="heading-1 text-white mb-6 text-balance">
            AI-era solutions for complex challenges
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto text-balance">
            From AI copilots to growth engines, explore how we deliver outcomes with security, speed, and measurable ROI.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
