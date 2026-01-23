'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const industryDetail = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'AI diagnostics, patient analytics, and medical imaging assisted decisioning.',
    solutions: ['AI diagnostics', 'Patient analytics', 'Medical imaging'],
    metrics: ['Accuracy uplift +12%', 'Patient throughput +18%', 'HIPAA-ready by default'],
    compliance: 'HIPAA + FDA guardrails',
    links: [
      { label: 'View healthcare playbooks', href: '/insights#how-to' },
      { label: 'Case studies', href: '/case-studies' },
    ],
  },
  {
    id: 'finance',
    title: 'Banking & Finance',
    description: 'Fraud detection, credit scoring, and risk/compliance automation.',
    solutions: ['Fraud detectors', 'Credit scoring', 'Risk dashboards'],
    metrics: ['Fraud wins +48%', 'Risk review time -32%'],
    compliance: 'SOC 2 + RBI/SEC-ready',
    links: [
      { label: 'Regulatory-ready insights', href: '/insights#trust' },
      { label: 'Case studies', href: '/case-studies' },
    ],
  },
  {
    id: 'retail',
    title: 'E-Commerce & Retail',
    description: 'Personalization, demand forecasting, and inventory intelligence for omnichannel brands.',
    solutions: ['Demand forecasting', 'Inventory optimization', 'Personalization engines'],
    metrics: ['Personalization lift +15%', 'Inventory days-on-hand -22%'],
    compliance: 'PCI + data residency controls',
    links: [
      { label: 'Growth insights', href: '/insights#how-to' },
      { label: 'Case studies', href: '/case-studies' },
    ],
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'Predictive maintenance, quality control, and ML-driven supply chains.',
    solutions: ['Predictive maintenance', 'Quality AI', 'Supply chain automation'],
    metrics: ['Uptime +14%', 'Quality defects -27%'],
    compliance: 'Industry 4.0 + safety standards',
    links: [
      { label: 'Operational intelligence', href: '/insights#ai-dashboards' },
      { label: 'Case studies', href: '/case-studies' },
    ],
  },
  {
    id: 'logistics',
    title: 'Logistics & Supply Chain',
    description: 'Route optimization, warehouse automation, and fulfillment intelligence.',
    solutions: ['Routing', 'Warehouse automation', 'Fulfillment analytics'],
    metrics: ['Route efficiency +21%', 'Warehouse throughput +12%'],
    compliance: 'FTZ + customs-ready documentation',
    links: [
      { label: 'Logistics playbooks', href: '/insights#how-to' },
      { label: 'Case studies', href: '/case-studies' },
    ],
  },
  {
    id: 'education',
    title: 'Education',
    description: 'Adaptive learning, student performance analytics, and support automation.',
    solutions: ['Adaptive learning', 'Performance analytics', 'Conversational agents'],
    metrics: ['Completion +19%', 'Student support automation 24/7'],
    compliance: 'FERPA + accessibility-first',
    links: [
      { label: 'Learning analytics brief', href: '/insights#research' },
      { label: 'Case studies', href: '/case-studies' },
    ],
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    description: 'Price prediction, smart CRM, and AI-assisted deal desks.',
    solutions: ['Price prediction', 'Smart CRM automation', 'Deal analytics'],
    metrics: ['Pricing accuracy +13%', 'CRM response time -35%'],
    compliance: 'REIT regulations + data security',
    links: [
      { label: 'Real estate AI guide', href: '/insights#how-to' },
      { label: 'Case studies', href: '/case-studies' },
    ],
  },
  {
    id: 'saas',
    title: 'SaaS & Startups',
    description: 'AI feature integration, growth analytics, and specialized MVP accelerators.',
    solutions: ['AI copilots', 'Growth analytics', 'MVP prototyping'],
    metrics: ['Feature release velocity +33%', 'Growth telemetry +24%'],
    compliance: 'VC-ready SLAs + security posture',
    links: [
      { label: 'Startup playbooks', href: '/insights#resources' },
      { label: 'Case studies', href: '/case-studies' },
    ],
  },
]

export default function IndustriesGrid() {
  return (
    <section className="section-padding bg-secondary-light">
      <div className="container-custom">
        <div className="grid gap-6 md:grid-cols-2">
          {industryDetail.map((industry, index) => (
            <motion.article
              key={industry.id}
              id={industry.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="glass-panel rounded-3xl border border-white/10 p-6 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-semibold text-white">{industry.title}</h3>
                <span className="text-xs uppercase tracking-[0.4em] text-accent">Industry</span>
              </div>
              <p className="text-gray-300 mb-3">{industry.description}</p>
              <div className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-3">Focus</div>
              <div className="flex flex-wrap gap-2 mb-3">
                {industry.solutions.map((solution) => (
                  <span key={`${industry.id}-${solution}`} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                    {solution}
                  </span>
                ))}
              </div>
              <div className="text-sm text-gray-300 space-y-1 mb-3">
                <p>
                  <span className="text-white font-semibold">Metrics:</span> {industry.metrics.join(' · ')}
                </p>
                <p>
                  <span className="text-white font-semibold">Compliance:</span> {industry.compliance}
                </p>
              </div>
              <div className="mt-auto flex flex-wrap gap-3">
                {industry.links.map((link) => (
                  <Link key={`${industry.id}-${link.label}`} href={link.href} className="text-accent text-sm font-semibold hover:underline">
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
