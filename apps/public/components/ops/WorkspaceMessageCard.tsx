'use client'

import { FormEvent, useState } from 'react'

const cardClass = 'rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4'

export default function WorkspaceMessageCard() {
  const [projectId, setProjectId] = useState('')
  const [body, setBody] = useState('Sharing updated scope document for review.')
  const [channel, setChannel] = useState('workspace')
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle')

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/workspace/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ projectId, body, channel }),
      })
      if (!res.ok) throw new Error('missing auth')
      setStatus('sent')
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <section className={cardClass}>
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Workspace chat</p>
        <h3 className="text-xl font-semibold text-white">Live message</h3>
        <p className="text-sm text-gray-300">Broadcast to `/api/workspace/messages` with a project context.</p>
      </div>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <input
          className="w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white"
          placeholder="Project ID"
          value={projectId}
          onChange={(event) => setProjectId(event.target.value)}
        />
        <textarea
          className="w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white"
          rows={3}
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
        <input
          className="w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white"
          placeholder="Channel"
          value={channel}
          onChange={(event) => setChannel(event.target.value)}
        />
        <button type="submit" className="btn-primary w-full text-sm" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending...' : 'Send message'}
        </button>
      </form>
      {status === 'sent' && <p className="text-xs text-emerald-300">Message recorded.</p>}
      {status === 'error' && <p className="text-xs text-red-300">Auth or project ID missing.</p>}
    </section>
  )
}
