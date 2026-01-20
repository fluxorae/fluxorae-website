import { NextResponse } from 'next/server'

export async function GET() {
  const summary = {
    metrics: [
      { label: 'Active Projects', value: 18, trend: '+3 this week' },
      { label: 'Tickets Open', value: 12, trend: '-5 since Monday' },
      { label: 'Invoices Due', value: 6, trend: '₹4.8L pending' },
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

  return NextResponse.json(summary, { status: 200 })
}
