'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const hubs = [
  {
    id: 'blog',
    title: 'Blog',
    format: 'Narratives, announcements, and short reads',
    description: 'Timely commentary and updates on Fluxorae initiatives.',
  },
  {
    id: 'thought-leadership',
    title: 'AI Thought Leadership',
    format: 'Future-of-work, governance, executive POVs',
    description: 'Frameworks for AI ownership, boards, and long-term value.',
  },
  {
    id: 'generative-ai',
    title: 'Generative AI',
    format: 'Custom LLMs, copilots, document intelligence',
    description: 'Guides on safe, high-impact generative builds and guardrails.',
  },
  {
    id: 'how-to',
    title: 'How-to Guides',
    format: 'Playbooks, checklists, templates',
    description: 'Step-by-step playbooks for AI pilots, automation, and release.',
  },
  {
    id: 'ai-dashboards',
    title: 'AI-Powered Dashboards',
    format: 'Operational intelligence, alerts, and executive views',
    description: 'Playbooks for dashboards, alerting, and storytelling instrumentation.',
  },
  {
    id: 'use-cases',
    title: 'Use Cases',
    format: 'Industry-specific stories + diagrams',
    description: 'Problem → solution → impact narratives with metric callouts.',
  },
  {
    id: 'research',
    title: 'Research',
    format: 'Benchmark studies, experiments, data drops',
    description: 'Experimental findings and benchmarking for advanced teams.',
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive & Prescriptive Analytics',
    format: 'Forecasting, risk, churn, and prescriptive playbooks',
    description: 'Benchmarks, frameworks, and outcomes from predictive pilots.',
  },
  {
    id: 'whitepapers',
    title: 'Whitepapers',
    format: 'Strategy docs and executive briefs',
    description: 'Downloadable playbooks for governance, ops, and AI roadmaps.',
  },
  {
    id: 'case-reports',
    title: 'Case Reports',
    format: 'Deep dives on enterprise & startup outcomes',
    description: 'Structured impact reports with metrics, ROI, and testimonials.',
  },
  {
    id: 'technical',
    title: 'Technical Papers',
    format: 'Engineering deep dives',
    description: 'Architecture patterns, MLOps pipelines, and CD/CI flows.',
  },
  {
    id: 'nlp',
    title: 'NLP Solutions',
    format: 'Sentiment, classification, search, retrieval',
    description: 'Notes on classification, search, and personalization pipelines.',
  },
  {
    id: 'resources',
    title: 'Resources',
    format: 'E-books, templates, AI tools',
    description: 'Reusable resources for planning, product, and growth teams.',
  },
  {
    id: 'automation',
    title: 'Automation & AI Agents',
    format: 'RPA, workflow automation, AI agents',
    description: 'Templates for automating operations and decision workflows.',
  },
  {
    id: 'trust',
    title: 'Trust & Compliance',
    format: 'Security, privacy, and audit-ready notes',
    description: 'Signals on governance, compliance, certifications, and controls.',
  },
  {
    id: 'news-media',
    title: 'News & Media',
    format: 'Press, announcements, events',
    description: 'Press releases, event recaps, and media mentions.',
  },
]

export default function InsightsHubGrid() {
  return (
    <section className="section-padding border-t border-white/10 bg-primary-dark/30">
      <div className="container-custom">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.5em] text-gray-400 mb-2">Insights landing</p>
          <h2 className="heading-2 text-white">Curated hubs to filter by format</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Explore latest commentary, operational playbooks, research, and media updates—organized by format and impact.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hubs.map((hub, index) => (
            <motion.article
              key={hub.id}
              id={hub.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="glass-panel rounded-3xl border border-white/10 p-6 h-full flex flex-col"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{hub.title}</h3>
                <span className="text-xs uppercase tracking-[0.4em] text-accent">Hub</span>
              </div>
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400 mt-4 mb-2">{hub.format}</p>
              <p className="text-sm text-gray-300 flex-grow">{hub.description}</p>
              <Link href={`/insights#${hub.id}`} className="mt-6 inline-flex items-center gap-2 text-accent text-sm font-semibold">
                View {hub.title.toLowerCase()}
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
