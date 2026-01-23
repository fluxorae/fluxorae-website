'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const serviceBuckets = [
  {
    id: 'ai-consulting',
    title: 'AI Consulting',
    summary: 'Assess readiness, craft roadmaps, and prove feasibility with measurable pilots.',
    outcomes: ['Readiness scorecard + change readiness plan', 'Pilot prioritization with ROI and risk trade-offs', 'Data strategy + governance blueprint'],
    deliverables: ['AI strategy & roadmap', 'Feasibility analysis studies', 'Data maturity assessment', 'Governance playbooks'],
    links: [
      { label: 'AI readiness playbook', href: '/insights#how-to' },
      { label: 'Readiness case studies', href: '/case-studies' },
    ],
  },
  {
    id: 'custom-ai-development',
    title: 'Custom AI Development',
    summary: 'Design, train, and ship enterprise-grade AI products with observability and reliability.',
    outcomes: ['End-to-end product definition', 'Explainability and performance tuning', 'Secure APIs and system integrations'],
    deliverables: ['End-to-end AI products', 'Model training & optimization', 'Multi-cloud deployment', 'API + system integration'],
    links: [
      { label: 'Generative AI insights', href: '/insights#generative-ai' },
      { label: 'AI Ops desk case study', href: '/case-studies' },
    ],
  },
  {
    id: 'machine-learning-services',
    title: 'Machine Learning Services',
    summary: 'Build supervised, unsupervised, and deep-learning systems with proactive monitoring.',
    outcomes: ['Custom model catalogs', 'Drift detection + retraining plans', 'Deep learning for vision and language'],
    deliverables: ['Supervised & unsupervised models', 'Deep learning pipelines', 'Retraining/playback loops'],
    links: [
      { label: 'Predictive analytics brief', href: '/insights#predictive-analytics' },
      { label: 'Model ops checklist', href: '/insights#technical' },
    ],
  },
  {
    id: 'data-analytics',
    title: 'Data & Analytics',
    summary: 'Data engineering, BI dashboards, warehouses, and real-time analytics that fuel decisions.',
    outcomes: ['Governed data stores', 'Storytelling dashboards', 'Live operational analytics'],
    deliverables: ['Data engineering + lakes', 'BI dashboards', 'Data warehousing', 'Realtime analytics & alerts'],
    links: [
      { label: 'BI dashboard playbook', href: '/insights#ai-dashboards' },
      { label: 'Data strategy case study', href: '/case-studies' },
    ],
  },
  {
    id: 'automation-agents',
    title: 'Automation & AI Agents',
    summary: 'Business process automation, RPA, and AI agents for sales, support, and ops.',
    outcomes: ['Process automation with human-in-loop guardrails', 'AI agents for sales, support, and ops', 'RPA + AI orchestration'],
    deliverables: ['Business process automation', 'Sales & support AI agents', 'RPA + AI orchestration'],
    links: [
      { label: 'Automation in action', href: '/case-studies' },
      { label: 'AI agent guide', href: '/insights#how-to' },
    ],
  },
  {
    id: 'cloud-mlops',
    title: 'Cloud & MLOps',
    summary: 'Shared infrastructure design, reproducible pipelines, and compliance-first governance.',
    outcomes: ['Secure cloud architecture', 'CI/CD for models', 'Auditable security posture'],
    deliverables: ['Cloud architecture', 'MLOps pipelines', 'Security & compliance controls'],
    links: [
      { label: 'MLOps best practices', href: '/insights#technical' },
      { label: 'Infrastructure stories', href: '/case-studies' },
    ],
  },
  {
    id: 'mvp-poc',
    title: 'MVP & PoC Development',
    summary: 'Rapid prototyping, startup MVPs, and pilot projects with success criteria.',
    outcomes: ['Clickable prototypes', 'Startup-ready MVPs', 'Pilot tracking with ROI'],
    deliverables: ['Rapid prototyping', 'Startup MVPs', 'Pilot projects with measurable checkpoints'],
    links: [
      { label: 'Pilot project template', href: '/insights#how-to' },
      { label: 'Startup MVP checklist', href: '/insights#resources' },
    ],
  },
  {
    id: 'support-maintenance',
    title: 'Support & Maintenance',
    summary: 'Monitoring, continuous improvement, and SLA-based support for peace-of-mind.',
    outcomes: ['Performance monitoring with SLIs/SLOs', 'Continuous improvement backlog', 'Dedicated escalation paths'],
    deliverables: ['Model performance monitoring', 'Continuous improvements', 'SLA-based support'],
    links: [
      { label: 'Support & SLA guide', href: '/insights#trust' },
      { label: 'Book a call for support', href: '/book-call' },
    ],
  },
]

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-secondary-light">
      <div className="container-custom space-y-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-2">Services</p>
          <h2 className="heading-2 text-white">Consulting, build, and support with measurable outcomes</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Each bucket delivers focused deliverables, outcomes, and references so you can trace the impact from strategy to scale.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {serviceBuckets.map((bucket, index) => (
            <motion.article
              key={bucket.title}
              id={bucket.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="glass-panel rounded-3xl border border-white/10 p-6 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-white">{bucket.title}</h3>
                <span className="text-xs uppercase tracking-[0.4em] text-accent">Service</span>
              </div>
              <p className="text-gray-300 mb-4">{bucket.summary}</p>
              <div className="flex flex-col gap-2 text-sm text-gray-200 mb-4">
                {bucket.outcomes.map((item) => (
                  <p key={`outcome-${item}`} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent inline-flex" />
                    {item}
                  </p>
                ))}
              </div>
              <div className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">Deliverables</div>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-300 mb-4">
                {bucket.deliverables.map((deliverable) => (
                  <li key={`deliverable-${deliverable}`}>{deliverable}</li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-2">
                {bucket.links.map((link) => (
                  <Link
                    key={`${bucket.id}-${link.label}`}
                    href={link.href}
                    className="text-accent text-sm font-semibold hover:underline"
                  >
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
