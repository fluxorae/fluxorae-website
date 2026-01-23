const cultureHighlights = [
  {
    title: 'Life at Fluxorae',
    description:
      'Hybrid-first teams, weekly demos, and studio days that blend engineering rigor with creative exploration.',
    label: 'People first',
  },
  {
    title: 'Diversity & Inclusion',
    description:
      'Inclusive hiring, mentorship, and equitable opportunity across India, the US, and Europe.',
    label: 'Belonging',
  },
  {
    title: 'Work Ethics',
    description:
      'Transparent communication, measurable outcomes, and accountability for each sprint commitment.',
    label: 'Integrity',
  },
]

export default function CultureHighlights() {
  return (
    <section className="section-padding border-t border-white/10 bg-primary-dark/20">
      <div className="container-custom">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.5em] text-gray-400 mb-2">Culture</p>
          <h2 className="heading-2 text-white">Values reflected in our teams</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">Life at Fluxorae blends high-velocity delivery with human-first collaboration.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {cultureHighlights.map((highlight) => (
            <article key={highlight.title} className="glass-panel rounded-3xl border border-white/10 p-6 h-full">
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-3">{highlight.label}</p>
              <h3 className="text-white text-xl font-semibold mb-3">{highlight.title}</h3>
              <p className="text-gray-300 text-sm">{highlight.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
