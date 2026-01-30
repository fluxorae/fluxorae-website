'use client'

import { useEffect, useState } from 'react'
import { ProjectDto } from '@/types/api'

const cardClass = 'rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4'

export default function ProjectsPanel() {
  const [projects, setProjects] = useState<ProjectDto[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/projects', { credentials: 'include' })
      .then((res) => {
        if (!res.ok) {
          throw new Error('auth required')
        }
        return res.json()
      })
      .then((data) => setProjects(data))
      .catch((err) => setError(err.message))
  }, [])

  return (
    <section className={cardClass}>
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Projects</p>
        <h3 className="text-xl font-semibold text-white">Project list</h3>
        <p className="text-sm text-gray-300">Calls `/api/projects` with credentials to populate scope and milestones.</p>
      </div>
      {error && <p className="text-xs text-red-300">{error}</p>}
      <div className="space-y-3">
        {projects && projects.length === 0 && <p className="text-sm text-gray-400">No projects yet.</p>}
        {projects?.map((project) => (
          <div key={project.id} className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-xs text-gray-200">
            <p className="font-semibold text-white">{project.name}</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">{project.status}</p>
            <p className="text-[11px] text-gray-300">Budget {project.estimatedBudget ?? 'TBD'}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
