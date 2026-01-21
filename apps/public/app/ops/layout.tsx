import type { ReactNode } from 'react'
import NeonGrid from '@/components/common/NeonGrid'

export default function OpsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#0a0f24] to-[#0b132b] text-secondary">
      <NeonGrid />
      <div className="relative flex min-h-screen">
        <aside className="hidden lg:flex w-64 flex-col border-r border-white/10 bg-white/5 backdrop-blur-xl px-6 py-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-11 w-11 rounded-2xl bg-accent/20 border border-accent/40 flex items-center justify-center text-accent font-semibold">
              Fx
            </div>
            <div>
              <p className="text-sm text-gray-400">Fluxorae</p>
              <p className="text-lg font-semibold text-white">Ops Console</p>
            </div>
          </div>
          <nav className="space-y-2 text-sm text-gray-300">
            {[
              'Overview',
              'Projects',
              'Tickets',
              'Billing',
              'Automation',
              'Users',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-xl px-4 py-3 hover:bg-white/10 transition-colors"
              >
                <span>{item}</span>
                <span className="h-2 w-2 rounded-full bg-white/20" />
              </div>
            ))}
          </nav>
          <div className="mt-auto pt-10 space-y-3 text-sm text-gray-300">
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <div>
                <p className="text-xs text-gray-400">Status</p>
                <p className="text-white font-medium">Live & Healthy</p>
              </div>
            </div>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-4 py-3 text-white hover:border-accent transition-colors"
            >
              View Website
            </a>
          </div>
        </aside>

        <div className="flex-1 relative">
          <header className="sticky top-0 z-30 backdrop-blur border-b border-white/10 bg-primary/70">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3 lg:hidden">
                <div className="h-10 w-10 rounded-2xl bg-accent/20 border border-accent/40 flex items-center justify-center text-accent font-semibold">
                  Fx
                </div>
                <div>
                  <p className="text-sm text-gray-400">Fluxorae Ops</p>
                  <p className="text-lg font-semibold text-white">Mission Control</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-gray-200">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-500/10 px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Systems nominal
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-bharat-ashoka/30 bg-bharat-ashoka/10 px-3 py-1">
                  SLA 99.9%
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1">
                  AI Ops: On
                </span>
              </div>
            </div>
          </header>
          <main className="max-w-7xl mx-auto px-6 py-10">{children}</main>
        </div>
      </div>
    </div>
  )
}
