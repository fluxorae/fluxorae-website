import Link from 'next/link'
import { Metadata } from 'next'
import TocClient from './toc-client'
import LeadFormClient from './lead-form-client'

export const metadata: Metadata = {
  title: 'The Rented Runway Dehradun Case Study | Bridal & Gown Rentals by Fluxorae',
  description:
    'How Fluxorae elevated The Rented Runway, a Dehradun bridal rental boutique, with SEO, UX, and lead flow improvements.',
  alternates: { canonical: 'https://www.fluxorae.com/case-studies/the-rented-runway' },
  openGraph: {
    title: 'The Rented Runway Dehradun Case Study | Bridal & Gown Rentals by Fluxorae',
    description: 'Fluxorae’s UX and SEO uplift for a premium fashion rental boutique in Dehradun.',
    url: 'https://www.fluxorae.com/case-studies/the-rented-runway',
    type: 'article',
    images: [{ url: '/og-image-rented-runway.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Rented Runway Dehradun Case Study | Bridal & Gown Rentals by Fluxorae',
    description: 'Fluxorae’s UX and SEO uplift for a premium fashion rental boutique in Dehradun.',
    images: ['/og-image-rented-runway.png'],
  },
}

const tocItems = [
  'snapshot',
  'problem',
  'goals',
  'strategy',
  'content',
  'seo',
  'performance',
  'results',
  'screens',
  'timeline',
  'deliverables',
  'faq',
  'contact',
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Fluxorae Private Limited',
      url: 'https://www.fluxorae.com',
      logo: '/og-image-rented-runway.png',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        email: 'contact@fluxorae.com',
        telephone: '+91XXXXXXX',
      },
    },
    {
      '@type': 'WebPage',
      name: 'The Rented Runway Dehradun Case Study',
      url: 'https://www.fluxorae.com/case-studies/the-rented-runway',
      description:
        'Case study by Fluxorae for The Rented Runway, a bridal and gown rental boutique in Dehradun.',
      breadcrumb: {
        '@id': 'https://www.fluxorae.com/case-studies/the-rented-runway#breadcrumb',
      },
    },
    {
      '@type': 'LocalBusiness',
      name: 'The Rented Runway',
      image: '/og-image-rented-runway.png',
      url: 'https://www.fluxorae.com/case-studies/the-rented-runway',
      telephone: '+91XXXXXXX',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dehradun',
        addressRegion: 'Uttarakhand',
        addressCountry: 'India',
      },
      sameAs: 'https://www.fluxorae.com',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.fluxorae.com/case-studies/the-rented-runway#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fluxorae.com' },
        { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://www.fluxorae.com/case-studies' },
        { '@type': 'ListItem', position: 3, name: 'The Rented Runway Dehradun', item: 'https://www.fluxorae.com/case-studies/the-rented-runway' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you offer bridal lehenga on rent in Dehradun?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, The Rented Runway offers premium bridal lehengas on rent in Dehradun with fittings and styling support.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I book a gown on rent for receptions or cocktails?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, gowns are available on rent in Dehradun for receptions, cocktails, and evening events.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is jewellery on rent available with outfits?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, jewellery on rent can be paired with lehengas and gowns for a coordinated look.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is The Rented Runway located in Dehradun?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The boutique serves customers around Sahastradhara Road, Dehradun. Exact directions are shared upon booking.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I check availability or book a trial fitting?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use the contact form or WhatsApp/phone placeholders to check availability, book a trial, or request a quote.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you support last-minute wedding dress rentals?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Last-minute requests are accepted when inventory permits; reach out to confirm availability.',
          },
        },
      ],
    },
  ],
}

