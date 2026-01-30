'use client'

import { motion } from 'framer-motion'

interface ServicesHeroProps {
  servicesCount?: number
  customQuote?: number
}

const counters = (servicesCount = 0, customQuote = 0) => [
  { label: 'Service buckets', value: servicesCount || 8 },
  { label: 'Custom engagements', value: customQuote || 3 },
  { label: 'Automation sprints', value: '24/7 ops' },
]

export default function ServicesHero({ servicesCount, customQuote }: ServicesHeroProps) {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary-dark to-primary text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

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
            Services built for velocity
          </motion.span>
          <h1 className="heading-1 text-white mb-6 text-balance">
            AI consulting, engineering, and Ops coverage in one integrated team
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto text-balance">
            From readiness assessments to SLA-backed support, Fluxorae delivers measurable products and automation with security, governance, and ROI dashboards.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {counters(servicesCount, customQuote).map((counter) => (
              <div key={counter.label} className="rounded-2xl bg-white/10 px-4 py-6">
                <p className="text-sm text-gray-300">{counter.label}</p>
                <p className="text-2xl font-semibold">{counter.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
