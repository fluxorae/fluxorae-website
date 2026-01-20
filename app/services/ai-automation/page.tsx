import { Metadata } from 'next'
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'AI & Automation',
  description: 'Copilots, workflow automation, and data agents tuned to your stack—human-in-loop, secure, and shipped in weeks.',
}

const data = {
  title: 'AI & Automation',
  subtitle: 'Copilots • Agents • Workflow automation',
  description: 'Design and deploy AI copilots, workflow automations, and data agents that blend into your tools. Human-in-loop guardrails, observability, and cost controls baked in.',
  primaryCTA: { text: 'Book a Free Consultation', href: '/contact' },
  secondaryCTA: { text: 'View Case Studies', href: '/solutions' },
  painPoints: [
    'Manual, error-prone processes create bottlenecks and delays.',
    'Employees spend time on repetitive tasks instead of high-value work.',
    'No clear observability or governance for AI usage and costs.',
    'Response times lag; SLAs slip on support and ops tickets.',
  ],
  solutions: [
    'Workflow automation mapped to your existing apps and APIs.',
    'Domain-tuned copilots with retrieval, policies, and approvals.',
    'Agentic flows with role-based access, audit logs, and cost caps.',
    'Dashboards for latency, quality, and human override routes.',
  ],
  outcomes: [
    '-30–50% ops time in 6–8 weeks',
    'Human-in-loop approvals with auditability',
    'Better SLA adherence and faster turnaround',
    'Predictable cost controls on model usage',
  ],
  process: [
    { title: 'Assess & align', description: 'Map high-friction workflows, define success metrics, and pick quick-win automations.' },
    { title: 'Blueprint', description: 'Design prompts, retrieval, policies, and human-in-loop checkpoints.' },
    { title: 'Build & integrate', description: 'Ship automations and copilots into your stack with secure connectors.' },
    { title: 'Launch & govern', description: 'Roll out with RBAC, audit logs, monitoring, and feedback capture.' },
    { title: 'Scale & improve', description: 'Iterate on quality, add skills, and optimize cost/performance.' },
  ],
  stack: ['OpenAI / Anthropic', 'Vercel AI SDK', 'LangChain', 'Python', 'TypeScript', 'Postgres', 'Redis', 'Airflow', 'AWS / GCP'],
}

export default function Page() {
  return <ServiceDetailPage data={data} />
}
