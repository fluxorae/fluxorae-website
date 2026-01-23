const certifications = ['ISO 27001', 'SOC 2 Type II', 'GDPR', 'HIPAA readiness']
const compliance = ['Data classification + governance', 'Security reviews + penetration testing', 'Audit-ready document packs']
const partners = ['AWS', 'OpenAI', 'Vercel', 'Cloudflare']

export default function TrustSection() {
  return (
    <section className="section-padding bg-primary-dark/30 border-t border-white/10">
      <div className="container-custom">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.5em] text-gray-400 mb-2">Trust & Partners</p>
          <h2 className="heading-2 text-white">Security, compliance, and partner confidence</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">Certifications, compliance guardrails, and trusted partners keep enterprise teams confident.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <article className="glass-panel rounded-3xl border border-white/10 p-6">
            <h3 className="text-white font-semibold text-lg mb-3">Certifications</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              {certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </article>
          <article className="glass-panel rounded-3xl border border-white/10 p-6">
            <h3 className="text-white font-semibold text-lg mb-3">Compliance</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              {compliance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="glass-panel rounded-3xl border border-white/10 p-6">
            <h3 className="text-white font-semibold text-lg mb-3">Partners</h3>
            <div className="flex flex-wrap gap-2">
              {partners.map((partner) => (
                <span key={partner} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200">
                  {partner}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
