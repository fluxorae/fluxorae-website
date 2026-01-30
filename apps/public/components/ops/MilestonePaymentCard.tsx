'use client'

import { FormEvent, useState } from 'react'

const cardClass = 'rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4'

export default function MilestonePaymentCard() {
  const [milestoneId, setMilestoneId] = useState('')
  const [amount, setAmount] = useState('100000')
  const [provider, setProvider] = useState('stripe')
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle')

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`/api/payments/milestones/${encodeURIComponent(milestoneId)}/pay`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ amountCents: Number(amount), provider }),
      })
      if (!res.ok) throw new Error('payment failed')
      setStatus('sent')
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <section className={cardClass}>
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Payments</p>
        <h3 className="text-xl font-semibold text-white">Milestone capture</h3>
        <p className="text-sm text-gray-300">Route milestone payments via `/api/payments/milestones/:id/pay` with QA hold.</p>
      </div>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <input
          className="w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white"
          placeholder="Milestone ID"
          value={milestoneId}
          onChange={(event) => setMilestoneId(event.target.value)}
        />
        <input
          className="w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white"
          placeholder="Amount in cents"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <input
          className="w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white"
          placeholder="Provider"
          value={provider}
          onChange={(event) => setProvider(event.target.value)}
        />
        <button type="submit" className="btn-primary w-full text-sm" disabled={status === 'loading'}>
          {status === 'loading' ? 'Charging...' : 'Record payment'}
        </button>
      </form>
      {status === 'sent' && <p className="text-xs text-emerald-300">Payment queued.</p>}
      {status === 'error' && <p className="text-xs text-red-300">Requires milestone and auth.</p>}
    </section>
  )
}
