'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { number: '2025', label: 'Company Founded', suffix: '' },
  { number: 'Growing', label: 'Client Portfolio', suffix: '' },
  { number: 'Cloud', label: 'Solutions Ready', suffix: '' },
  { number: 'Expert', label: 'Team Members', suffix: '' },
  { number: 'India', label: 'Based', suffix: '' },
  { number: '24/7', label: 'Support Available', suffix: '' },
]

function AnimatedNumber({ value, suffix = '', delay = 0 }: { value: string; suffix?: string; delay?: number }) {
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
      {suffix && <span className="text-accent">{suffix}</span>}
    </motion.span>
  )
}

export default function StatsSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4 text-white">Our Impact in Numbers</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Delivering excellence across the globe
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
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedNumber value={stat.number} suffix={stat.suffix} delay={index * 0.1} />
              </div>
              <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
