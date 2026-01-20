'use client'

import { motion } from 'framer-motion'
import NeonGrid from '../common/NeonGrid'

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <NeonGrid />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center space-y-6"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-4 py-2 mb-6 bg-accent/20 text-accent rounded-full text-sm font-semibold"
          >
            About Fluxorae
          </motion.span>
          <h1 className="heading-1 text-white text-balance">
            Building AI-era products, experiences, and growth engines
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto text-balance">
            Fluxorae is a tech-native team delivering strategy, product engineering, automation, and performance marketing—aligned to your OKRs, governed for security, and shipped with weekly demos.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['AI & Automation', 'Product Engineering', 'SEO & Growth', 'Design Systems', 'Data & Analytics', 'Cloud & DevOps'].map((item) => (
              <span key={item} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-200">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
