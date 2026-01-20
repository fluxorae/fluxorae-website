import { Metadata } from 'next'
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Data, Cloud & DevOps',
  description: 'Modernize cloud, ship reliable platforms, and deliver governed data/analytics for decision-making.',
}

const data = {
  title: 'Data, Cloud & DevOps',
  subtitle: 'Cloud • SRE • Data & Analytics',
  description: 'Modernize infrastructure, add SRE-grade reliability, and build governed data/analytics so teams can ship fast and decide faster.',
  primaryCTA: { text: 'Book an Architecture Review', href: '/contact' },
  secondaryCTA: { text: 'See Outcomes', href: '/solutions' },
  painPoints: [
    'Unreliable infra, outages, and slow incident response.',
    'Rising cloud costs without visibility or controls.',
    'Fragmented data with slow reporting and low trust.',
    'No observability or runbooks for on-call teams.',
  ],
  solutions: [
    'Cloud modernization with IaC, security baselines, and CI/CD.',
    'SRE practices: SLIs/SLOs, incident playbooks, and monitoring.',
    'Data pipelines and governed models for analytics and AI.',
    'FinOps visibility and cost optimization levers.',
  ],
  outcomes: [
    '99.9%+ uptime targets with clear SLOs',
    'Faster incident response and remediation',
    'Trusted dashboards and faster decisions',
    'Cloud spend visibility with cost controls',
  ],
  process: [
    { title: 'Assess', description: 'Review architecture, reliability gaps, and data posture; set SLOs and targets.' },
    { title: 'Architect', description: 'Design IaC, security baselines, observability, and data contracts.' },
    { title: 'Implement', description: 'Build pipelines, infra, and monitoring with CI/CD and policy guardrails.' },
    { title: 'Harden', description: 'Load tests, chaos drills, cost reviews, and runbooks for incidents.' },
    { title: 'Operate', description: 'Ongoing SRE, FinOps reviews, and data quality management.' },
  ],
  stack: ['AWS / GCP', 'Docker / ECS / Kubernetes', 'Terraform', 'Postgres / BigQuery', 'Airflow', 'dbt', 'Prometheus / Grafana', 'Datadog'],
}

export default function Page() {
  return <ServiceDetailPage data={data} />
}
