import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Case Studies | Fluxorae",
  description: "Browse Fluxorae case studies with outcomes across local SEO, performance, and conversion.",
}

const caseStudies = [
  {
    slug: '/case-study-rented-runway',
    title: 'The Rented Runway - Bridal & Gown Rentals (Dehradun)',
    summary:
      'Local SEO, UX uplift, and conversion-first layout for a fashion rental boutique with sticky CTAs and structured data.',
    tags: ['Local SEO', 'Lead gen', 'Performance'],
  },
  {
    slug: '/case-study-rk-petals',
    title: 'RK Petals & Decor - Wedding & Event Decoration (Kanpur)',
    summary: 'Lean, mobile-first presence with localized intent coverage and sticky WhatsApp/Call CTAs.',
    tags: ['Local SEO', 'UX', 'Services IA'],
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="bg-primary text-secondary">
      <div className="container-custom py-16 space-y-10">
        <header className="space-y-3 max-w-3xl">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs uppercase tracking-wide text-accent">
            Case studies
          </p>
          <h1 className="heading-2">Proof of delivery across local SEO and performance-first builds.</h1>
          <p className="text-secondary/80">
            Browse recent rollouts. Each page details problem, strategy, sections, schema, and CTA flows. Use the links below to open full case pages or jump to sub-sections.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <article key={study.slug} className="panel h-full flex flex-col gap-4">
              <div className="space-y-2">
                <h2 className="text-white text-xl font-semibold">{study.title}</h2>
                <p className="text-secondary/85 text-sm leading-relaxed">{study.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-secondary/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-auto">
                <Link href={study.slug} className="btn-secondary inline-flex items-center gap-2">
                  View full case
                </Link>
                <Link href={`${study.slug}#contact`} className="btn-primary inline-flex items-center gap-2">
                  Jump to CTA
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}
