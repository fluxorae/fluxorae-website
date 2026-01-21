'use client'

import { Building2, BadgeCheck, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const cards = [
  {
    type: 'Client',
    icon: Building2,
    description: 'Partner with us for AI, product engineering, cloud, and growth.',
    highlights: ['AI + Automation', 'Product & Data builds', 'Growth/SEO', 'Design systems'],
    cta: { label: 'Talk to Sales', href: '/contact?type=client' },
  },
  {
    type: 'Employee',
    icon: BadgeCheck,
    description: 'Need support, access, or HR help? We’ll route you fast.',
    highlights: ['Access / tooling', 'HR & updates', 'Support tickets', 'Policy guidance'],
    cta: { label: 'Open an internal request', href: '/contact?type=employee' },
  },
]

export default function UserTypeSegment() {
  return (
    <section className="section-padding">
      <div className="container-custom space-y-6">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400">Client / Employee</p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <h2 className="heading-2">Who are you?</h2>
            <p className="text-gray-300 max-w-xl">
              Pick your path so we can tailor the conversation, whether you’re exploring services or need an internal update.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass-panel rounded-2xl border border-white/10 p-6 backdrop-blur-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">{card.type === 'Client' ? 'Prospects / Partners' : 'Employees'}</p>
                    <h3 className="heading-3 text-xl">{card.type}</h3>
                  </div>
                </div>
                <p className="text-gray-200 mb-4">{card.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {card.highlights.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <Link
                  href={card.cta.href}
                  className="inline-flex items-center gap-2 text-accent hover:text-electric-soft transition-colors font-semibold"
                >
                  {card.cta.label} <ArrowRight size={16} />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
