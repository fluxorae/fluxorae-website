'use client'

import { FormEvent, useState } from 'react'

export default function ProjectBriefForm() {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('submitted')
    setTimeout(() => setStatus('idle'), 6000)
  }

  return (
    <section className="section-padding border-t border-white/10">
      <div className="container-custom">
        <div className="glass-panel rounded-3xl border border-white/10 p-8 space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-gray-400 mb-2">Project Brief</p>
            <h2 className="heading-2 text-white">Share your challenge</h2>
            <p className="text-gray-400 max-w-3xl">
              Help us prepare before the call with outcomes, KPIs, data readiness, and integrations. We will sync schedules once submitted.
            </p>
          </div>
          {status === 'submitted' && (
            <div className="rounded-2xl bg-emerald-500/10 border border-emerald-300/40 p-4 text-sm text-emerald-100">
              Thanks! We received your brief and will follow up with a calendar link within 24 hours.
            </div>
          )}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <input
                required
                type="text"
                placeholder="Name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 focus:ring-2 focus:ring-accent focus:border-transparent text-white"
              />
              <input
                required
                type="text"
                placeholder="Company"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 focus:ring-2 focus:ring-accent focus:border-transparent text-white"
              />
            </div>
            <textarea
              required
              rows={4}
              placeholder="Describe the challenge / KPI you want to solve"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 focus:ring-2 focus:ring-accent focus:border-transparent text-white"
            />
            <textarea
              rows={3}
              placeholder="Data / systems involved (optional)"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 focus:ring-2 focus:ring-accent focus:border-transparent text-white"
            />
            <div className="grid gap-4 md:grid-cols-3">
              <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 focus:ring-2 focus:ring-accent focus:border-transparent text-white">
                <option>Preferred contact</option>
                <option>Email</option>
                <option>Phone/WhatsApp</option>
                <option>Video call</option>
              </select>
              <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 focus:ring-2 focus:ring-accent focus:border-transparent text-white">
                <option>Timeline</option>
                <option>ASAP</option>
                <option>Next 2 weeks</option>
                <option>Flexible</option>
              </select>
              <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 focus:ring-2 focus:ring-accent focus:border-transparent text-white">
                <option>Budget range</option>
                <option>₹35k - ₹65k</option>
                <option>₹65k - ₹95k</option>
                <option>Enterprise</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn-primary w-full px-6 py-3 rounded-full text-sm font-semibold"
            >
              Submit Brief & Schedule
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
