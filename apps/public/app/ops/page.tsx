import { ArrowRight, Sparkles, Wifi, Zap, ShieldCheck, Activity, Cpu, Bell } from 'lucide-react'

type Summary = Awaited<ReturnType<typeof getSummary>>

async function getSummary() {
  const base = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  const res = await fetch(`${base}/api/ops/summary`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to load ops summary')
  const json = await res.json()
  return json as {
    metrics: { label: string; value: string | number; trend: string }[]
    timeline: { time: string; title: string; owner: string }[]
    tasks: { title: string; owner: string; status: string }[]
  }
}

const statusTone: Record<string, string> = {
  'In Progress': 'text-amber-200 bg-amber-500/10 border border-amber-300/20',
  Blocked: 'text-red-200 bg-red-500/10 border border-red-300/20',
  Ready: 'text-emerald-200 bg-emerald-500/10 border border-emerald-300/20',
}

export default async function OpsPage() {
  const data: Summary = await getSummary()

  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-[0_30px_80px_-40px_rgba(0,0,0,0.7)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.25),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(20,241,149,0.25),transparent_35%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-bharat-saffron/15 px-4 py-2 text-sm text-bharat-saffron">
              <Sparkles size={16} />
              Bharat-ready - AI Ops Online
            </div>
            <h1 className="text-4xl md:text-5xl font-display text-white leading-tight">
              Fluxorae Mission Control
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              Command center for projects, billing, tickets, and AI automations. Monitor, decide, and act with live signals.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-gray-200">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-500/10 px-4 py-2">
                <Zap size={16} /> Automation online
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-bharat-ashoka/40 bg-bharat-ashoka/10 px-4 py-2">
                <Wifi size={16} /> Uptime 99.9%
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <ShieldCheck size={16} /> Guardrails active
              </span>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {data.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/10 bg-primary-light/60 p-5 backdrop-blur-lg shadow-neon"
              >
                <p className="text-sm text-gray-400">{metric.label}</p>
                <p className="mt-2 text-3xl font-semibold text-white">{metric.value}</p>
                <p className="mt-1 text-xs text-emerald-200">{metric.trend}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Live timeline</p>
              <h2 className="text-2xl font-display text-white">Operational Events</h2>
            </div>
            <button className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:border-electric-soft/60 transition-colors">
              Export log <ArrowRight size={16} />
            </button>
          </div>
          <div className="space-y-4">
            {data.timeline.map((item) => (
              <div
                key={`${item.time}-${item.title}`}
                className="rounded-2xl border border-white/10 bg-primary-light/40 p-4 flex items-center justify-between"
              >
                <div>
                  <p className="text-xs text-gray-400">{item.time}</p>
                  <p className="text-white font-medium">{item.title}</p>
                  <p className="text-xs text-gray-400">Owner: {item.owner}</p>
                </div>
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Workflow</p>
              <h2 className="text-2xl font-display text-white">Tasks Stream</h2>
            </div>
            <span className="text-xs text-gray-400">AI-assisted</span>
          </div>
          <div className="space-y-4">
            {data.tasks.map((task) => (
              <div
                key={task.title}
                className="rounded-2xl border border-white/10 bg-primary-light/50 p-4 flex items-center justify-between"
              >
                <div>
                  <p className="text-white font-medium">{task.title}</p>
                  <p className="text-xs text-gray-400">Owner: {task.owner}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusTone[task.status] || 'text-gray-200 border border-white/10'}`}>
                  {task.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl space-y-4">
          <div className="flex items-center gap-2 text-white font-semibold text-lg">
            <Activity size={18} /> System Health
          </div>
          <p className="text-sm text-gray-300">No active incidents. Monitoring pipelines and AI agents stable.</p>
          <div className="flex flex-wrap gap-2 text-xs text-gray-200">
            <span className="px-3 py-1 rounded-full border border-emerald-300/30 bg-emerald-500/10">All services healthy</span>
            <span className="px-3 py-1 rounded-full border border-white/20 bg-white/10">Latency normal</span>
            <span className="px-3 py-1 rounded-full border border-accent/30 bg-accent/10">AI guardrails active</span>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl space-y-4">
          <div className="flex items-center gap-2 text-white font-semibold text-lg">
            <Cpu size={18} /> Automation
          </div>
          <p className="text-sm text-gray-300">Recent automations executed within budget and SLAs.</p>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>- AI Ops triage: running</li>
              <li>- Lead nurture sequences: active</li>
              <li>- Report generation: scheduled</li>
            </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl space-y-4">
          <div className="flex items-center gap-2 text-white font-semibold text-lg">
            <Bell size={18} /> Alerts & SLAs
          </div>
          <p className="text-sm text-gray-300">No SLA breaches in the last 24h. Notifications routed to on-call.</p>
          <div className="flex flex-wrap gap-2 text-xs text-gray-200">
            <span className="px-3 py-1 rounded-full border border-emerald-300/30 bg-emerald-500/10">SLA 99.9%</span>
            <span className="px-3 py-1 rounded-full border border-white/20 bg-white/10">On-call: Ready</span>
            <span className="px-3 py-1 rounded-full border border-bharat-saffron/30 bg-bharat-saffron/10">Playbooks updated</span>
          </div>
        </div>
      </div>
    </div>
  )
}
