'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { number: '2.3x', label: 'Average pipeline & ROI uplift' },
  { number: '98%', label: 'Model + product accuracy in production' },
  { number: '-28%', label: 'Ops cost reduction from automation' },
  { number: '6-8 weeks', label: 'Pilot or MVP launch with measurable wins' },
  { number: '95%', label: 'Core Web Vitals pass rate after rebuilds' },
  { number: '24/7', label: 'AI + human-in-loop coverage for critical flows' },
]

function AnimatedNumber({ value, delay = 0 }: { value: string; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, delay }}
      className="inline-block"
    >
      {value}
    </motion.span>
  )
}

export default function StatsSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-dark to-primary text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.2em] text-gray-300 mb-4">
            Impact metrics
          </div>
          <h2 className="heading-2 mb-4 text-white">Outcomes that keep compounding</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We track every engagement to the numbers that matter - pipeline, conversion, uptime, and satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold mb-3">
                <AnimatedNumber value={stat.number} delay={index * 0.1} />
              </div>
              <div className="text-gray-300 text-sm md:text-base leading-snug">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
