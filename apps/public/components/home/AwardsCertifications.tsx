const accolades = [
  { title: 'AI Excellence Award 2025', detail: 'Operational automation for enterprise logistics' },
  { title: 'Security Leadership Award', detail: 'Zero-trust delivery for fintech & health' },
  { title: 'ISO 27001', detail: 'Certified controls across delivery and cloud' },
  { title: 'SOC 2 Type II', detail: 'Continuous monitoring & audit readiness' },
  { title: 'GDPR + HIPAA Compliance', detail: 'Privacy by design for regulated industries' },
  { title: 'AWS Advanced Partner', detail: 'Multi-cloud architecture & migrations' },
]

export default function AwardsCertifications() {
  return (
    <section className="section-padding border-t border-white/10 bg-primary-dark/30">
      <div className="container-custom">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.5em] text-gray-400 mb-2">Awards & certifications</p>
          <h2 className="heading-2 text-white">Proof that Fluxorae stays secure and recognized</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">Badges, certifications, and industry recognition that reassure compliance-conscious teams.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {accolades.map((item) => (
            <div key={item.title} className="glass-panel rounded-3xl p-6 border border-white/10">
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-1">Badge</p>
              <h3 className="text-lg text-white font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-300 mt-3">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
