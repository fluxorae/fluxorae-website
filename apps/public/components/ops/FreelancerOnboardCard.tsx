'use client'

import { FormEvent, useState } from 'react'

const cardClass = 'rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4'

export default function FreelancerOnboardCard() {
  const [skills, setSkills] = useState('automation, ai, ops')
  const [headline, setHeadline] = useState('AI Automation Specialist')
  const [location, setLocation] = useState('Remote')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/freelancers/onboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          headline,
          skills: skills.split(',').map((skill) => skill.trim()).filter(Boolean),
          location,
        }),
      })
      if (!res.ok) throw new Error('Unauthorized')
      const payload = await res.json()
      setMessage(JSON.stringify(payload, null, 2))
      setStatus('success')
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <section className={cardClass}>
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Freelancer onboarding</p>
        <h3 className="text-xl font-semibold text-white">Heartbeat sync</h3>
        <p className="text-sm text-gray-300">Push verified talent into `/api/freelancers/onboard` and log the profile.</p>
      </div>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <input
          className="w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white"
          placeholder="Headline"
          value={headline}
          onChange={(event) => setHeadline(event.target.value)}
        />
        <input
          className="w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white"
          placeholder="Location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
        <input
          className="w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white"
          placeholder="Skills (comma separated)"
          value={skills}
          onChange={(event) => setSkills(event.target.value)}
        />
        <button type="submit" className="btn-primary w-full text-sm" disabled={status === 'loading'}>
          {status === 'loading' ? 'Onboarding...' : 'Onboard freelancer'}
        </button>
      </form>
      {message && <pre className="max-h-28 overflow-auto rounded-2xl border border-white/20 bg-black/60 px-4 py-3 text-xs text-gray-200">{message}</pre>}
      {status === 'error' && <p className="text-xs text-red-300">Needs authenticated admin/freelancer token.</p>}
    </section>
  )
}
