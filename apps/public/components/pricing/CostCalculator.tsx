'use client'

import { useState } from 'react'

const complexityLabels = ['Pilot / MVP', 'Early rollout', 'Multi-team', 'Global launch', 'Enterprise scale']

export default function CostCalculator() {
  const [complexity, setComplexity] = useState(3)
  const [scope, setScope] = useState(2)

  const baseRate = 35000
  const scopeMultiplier = 8000
  const complexityMultiplier = 1 + complexity * 0.07
  const estimate = Math.round((baseRate + scope * scopeMultiplier) * complexityMultiplier)

  return (
    <section className="motion-safe:transition-all section-padding bg-primary-dark/30 border border-white/10 rounded-3xl">
      <div className="container-custom">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-5">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Cost calculator</p>
              <h3 className="heading-3 text-white">Estimate based on scope + complexity</h3>
            </div>
            <div className="space-y-4">
              <label className="text-sm text-gray-300 flex justify-between">
                <span>Complexity</span>
                <span className="text-accent">{complexityLabels[complexity - 1]}</span>
              </label>
              <input
                type="range"
                min={1}
                max={5}
                value={complexity}
                onChange={(event) => setComplexity(Number(event.target.value))}
                className="w-full accent-accent"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-300 flex justify-between">
                <span>Scope (deliverable sets)</span>
                <span className="text-accent">{scope * 2} deliverables</span>
              </label>
              <input
                type="range"
                min={1}
                max={5}
                value={scope}
                onChange={(event) => setScope(Number(event.target.value))}
                className="w-full accent-accent"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Starting estimate</p>
            <p className="text-4xl font-bold text-white mt-3">₹{estimate.toLocaleString('en-IN')}</p>
            <p className="text-sm text-gray-400 mt-2">
              Ballpark range for scoped MVPs and pilots; final quote depends on integrations, governance, and support.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
