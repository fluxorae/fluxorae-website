'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Users, MessageSquare, LogOut, BarChart3 } from 'lucide-react'

const navItems = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: BarChart3 },
  { href: '/admin/users', label: 'Users', icon: Users },
  { href: '/contact', label: 'Support', icon: MessageSquare },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    router.push('/admin/login')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-white border-r border-gray-200 p-6 space-y-6">
        <Link href="/" className="block text-2xl font-bold text-primary">
          Fluxorae
        </Link>
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = pathname?.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all ${
                  active
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon size={18} />
                <span className="font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>
        <button
          onClick={handleLogout}
          className="flex items-center space-x-2 text-sm text-gray-600 hover:text-primary transition-colors"
        >
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}