const cards = {
  snapshotLeft: [
    'Brand: The Rented Runway',
    'Location: Sahastradhara Road, Dehradun, Uttarakhand',
    'Offerings: Bridal lehenga on rent, gown on rent, jewellery on rent, party wear rentals',
    'Engagement: UX + Local SEO + Content Strategy + On-page Performance',
    'Timeline: 6-week rollout with iterative sprints',
  ],
  constraints: [
    'No exact address exposure; locality-only (Sahastradhara Road, Dehradun).',
    'Inventory changes weekly; modular updates without heavy CMS.',
    'Low-maintenance stack; no heavy external libraries.',
  ],
  outcomes: [
    'Increase form and WhatsApp inquiries for bridal lehenga and gown rentals.',
    'Improve local visibility for “wedding dress rental boutique Dehradun.”',
    'Elevate premium feel while keeping “affordable luxury” messaging.',
    'Reduce mobile LCP and improve accessibility for key flows.',
  ],
  strategy: [
    'Local SEO: city/locality mentions in H1/H2, LocalBusiness schema, location-rich body copy.',
    'Structure: clear menu for bridal lehengas, gowns, jewellery, party wear; CTAs per section.',
    'Messaging: affordable luxury, fittings, hygiene, alterations, coordinated jewellery.',
    'Conversion: sticky WhatsApp, visible “Check availability”, short lead form.',
  ],
  content: [
    'Lead with “Bridal Lehenga on Rent in Dehradun” and “Gown on Rent in Dehradun”.',
    'Show hygiene, fitting, and styling assistance as trust anchors.',
    'Include jewellery coordination and party wear rentals.',
    'Concise cards, high contrast, mobile-first spacing.',
  ],
  seo: [
    'On-page keywords: Bridal/Gown/Jewellery on Rent in Dehradun; Wedding dress rental boutique Dehradun.',
    'Structured data: WebPage, Organization, LocalBusiness, BreadcrumbList, FAQPage.',
    'Internal linking plan to bridal/gown/jewellery/party wear sections.',
    'Canonical: https://www.fluxorae.com/case-studies/the-rented-runway; OG/Twitter cards defined.',
  ],
  performance: [
    'Single-page layout; no external libraries.',
    'High-contrast palette, focus states, semantic landmarks.',
    'Minimal JS for TOC and form validation.',
    'Mobile-first readability.',
  ],
  improvements: [
    'Smoother mobile load and scroll (qualitative).',
    'Clearer CTA visibility and reduced friction.',
    'Better clarity of Dehradun locality signals.',
  ],
  faq: [
    ['Do you offer bridal lehenga on rent in Dehradun?', 'Yes, premium bridal lehengas with fittings and styling support.'],
    ['Can I book a gown on rent for receptions or cocktails?', 'Yes, gowns are available for receptions, cocktails, and evening events.'],
    ['Is jewellery on rent available with outfits?', 'Yes, coordinated jewellery on rent can be added to complete the look.'],
    ['Where is The Rented Runway located?', 'Serving customers around Sahastradhara Road, Dehradun.'],
    ['How do I check availability or book a trial?', 'Use the form or WhatsApp to check availability, book a trial, or get a quote.'],
    ['Do you support last-minute rentals?', 'Last-minute requests are accepted based on inventory; contact to confirm.'],
  ],
}

