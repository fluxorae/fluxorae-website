import { BarChart3, ShieldCheck, Users, Clock3, AlertTriangle, ArrowUpRight, CheckCircle } from 'lucide-react'
import AdminLayout from '@/components/admin/AdminLayout'

const kpis = [
  { title: 'Active Users', value: '1,248', change: '+6.2%', icon: Users, tone: 'text-emerald-400 bg-emerald-500/10' },
  { title: 'Open Tickets', value: '12', change: '-3 vs last week', icon: ShieldCheck, tone: 'text-amber-300 bg-amber-500/10' },
  { title: 'Uptime', value: '99.9%', change: '24h rolling', icon: BarChart3, tone: 'text-sky-300 bg-sky-500/10' },
]

const priorities = [
  { label: 'SLA tickets', value: 4, state: 'High' },
  { label: 'Deployments queued', value: 2, state: 'Medium' },
  { label: 'Integrations stable', value: 12, state: 'Healthy' },
]

const alerts = [
  { title: 'Payment webhook retries reduced', time: '15m ago', severity: 'info' },
  { title: 'SEO sitemap revalidation complete', time: '1h ago', severity: 'success' },
  { title: 'Form error rate slightly elevated on /contact', time: '2h ago', severity: 'warning' },
]

const projects = [
  { name: 'Fluxorae.com refresh', owner: 'Growth', status: 'In QA', eta: 'Sep 05' },
  { name: 'Ops portal hardening', owner: 'Ops', status: 'In progress', eta: 'Sep 12' },
  { name: 'Case studies rollout', owner: 'Marketing', status: 'Live', eta: 'Done' },
]

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="rounded-2xl border border-white/10 bg-primary-dark/50 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wide">Operations overview</p>
              <h1 className="text-white text-3xl font-semibold">Admin Dashboard</h1>
              <p className="text-secondary/80">Monitor usage, SLAs, and release status in one glance.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="inline-flex items-center gap-2 rounded-full bg-accent/10 text-accent px-4 py-2 text-sm font-semibold border border-accent/30">
                <ArrowUpRight size={16} /> View reports
              </button>
              <button className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-4 py-2 text-sm font-semibold border border-white/15">
                <Clock3 size={16} /> Schedule sync
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {kpis.map((kpi) => {
            const Icon = kpi.icon
            return (
              <div
                key={kpi.title}
                className="rounded-2xl border border-white/10 bg-primary-dark/60 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-center justify-between">
                  <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${kpi.tone}`}>
                    <Icon size={16} />
                    {kpi.title}
                  </div>
                  <span className="text-accent text-xs font-semibold">{kpi.change}</span>
                </div>
                <p className="mt-3 text-3xl font-semibold text-white">{kpi.value}</p>
                <p className="text-secondary/70 text-sm">Last 24h</p>
              </div>
            )
          })}
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-primary-dark/60 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between">
              <h2 className="text-white font-semibold text-lg">Health snapshot</h2>
              <CheckCircle className="text-emerald-400" size={18} />
            </div>
            <div className="mt-3 space-y-3">
              {priorities.map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-3">
                  <div>
                    <p className="text-white font-semibold text-sm">{item.label}</p>
                    <p className="text-secondary/70 text-xs">Latest check-in</p>
                  </div>
                  <span className="text-accent text-sm font-semibold">{item.value} · {item.state}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-primary-dark/60 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between">
              <h2 className="text-white font-semibold text-lg">Recent alerts</h2>
              <AlertTriangle className="text-amber-300" size={18} />
            </div>
            <div className="mt-3 space-y-3">
              {alerts.map((alert) => (
                <div key={alert.title} className="rounded-xl bg-white/5 px-3 py-2">
                  <p className="text-white text-sm font-semibold">{alert.title}</p>
                  <p className="text-secondary/70 text-xs">{alert.time}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-primary-dark/60 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between">
              <h2 className="text-white font-semibold text-lg">Projects</h2>
              <Clock3 className="text-secondary/70" size={18} />
            </div>
            <div className="mt-3 space-y-3">
              {projects.map((project) => (
                <div key={project.name} className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-3">
                  <div>
                    <p className="text-white text-sm font-semibold">{project.name}</p>
                    <p className="text-secondary/70 text-xs">{project.owner}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-accent text-sm font-semibold">{project.status}</p>
                    <p className="text-secondary/70 text-xs">ETA {project.eta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
