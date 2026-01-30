'use client'

import { FormEvent, useState } from 'react'

const cardClass = 'rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4'

export default function AiAnalyzerCard() {
  const [name, setName] = useState('New product automation')
  const [description, setDescription] = useState('Automate service delivery with an AI + human workflow and guardrails for approvals.')
  const [domain, setDomain] = useState('automation')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [response, setResponse] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/ai/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ name, description, domain }),
      })
      if (!res.ok) {
        throw new Error('Unauthorized or server error')
      }
      const payload = await res.json()
      setResponse(JSON.stringify(payload, null, 2))
      setStatus('success')
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <section className={cardClass}>
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-gray-400">AI Analyzer</p>
        <h3 className="text-xl font-semibold text-white">Requirement insights</h3>
        <p className="text-sm text-gray-300">Submit a brief to `/api/ai/analyze` (credentials required) and log the advisory run.</p>
      </div>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <input
          className="w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <textarea
          className="w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white"
          rows={3}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          className="w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white"
          placeholder="Domain tag"
          value={domain}
          onChange={(event) => setDomain(event.target.value)}
        />
        <button
          type="submit"
          className="btn-primary w-full text-sm"
          disabled={status === 'loading' || status === 'success'}
        >
          {status === 'loading' ? 'Analyzing...' : 'Run advisor'}
        </button>
      </form>
      {response && (
        <pre className="max-h-32 overflow-auto rounded-2xl border border-white/20 bg-black/60 px-4 py-3 text-xs text-gray-200">
          {response}
        </pre>
      )}
      {status === 'error' && <p className="text-xs text-red-300">Check auth or server response.</p>}
    </section>
  )
}
