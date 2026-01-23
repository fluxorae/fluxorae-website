const partners = ['Arcadia Health', 'Nova Bank', 'Pivot Retail', 'Vantage Logistics', 'Satori SaaS', 'Atlas Manufacturing', 'Helix Finance', 'Solstice Energy']

export default function TrustedBy() {
  return (
    <section className="section-padding border-t border-white/10 bg-primary-dark/20">
      <div className="container-custom">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.5em] text-gray-400">Trusted by</p>
          <h2 className="heading-2 text-white mt-2">Global teams counting on Fluxorae</h2>
          <p className="text-gray-400 mt-3 max-w-3xl mx-auto">
            Enterprise merchants, health systems, and fintech leaders rely on our hybrid consulting + engineering pods to deliver secure AI systems with continuous ROI tracking.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {partners.map((partner) => (
            <div key={partner} className="glass-panel rounded-2xl bg-white/5 border border-white/10 px-4 py-6 text-center text-sm text-gray-200 font-semibold">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
