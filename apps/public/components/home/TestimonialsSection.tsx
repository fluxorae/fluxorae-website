const testimonials = [
  {
    quote: 'Fluxorae’s AI pods cut our incident response time by half while increasing conversion clarity across the funnel.',
    name: 'Maya Singh',
    title: 'VP of Growth, Satori SaaS',
    metric: 'Pipeline lift: 2.3x',
  },
  {
    quote: 'Their teams modeled critical patient flows with accuracy dashboards and compliance guardrails we could trust.',
    name: 'Dr. Liam Rhodes',
    title: 'Chief Data Officer, Arcadia Health',
    metric: 'Accuracy uplift: 12%',
  },
  {
    quote: 'We launched a generative assistant weeks after kickoff and it immediately handled 38% of support tickets.',
    name: 'Priya Kapoor',
    title: 'Head of Ops, Helix Finance',
    metric: 'Support automation uptime: 24/7',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-primary-dark/30 border-t border-white/10">
      <div className="container-custom">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.5em] text-gray-400 mb-2">Testimonials</p>
          <h2 className="heading-2 text-white">People who count on Fluxorae</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">Quotes sourced from practitioners aligning AI, product, and operational rigor.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="glass-panel rounded-3xl p-6 border border-white/10 h-full flex flex-col justify-between">
              <p className="text-gray-200 leading-relaxed mb-5">“{testimonial.quote}”</p>
              <div>
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.title}</p>
                <p className="text-xs uppercase tracking-[0.4em] text-accent mt-2">{testimonial.metric}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
