import { BarChart3, ShieldCheck, Users } from 'lucide-react'
import AdminLayout from '@/components/admin/AdminLayout'

const cards = [
  { title: 'Active Users', value: '1,248', icon: Users, tone: 'bg-blue-50 text-blue-700' },
  { title: 'Open Tickets', value: '12', icon: ShieldCheck, tone: 'bg-amber-50 text-amber-700' },
  { title: 'Uptime', value: '99.9%', icon: BarChart3, tone: 'bg-emerald-50 text-emerald-700' },
]

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-sm text-gray-500">Operational overview</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <div key={card.title} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">{card.title}</p>
                  <span className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold ${card.tone}`}>
                    <Icon size={16} className="mr-2" />
                    Status
                  </span>
                </div>
                <p className="mt-3 text-2xl font-semibold text-gray-900">{card.value}</p>
              </div>
            )
          })}
        </div>
      </div>
    </AdminLayout>
  )
}