export default function CaseStudyPage() {

  const card =
    'bg-primary-dark/40 border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-6'
  const pill = 'inline-block rounded-full bg-white/10 border border-white/10 text-white px-3 py-1 text-sm'

  return (
    <div className="bg-primary text-secondary">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <a
        href="https://wa.me/91XXXXXXX"
        className="fixed right-4 bottom-24 z-30 bg-gradient-to-r from-accent to-amber-300 text-primary font-bold px-4 py-3 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 transition"
      >
        WhatsApp • Check availability
      </a>

      <div className="sticky bottom-0 z-20 bg-primary/90 backdrop-blur border-t border-white/10 px-4 py-3 flex items-center justify-between gap-3">
        <div>
          <div className="font-semibold text-white">Ready to plan?</div>
          <div className="text-sm text-secondary/80">Book a trial • Request availability • Get a quote</div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <a className="border border-white/20 text-white px-4 py-2 rounded-full hover:bg-white/10 transition" href="tel:+91XXXXXXX">
            Call us
          </a>
          <a
            className="bg-gradient-to-r from-accent to-amber-300 text-primary font-semibold px-4 py-2 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 transition"
            href="https://wa.me/91XXXXXXX"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <header className="pt-16 pb-12 px-4 md:px-6 bg-gradient-to-br from-[#0f1117] via-[#0f1420] to-[#0c0f17]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[2.2fr,1fr] gap-6 items-start">
          <div className="bg-gradient-to-br from-amber-500/10 via-cyan-400/10 to-transparent border border-white/10 rounded-2xl p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/10 text-white text-sm">
              Case Study • Fashion Rental • Dehradun
            </div>
            <h1 className="mt-4 text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Bridal Lehenga &amp; Gown on Rent in Dehradun — Story of The Rented Runway
            </h1>
            <p className="mt-3 text-secondary/90 text-lg">
              How Fluxorae Private Limited crafted a premium, fast, and search-optimized presence for The Rented Runway, the Sahastradhara Road fashion rental boutique offering bridal lehengas, gowns, jewellery, and party wear on rent.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className={pill}>Local SEO uplift</span>
              <span className={pill}>Lead-ready UX</span>
              <span className={pill}>Performance-first</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://wa.me/91XXXXXXX"
                className="bg-gradient-to-r from-accent to-amber-300 text-primary font-semibold px-5 py-3 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 transition"
              >
                Check availability
              </a>
              <a
                href="#contact"
                className="border border-white/20 text-white px-5 py-3 rounded-full hover:bg-white/10 transition"
              >
                Book a trial
              </a>
            </div>
          </div>
          <aside className="hidden md:block sticky top-16">
            <TocClient tocItems={tocItems} />
          </aside>
        </div>
      </header>

      <main className="px-4 md:px-6 pb-16 space-y-8 max-w-6xl mx-auto">
        <Section id="snapshot" title="Client Snapshot">
          <div className="grid md:grid-cols-2 gap-4">
            <div className={card}>
              {cards.snapshotLeft.map((line) => (
                <p key={line} className="text-secondary/90">
                  <strong>{line.split(':')[0]}:</strong> {line.split(':').slice(1).join(':').trim()}
                </p>
              ))}
            </div>
            <div className={card}>
              <h3 className="text-white text-lg font-semibold mb-2">Positioning</h3>
              <p>
                Affordable luxury fashion rental boutique delivering curated bridal and occasion wear with fittings, styling guidance, and coordinated jewellery.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className={pill}>Premium boutique</span>
                <span className={pill}>Local discovery</span>
                <span className={pill}>Conversion-ready</span>
              </div>
            </div>
          </div>
        </Section>

        <Section id="problem" title="Problem Statement">
          <div className="grid md:grid-cols-2 gap-4">
            <div className={card}>
              <p>
                The site lacked clear “Book a trial” or “Check availability” flows, buried locality signals for Dehradun, and mixed visuals diluted the premium feel. Mobile load was slow and copy around “bridal lehenga on rent in Dehradun” and “gown on rent in Dehradun” was thin, limiting qualified inquiries.
              </p>
            </div>
            <div className={card}>
              <h3 className="text-white text-lg font-semibold mb-2">Constraints</h3>
              <ul className="list-disc list-inside space-y-1">
                {cards.constraints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="goals" title="Targeted Outcomes (KPIs)">
          <div className="grid md:grid-cols-2 gap-4">
            <div className={card}>
              <ul className="list-disc list-inside space-y-1">
                {cards.outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={`${card} grid md:grid-cols-3 gap-3`}>
              {[
                ['Observed improvements', 'Higher engagement on bridal/gown sections (qualitative).'],
                ['Lead quality', 'More specific “availability + fitting” inquiries (qualitative).'],
                ['Performance', 'Faster mobile paint with image and font optimizations.'],
              ].map(([labelText, body]) => (
                <div key={labelText} className="border border-white/10 rounded-xl p-3 bg-primary-dark/60">
                  <div className="text-white font-semibold">{labelText}</div>
                  <div className="text-secondary/80 text-sm">{body}</div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="strategy" title="Strategy">
          <div className="grid md:grid-cols-2 gap-4">
            <div className={card}>
              <ul className="list-disc list-inside space-y-1">
                {cards.strategy.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={card}>
              <h3 className="text-white text-lg font-semibold mb-2">Information Architecture</h3>
              <p>Menu: Home, Bridal Lehengas, Gowns, Jewellery, Party Wear, Gallery, FAQs, Contact.</p>
              <p>
                Flow: Hero → Snapshot → Problem → Outcomes → Strategy → IA → Content → SEO → Performance → Results → Screens → Timeline → Deliverables → FAQ → CTA.
              </p>
            </div>
          </div>
        </Section>

        <Section id="content" title="Content & UX Decisions">
          <div className="grid md:grid-cols-2 gap-4">
            <div className={card}>
              <ul className="list-disc list-inside space-y-1">
                {cards.content.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={card}>
              <h3 className="text-white text-lg font-semibold mb-2">Conversion UX</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Sticky WhatsApp CTA + footer CTA bar.</li>
                <li>Minimal form with front-end validation.</li>
                <li>Sticky table of contents on desktop.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="seo" title="SEO Implementation">
          <div className={card}>
            <ul className="list-disc list-inside space-y-1">
              {cards.seo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="performance" title="Performance & Accessibility">
          <div className="grid md:grid-cols-2 gap-4">
            <div className={card}>
              <ul className="list-disc list-inside space-y-1">
                {cards.performance.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={card}>
              <h3 className="text-white text-lg font-semibold mb-2">Observed improvements (qualitative)</h3>
              <ul className="list-disc list-inside space-y-1">
                {cards.improvements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="results" title="Results (Observed)">
          <div className={card}>
            <p>
              Improved engagement on bridal and gown sections, more specific availability inquiries, and faster perceived performance without claiming exact numbers.
            </p>
            <div className="grid md:grid-cols-3 gap-3 mt-4">
              {[
                ['Engagement', 'Higher time-on-section for bridal/gown (qualitative).'],
                ['Lead quality', 'Inquiries mention dates and styles more often.'],
                ['Performance', 'Reduced blocking assets; faster mobile paint.'],
              ].map(([labelText, body]) => (
                <div key={labelText} className="border border-white/10 rounded-xl p-3 bg-primary-dark/60">
                  <div className="text-white font-semibold">{labelText}</div>
                  <div className="text-secondary/80 text-sm">{body}</div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="screens" title="Screenshots & Visuals (Placeholders)">
          <div className={card}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['Hero layout', 'Bridal lehenga section', 'Gown rentals', 'Jewellery on rent', 'CTA & form', 'Mobile view'].map(
                (labelText) => (
                  <div
                    key={labelText}
                    className="bg-primary-dark/60 border border-dashed border-white/15 rounded-xl h-32 flex items-center justify-center text-secondary/70 text-sm"
                  >
                    {labelText}
                  </div>
                ),
              )}
            </div>
          </div>
        </Section>

        <Section id="timeline" title="Timeline">
          <div className={card}>
            <div className="overflow-auto">
              <table className="w-full border border-white/10 text-sm">
                <thead className="bg-white/5 text-white">
                  <tr>
                    <th className="border border-white/10 px-3 py-2 text-left">Week</th>
                    <th className="border border-white/10 px-3 py-2 text-left">Focus</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    'Discovery, keyword mapping, IA outline',
                    'Copy draft (bridal/gown/jewellery), CTA strategy',
                    'Design system, layout, accessibility passes',
                    'Performance tweaks, structured data',
                    'QA, TOC/sticky CTAs, form validation',
                    'Launch prep, SEO checks, handoff',
                  ].map((focus, i) => (
                    <tr key={focus} className="border-t border-white/10">
                      <td className="border border-white/10 px-3 py-2 text-white">{i + 1}</td>
                      <td className="border border-white/10 px-3 py-2 text-secondary/90">{focus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Section>

        <Section id="deliverables" title="Deliverables Checklist">
          <div className={card}>
            <ul className="space-y-2">
              {[
                'Hero, problem, outcomes, strategy, IA, results sections',
                'Local SEO and structured data for Dehradun + Sahastradhara Road',
                'Sticky TOC (desktop) and sticky WhatsApp CTA',
                'Lead form with validation and mailto fallback',
                'Performance-first, single page layout',
                'FAQ (6+ entries) and schema',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-green-400 font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="links" title="Related Links">
          <div className={card + ' flex flex-wrap gap-3'}>
            <Link className="text-accent hover:underline" href="/services">
              View services
            </Link>
            <Link className="text-accent hover:underline" href="/insights">
              Read insights
            </Link>
            <Link className="text-accent hover:underline" href="/contact">
              Contact us
            </Link>
            <Link className="text-accent hover:underline" href="/case-study-rk-petals">
              RK Petals and Decor (Kanpur) case study
            </Link>
          </div>
        </Section>

        <Section id="faq" title="FAQ">
          <div className={card}>
            {cards.faq.map(([q, a]) => (
              <div key={q} className="border-b border-white/10 py-3">
                <h4 className="text-white font-semibold">{q}</h4>
                <p className="text-secondary/85">{a}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Book a trial / Check availability">
          <div className="grid md:grid-cols-2 gap-4">
            <div className={card}>
              <p>
                Use the form or WhatsApp to request availability for bridal lehengas, gowns, jewellery, or party wear rentals in Dehradun.
              </p>
              <LeadFormClient />
            </div>
            <div className={card}>
              <h3 className="text-white text-lg font-semibold mb-2">Talk to us</h3>
              <p>
                <strong>WhatsApp:</strong> <a className="text-accent hover:underline" href="https://wa.me/91XXXXXXX">https://wa.me/91XXXXXXX</a>
              </p>
              <p>
                <strong>Email:</strong> <a className="text-accent hover:underline" href="mailto:contact@fluxorae.com">contact@fluxorae.com</a>
              </p>
              <p>
                <strong>Phone:</strong> <a className="text-accent hover:underline" href="tel:+91XXXXXXX">+91XXXXXXX</a>
              </p>
              <p><strong>Agency:</strong> Fluxorae Private Limited</p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                <Link className="text-accent hover:underline" href="/services">Services</Link>
                <Link className="text-accent hover:underline" href="/insights">Insights</Link>
                <Link className="text-accent hover:underline" href="/contact">Contact</Link>
                <Link className="text-accent hover:underline" href="/case-study-rk-petals">RK Petals (Kanpur)</Link>
              </div>
            </div>
          </div>
        </Section>

        <Section id="hidden-plan" title="">
          <details className={card}>
            <summary className="cursor-pointer text-accent">SEO Keyword Plan (hidden)</summary>
            <p className="mt-2">
              <strong>Primary:</strong> Bridal lehenga on rent in Dehradun
            </p>
            <p>
              <strong>Secondary:</strong> Gown on rent in Dehradun; Jewellery on rent in Dehradun; Wedding dress rental boutique Dehradun; The Rented Runway Dehradun; Sahastradhara Road Dehradun
            </p>
            <p>
              <strong>Long-tail:</strong> Book bridal lehenga trial Dehradun; Affordable luxury lehenga rental Dehradun; Party wear dress on rent Dehradun; Bridal jewellery on rent Dehradun; Schedule gown fitting Dehradun
            </p>
            <p>
              <strong>Internal links (placeholders):</strong> https://www.fluxorae.com/case-studies • https://www.fluxorae.com/services/local-seo • https://www.fluxorae.com/contact
            </p>
          </details>
        </Section>
      </main>
    </div>
  )
}

function label(id: string) {
  const labels: Record<string, string> = {
    snapshot: 'Client Snapshot',
    problem: 'Problem',
    goals: 'Targeted Outcomes',
    strategy: 'Strategy',
    content: 'Content & UX',
    seo: 'SEO Implementation',
    performance: 'Performance & Accessibility',
    results: 'Results',
    screens: 'Screenshots',
    timeline: 'Timeline',
    deliverables: 'Deliverables',
    faq: 'FAQ',
    contact: 'CTA',
  }
  return labels[id] ?? id
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      {title ? <h2 className="text-white text-2xl font-semibold mb-3">{title}</h2> : null}
      {children}
    </section>
  )
}
