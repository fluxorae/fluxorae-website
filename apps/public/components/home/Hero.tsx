'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, Rocket, ShieldCheck } from 'lucide-react'
import NeonGrid from '../common/NeonGrid'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
      <NeonGrid />

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm text-white">
              <Sparkles size={16} className="text-accent" />
              AI + Digital Transformation Experts
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="heading-1 text-balance"
            >
              AI-Powered Digital Solutions that
              <span className="block text-gradient">Scale Your Business</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-200 max-w-3xl text-balance"
            >
              Fluxorae blends AI automation, product engineering, and performance marketing to launch, scale, and optimize digital experiences for ambitious brands.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link href="/contact" className="btn-primary group">
                Book a Free Consultation
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link href="/insights" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                View Case Studies
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10"
            >
              {[
                { icon: Rocket, title: 'AI & Automation', desc: 'Workflows, copilots, data agents' },
                { icon: ShieldCheck, title: 'Enterprise-grade', desc: 'Security, governance, uptime' },
                { icon: Sparkles, title: 'Performance-first', desc: 'SEO + Core Web Vitals' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="glass-panel rounded-xl p-4 flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{title}</p>
                    <p className="text-sm text-gray-300">{desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="glass-panel rounded-3xl border-white/10 p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-accent/10 to-transparent" />
            <div className="relative space-y-6">
              <div className="inline-flex px-3 py-1 rounded-full bg-white/10 text-xs uppercase tracking-[0.2em] text-gray-200">
                What we deliver
              </div>
              <h3 className="heading-2 leading-tight">
                Launch faster. Scale smarter.
                <span className="block text-gradient text-3xl md:text-4xl">Measure every win.</span>
              </h3>
              <ul className="space-y-4 text-sm text-gray-200">
                <li className="flex items-start gap-3">
                  <ArrowRight size={16} className="mt-1 text-accent" />
                  Full-funnel services: strategy, build, automation, growth.
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight size={16} className="mt-1 text-accent" />
                  Modular delivery: AI pilots in weeks, platforms in sprints.
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight size={16} className="mt-1 text-accent" />
                  Proof-driven: OKR alignment, dashboards, and weekly demos.
                </li>
              </ul>
              <div className="flex flex-wrap gap-3 pt-2">
                {['AI Automation', 'Product Engineering', 'Growth/SEO', 'Design Systems', 'Data & Analytics', 'Cloud & DevOps'].map((chip) => (
                  <span key={chip} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary to-transparent" />
    </section>
  )
}
