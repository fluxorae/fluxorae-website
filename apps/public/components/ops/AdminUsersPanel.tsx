'use client'

import { useEffect, useState } from 'react'
import { UserDto } from '@/types/api'

const cardClass = 'rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4'

export default function AdminUsersPanel() {
  const [users, setUsers] = useState<UserDto[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/admin/users', { credentials: 'include' })
      .then((res) => {
        if (!res.ok) {
          throw new Error('admin token required')
        }
        return res.json()
      })
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message))
  }, [])

  return (
    <section className={cardClass}>
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Admin</p>
        <h3 className="text-xl font-semibold text-white">User control</h3>
        <p className="text-sm text-gray-300">Lists `/api/admin/users` for platform governance.</p>
      </div>
      {error && <p className="text-xs text-red-300">{error}</p>}
      <div className="space-y-3 max-h-48 overflow-y-auto">
        {users?.map((user) => (
          <div key={user.id} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-xs text-gray-200">
            <div>
              <p className="font-semibold text-white">{user.email}</p>
              <p className="text-[10px] text-gray-400">
                {user.role} • {user.status}
              </p>
            </div>
            <p className="text-[10px] text-gray-400">{user.firstName || '—'}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
