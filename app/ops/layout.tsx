import type { ReactNode } from 'react'
import NeonGrid from '@/components/common/NeonGrid'

export default function OpsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#0a0f24] to-[#0b132b] text-secondary">
      <NeonGrid />
      <div className="relative">
        <header className="sticky top-0 z-30 backdrop-blur border-b border-white/10 bg-primary/60">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-accent/20 border border-accent/40 flex items-center justify-center text-accent font-semibold">
                Fx
              </div>
              <div>
                <p className="text-sm text-gray-400">Fluxorae Ops</p>
                <p className="text-lg font-semibold text-white">Mission Control</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Live systems healthy
            </div>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-6 py-10">{children}</main>
      </div>
    </div>
  )
}
