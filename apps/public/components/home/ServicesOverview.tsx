'use client'

import { motion } from 'framer-motion'
import { Bot, Code2, Megaphone, Palette, DatabaseZap, CloudCog, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Bot,
    title: 'AI & Automation',
    description: 'Copilots, workflow automation, data agents, and GenAI accelerators tuned to your stack.',
    color: 'from-electric-soft via-accent to-amber-500/90',
    href: '/services/ai-automation',
  },
  {
    icon: Code2,
    title: 'Product Engineering',
    description: 'Modern web & mobile experiences built on Next.js, edge-first architectures, and design systems.',
    color: 'from-cyan-400 via-electric to-emerald-400',
    href: '/services/product-engineering',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing / SEO',
    description: 'Full-funnel growth: technical SEO, CRO, performance ads, analytics, and attribution.',
    color: 'from-amber-300 via-accent to-orange-500',
    href: '/services/marketing-seo',
  },
  {
    icon: Palette,
    title: 'UI/UX & Branding',
    description: 'Research-backed design, brand identity, and motion systems crafted for conversion.',
    color: 'from-electric-soft via-emerald-300 to-accent-light',
    href: '/services/ui-ux-branding',
  },
  {
    icon: DatabaseZap,
    title: 'Data & Analytics',
    description: 'Dashboards, customer 360, predictive models, and decision intelligence that ship quickly.',
    color: 'from-electric via-electric-soft to-cyan-700',
    href: '/services/data-cloud-devops',
  },
  {
    icon: CloudCog,
    title: 'Cloud & DevOps',
    description: 'Cloud modernization, SRE, FinOps, and secure-by-default infra automation.',
    color: 'from-amber-300 via-electric-soft to-emerald-500',
    href: '/services/data-cloud-devops',
  },
]

export default function ServicesOverview() {
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
          <div className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.2em] text-gray-300 mb-4">
            What we do
          </div>
          <h2 className="heading-2 mb-4">Full-stack services for modern teams</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Strategy to scale: AI, product engineering, growth, and brand - shipped as one integrated team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-panel rounded-2xl p-6 hover:border-white/20 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={22} />
                </div>
                <h3 className="heading-3 text-xl mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-5 leading-relaxed">{service.description}</p>
                <Link
                  href={service.href}
                  className="text-accent font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                >
                  Learn more
                  <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/contact" className="btn-primary">
            Book a Strategy Call
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
