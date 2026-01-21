'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, ShieldCheck, GaugeCircle, Rocket, CheckCircle2 } from 'lucide-react'
import NeonGrid from '../common/NeonGrid'

const heroHighlights = [
  { label: 'AI pilots live', value: '6-8 weeks' },
  { label: 'Core Web Vitals pass', value: '95%' },
  { label: 'Conversion lift', value: '+40%' },
]

const heroBullets = [
  'AI-native product, data, and growth squads',
  'Security, governance, and observability built-in',
  'Weekly demos with measurable OKRs and dashboards',
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20">
      <NeonGrid />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white backdrop-blur">
              <Sparkles size={16} className="text-accent" />
              AI-native digital engineering partner
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="heading-1 text-balance"
            >
              Design, ship, and scale experiences that feel premium—and perform.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-200 max-w-3xl text-balance"
            >
              Fluxorae blends AI automation, product engineering, data, and growth to launch high-converting digital products faster—with reliability, governance, and SEO baked in.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link href="/contact" className="btn-primary group">
                Book a roadmap call
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link href="/solutions" className="btn-secondary flex items-center gap-2">
                View solutions
                <GaugeCircle size={18} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {heroHighlights.map((item) => (
                <div key={item.label} className="glass-panel rounded-2xl p-4 border border-white/10">
                  <p className="text-sm text-gray-300 mb-1">{item.label}</p>
                  <p className="text-2xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="glass-panel rounded-3xl border-white/10 p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-accent/8 to-transparent" />
            <div className="relative space-y-6">
              <div className="inline-flex px-3 py-1 rounded-full bg-white/10 text-xs uppercase tracking-[0.2em] text-gray-200">
                Engagement snapshot
              </div>
              <h3 className="heading-2 leading-tight">
                Launch faster. Scale smarter.
                <span className="block text-gradient text-3xl md:text-4xl">Measure every win.</span>
              </h3>
              <ul className="space-y-4 text-sm text-gray-200">
                {heroBullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-1 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 pt-2">
                {['AI Automation', 'Product Engineering', 'Growth/SEO', 'Design Systems', 'Data & Analytics', 'Cloud & DevOps'].map((chip) => (
                  <span key={chip} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200">
                    {chip}
                  </span>
                ))}
              </div>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <ShieldCheck size={16} className="text-accent" />
                  Security-first delivery
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Rocket size={16} className="text-accent" />
                  Weekly releases
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary to-transparent" />
    </section>
  )
}
