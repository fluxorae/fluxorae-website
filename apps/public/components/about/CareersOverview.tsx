const openPositions = [
  { title: 'AI Product Engineer', location: 'Remote (IN/US)', type: 'Full-time' },
  { title: 'ML Ops Engineer', location: 'Hybrid (India)', type: 'Full-time' },
  { title: 'Growth Strategist', location: 'Remote (Global)', type: 'Full-time' },
  { title: 'Design Systems Lead', location: 'Hybrid (Bengaluru)', type: 'Full-time' },
]

const hiringSteps = ['Share your project brief', 'Meet the squad leads', 'Review roadmap + SLA']

export default function CareersOverview() {
  return (
    <section className="section-padding border-y border-white/10">
      <div className="container-custom space-y-10">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-gray-400 mb-2">Careers</p>
          <h2 className="heading-2 text-white">Join Fluxorae</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">Open roles, internships, and a thoughtful hiring process that respects your time.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="glass-panel rounded-3xl border border-white/10 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Open Positions</h3>
            <ul className="space-y-4">
              {openPositions.map((position) => (
                <li key={position.title} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <p className="text-white font-semibold">{position.title}</p>
                    <span className="text-xs uppercase tracking-[0.4em] text-accent">{position.type}</span>
                  </div>
                  <p className="text-sm text-gray-400">{position.location}</p>
                </li>
              ))}
            </ul>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-400 mt-4">Internships</p>
            <p className="text-sm text-gray-300">
              Structured internships across AI, product, and growth with mentorship, hands-on projects, and direct leadership access.
            </p>
          </div>
          <div className="glass-panel rounded-3xl border border-white/10 p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Hiring Process</h3>
            <ol className="space-y-3 text-sm text-gray-300 list-decimal list-inside">
              {hiringSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="text-gray-400 mt-4">
              Fast feedback loops, transparent evaluation rubrics, and NDA options for confidential discussions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
