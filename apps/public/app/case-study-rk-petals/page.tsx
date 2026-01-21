import Link from 'next/link'

export const metadata = {
  title: 'RK Petals and Decor Kanpur Case Study | Fluxorae',
  description: 'Local SEO + UX uplift for wedding and event decoration in Kanpur by Fluxorae Private Limited.',
  alternates: { canonical: 'https://www.fluxorae.com/case-studies/rk-petals' },
  openGraph: {
    title: 'RK Petals and Decor Kanpur Case Study',
    description: 'Local SEO + UX uplift for wedding & event decoration in Kanpur.',
    url: 'https://www.fluxorae.com/case-studies/rk-petals',
    type: 'article',
    images: [{ url: '/og-rk-petals.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RK Petals and Decor Kanpur Case Study',
    description: 'Local SEO + UX uplift for wedding & event decoration in Kanpur.',
    images: ['/og-rk-petals.png'],
  },
}

const cards = {
  overview: [
    'Brand: RK Petals and Decor',
    'Location: Kanpur (wedding & event decoration)',
    'Services: Wedding decor, Haldi, Mehendi, floral themes, stage/backdrop styling',
  ],
  problems: [
    'Low visibility for Kanpur-specific wedding decor searches.',
    'Scattered service info without clear “check availability” CTAs.',
    'No structured FAQs or gallery cues to build trust pre-sales.',
  ],
  goals: [
    'Improve discovery for “wedding decoration in Kanpur” and “Haldi/Mehendi decor Kanpur”.',
    'Drive WhatsApp/call leads with clear dual CTAs.',
    'Show process, packages, and trust signals (timelines, coordination, hygiene).',
  ],
  strategy: [
    'Local SEO on-page: Kanpur + service keywords in H1/H2; LocalBusiness + FAQ schema.',
    'IA: Hero → Services → Process → Portfolio placeholders → FAQs → CTA.',
    'Conversion: sticky WhatsApp, dual CTAs, short form.',
    'Performance: lean components; ready for CDN images.',
  ],
  process: [
    'Discovery: mapped Kanpur intents (wedding decor, Haldi, Mehendi, floral stage).',
    'IA & copy: service cards with benefits and deliverables.',
    'SEO & schema: metadata, FAQ, LocalBusiness.',
    'UX: sticky CTA, scannable cards, mobile-first spacing.',
  ],
  tech: ['Next.js App Router', 'TypeScript + React', 'Tailwind CSS', 'No heavy external libs'],
  results: [
    'Clearer service pathways with direct CTAs.',
    'Better local relevance for Kanpur decor queries.',
    'Lean build for faster mobile performance.',
  ],
  faq: [
    ['Do you handle wedding decor in Kanpur?', 'Yes, full-service wedding decor with themes, stage, entrance, and seating.'],
    ['Can you manage Haldi and Mehendi decor separately?', 'Yes, dedicated Haldi/Mehendi setups with floral and color-focused themes.'],
    ['How do I check availability?', 'Use the contact form or WhatsApp to confirm date, venue, and theme.'],
    ['Do you provide floral themes?', 'Yes, fresh and artificial floral options with backdrops and table styling.'],
    ['Can you coordinate with venues?', 'Yes, we coordinate with venue teams for layouts, power, and timelines.'],
  ],
}

export default function RkPetalsCaseStudy() {
  const card =
    'bg-primary-dark/40 border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-6'
  return (
    <div className="bg-primary text-secondary">
      <header className="container-custom py-14">
        <p className="inline-flex px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm text-white">
          Case Study • Wedding & Event Decor • Kanpur
        </p>
        <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-white">
          RK Petals and Decor — Wedding & Event Decoration in Kanpur
        </h1>
        <p className="mt-3 text-lg text-secondary/90 max-w-3xl">
          Fluxorae Private Limited delivered a conversion-first, locally-optimized presence for RK Petals and Decor’s wedding, Haldi, Mehendi, and floral themes in Kanpur.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a className="bg-gradient-to-r from-accent to-amber-300 text-primary font-semibold px-5 py-3 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 transition" href="#contact">
            Book consultation
          </a>
          <a className="border border-white/20 text-white px-5 py-3 rounded-full hover:bg-white/10 transition" href="#process">
            See process
          </a>
          <Link className="text-accent hover:underline" href="/case-study-rented-runway">
            View The Rented Runway (Dehradun)
          </Link>
        </div>
      </header>

      <main className="container-custom space-y-10 pb-16">
        <Card title="Client Overview"><List items={cards.overview} /></Card>
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="Business Problem"><List items={cards.problems} /></Card>
          <Card title="Goals"><List items={cards.goals} /></Card>
        </div>
        <Card title="Solution & Strategy"><List items={cards.strategy} /></Card>
        <Card id="process" title="Process / Workflow"><List ordered items={cards.process} /></Card>
        <Card title="Technology Used"><List items={cards.tech} /></Card>
        <Card title="Results (qualitative)"><List items={cards.results} /></Card>

        <Card title="Service Snapshot (placeholders)">
          <div className="grid md:grid-cols-3 gap-3">
            {['Wedding decor', 'Haldi decor', 'Mehendi decor', 'Floral themes', 'Stage & backdrop', 'Entrance & table styling'].map((s) => (
              <div key={s} className="border border-white/10 rounded-xl p-4 bg-white/5">
                <div className="h-24 mb-3 rounded-lg bg-white/5 border border-dashed border-white/15 flex items-center justify-center text-sm text-secondary/70">
                  Image placeholder
                </div>
                <h4 className="text-white font-semibold">{s}</h4>
                <p className="text-sm text-secondary/85">Describe theme, deliverables, and timeline.</p>
              </div>
            ))}
          </div>
        </Card>

        <Card title="FAQ">
          <div className="divide-y divide-white/10">
            {cards.faq.map(([q, a]) => (
              <div key={q} className="py-3">
                <h4 className="text-white font-semibold">{q}</h4>
                <p className="text-secondary/85 text-sm">{a}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Related Links">
          <div className="flex flex-wrap gap-3 text-sm">
            <Link className="text-accent hover:underline" href="/services">Services</Link>
            <Link className="text-accent hover:underline" href="/insights">Insights</Link>
            <Link className="text-accent hover:underline" href="/contact">Contact</Link>
            <Link className="text-accent hover:underline" href="/case-study-rented-runway">The Rented Runway (Dehradun)</Link>
          </div>
        </Card>

        <Card id="contact" title="Contact Fluxorae Private Limited">
          <p className="text-secondary/90">Plan your wedding or event decor in Kanpur. Share dates, venue, and theme ideas.</p>
          <div className="flex flex-wrap gap-3 mt-3">
            <a className="bg-gradient-to-r from-accent to-amber-300 text-primary font-semibold px-5 py-3 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 transition" href="https://wa.me/91XXXXXXX">
              WhatsApp
            </a>
            <a className="border border-white/20 text-white px-5 py-3 rounded-full hover:bg-white/10 transition" href="mailto:contact@fluxorae.com">
              Email
            </a>
            <a className="border border-white/20 text-white px-5 py-3 rounded-full hover:bg-white/10 transition" href="tel:+91XXXXXXX">
              Call
            </a>
          </div>
        </Card>
      </main>
    </div>
  )
}

function Card({ title, children, id }: { title?: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="bg-primary-dark/40 border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-6">
      {title ? <h2 className="text-white text-xl font-semibold mb-3">{title}</h2> : null}
      {children}
    </section>
  )
}

function List({ items, ordered }: { items: string[]; ordered?: boolean }) {
  const Tag = ordered ? 'ol' : 'ul'
  return (
    <Tag className={`${ordered ? 'list-decimal' : 'list-disc'} list-inside space-y-1 text-secondary/90`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </Tag>
  )
}
