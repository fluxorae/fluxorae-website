import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

type SummaryPayload = {
  metrics: { label: string; value: string | number; trend: string }[]
  timeline: { time: string; title: string; owner: string }[]
  tasks: { title: string; owner: string; status: string }[]
}

const fallback: SummaryPayload = {
  metrics: [
    { label: 'Active Projects', value: 18, trend: '+3 this week' },
    { label: 'Tickets Open', value: 12, trend: '-5 since Monday' },
    { label: 'Invoices Due', value: 6, trend: 'INR 4.8L pending' },
    { label: 'Uptime', value: '99.9%', trend: 'Green' },
  ],
  timeline: [
    { time: '09:10', title: 'AI generated status report', owner: 'Agent Pulse' },
    { time: '10:05', title: 'New client onboarded (Acme)', owner: 'Admin' },
    { time: '11:20', title: 'Invoice paid (Razorpay)', owner: 'Billing' },
    { time: '12:00', title: 'Ticket resolved: VPN access', owner: 'Support' },
  ],
  tasks: [
    { title: 'Prepare GST invoice batch', owner: 'Finance', status: 'In Progress' },
    { title: 'Migrate staging to RDS 16', owner: 'DevOps', status: 'Blocked' },
    { title: 'AI auto-reply templates', owner: 'Ops AI', status: 'Ready' },
    { title: 'Mobile app handoff', owner: 'Product', status: 'In Progress' },
  ],
}

export async function GET() {
  const skipDb = process.env.SKIP_DB === '1' || process.env.NEXT_PHASE === 'phase-production-build'

  // If DATABASE_URL is not set or we explicitly skip DB (e.g., during static build), return fallback
  if (skipDb || !process.env.DATABASE_URL) {
    return NextResponse.json<SummaryPayload>(fallback, { status: 200 })
  }

  try {
    const [projectsCount, ticketsCount, invoicesDue] = await Promise.all([
      prisma.project.count(),
      prisma.ticket.count({ where: { status: { not: 'CLOSED' } } }),
      prisma.invoice.count({ where: { status: { in: ['DUE', 'OVERDUE'] } } }),
    ])

    const metrics = [
      { label: 'Active Projects', value: projectsCount, trend: 'Live' },
      { label: 'Tickets Open', value: ticketsCount, trend: 'Live' },
      { label: 'Invoices Due', value: invoicesDue, trend: 'Live' },
      { label: 'Uptime', value: '99.9%', trend: 'Ping' },
    ]

    // Minimal timeline/tasks placeholders until activity feed wired
    const timeline = fallback.timeline
    const tasks = fallback.tasks

    return NextResponse.json<SummaryPayload>({ metrics, timeline, tasks }, { status: 200 })
  } catch (err) {
    console.warn('ops/summary fallback', err)
    return NextResponse.json<SummaryPayload>(fallback, { status: 200 })
  }
}
