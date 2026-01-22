import caseRentedRunway from '../assets/case-rented-runway.svg'
import caseRkPetals from '../assets/case-rk-petals.svg'

export const caseStudies = [
  {
    slug: 'the-rented-runway',
    title: 'The Rented Runway - Bridal & Gown Rentals',
    summary: 'Local SEO, UX, and lead flow uplift for a fashion rental boutique in Dehradun.',
    coverImage: caseRentedRunway,
    industry: 'Fashion rental',
    location: 'Dehradun, India',
    publishedAt: '2024-09-05',
    tags: ['Local SEO', 'UX', 'Performance'],
    stats: [
      { label: 'Launch', value: '6 week rollout' },
      { label: 'Focus', value: 'Lead quality' },
      { label: 'Stack', value: 'React + CSS Modules' },
    ],
    sections: [
      {
        id: 'problem',
        title: 'Problem & constraints',
        description:
          'Low visibility for bridal and gown rentals in Dehradun and unclear conversion pathways across mobile.',
        points: [
          'No clear trial or availability CTAs above the fold.',
          'Locality signals for Dehradun and Sahastradhara Road were thin.',
          'Mixed visuals reduced the premium, trust-first feel the boutique needed.',
        ],
      },
      {
        id: 'strategy',
        title: 'Strategy',
        description: 'Local SEO plus a conversion-led page that highlights fittings, hygiene, and curated collections.',
        points: [
          'Information architecture for bridal lehengas, gowns, jewellery, and party wear with sticky CTAs.',
          'LocalBusiness, FAQ, and breadcrumb schema for stronger intent coverage.',
          'Mobile-first layout with lightweight assets and lazy imagery.',
        ],
      },
      {
        id: 'seo',
        title: 'SEO & content',
        description: 'Keyword-rich headings and internal links anchored on locality and service terms.',
        points: [
          'Primary targets: bridal lehenga on rent in Dehradun, gown on rent in Dehradun.',
          'Secondary: jewellery on rent, party wear rentals, wedding dress rentals.',
          'FAQ content mapped to WhatsApp and form conversions.',
        ],
      },
      {
        id: 'results',
        title: 'Results (observed)',
        description: 'Qualitative lift in lead specificity and faster mobile paint by cutting heavy assets.',
        points: [
          'More inquiries mention dates, styles, and fittings upfront.',
          'Sticky CTA and footer bar lifted engagement on bridal/gown sections.',
          'Perceived performance improved with deferred assets.',
        ],
      },
    ],
  },
  {
    slug: 'rk-petals-decor',
    title: 'RK Petals & Decor - Wedding & Event Decoration',
    summary: 'Conversion-first presence for Kanpur wedding and event decoration services.',
    coverImage: caseRkPetals,
    industry: 'Events and decor',
    location: 'Kanpur, India',
    publishedAt: '2024-06-20',
    tags: ['Local SEO', 'Lead Gen', 'UX'],
    stats: [
      { label: 'Engagement', value: 'Sticky WhatsApp CTA' },
      { label: 'Pages', value: 'Services + FAQ' },
      { label: 'Focus', value: 'Availability checks' },
    ],
    sections: [
      {
        id: 'problem',
        title: 'Problem & goals',
        description: 'Kanpur search relevance and conversion clarity for wedding and event decor.',
        points: [
          'Service info scattered; no quick path to check date availability.',
          'Few localized keywords for Kanpur intents (Haldi, Mehendi, floral stage).',
          'No structured FAQ to build trust pre-sales.',
        ],
      },
      {
        id: 'strategy',
        title: 'Strategy',
        description: 'Lean, mobile-first page that keeps CTAs visible and clarifies deliverables.',
        points: [
          'Dual CTAs for WhatsApp and calls with sticky visibility.',
          'LocalBusiness + FAQ schema; Kanpur mentions in H1/H2 and body copy.',
          'Service cards for wedding decor, Haldi, Mehendi, and floral themes.',
        ],
      },
      {
        id: 'process',
        title: 'Workflow',
        description: 'A short rollout to get the service mix online and rankable.',
        points: [
          'Discovery ? IA + copy ? SEO schema ? QA.',
          'Ready for CDN-backed galleries without blocking core content.',
          'Performance budget kept tight with no heavy libraries.',
        ],
      },
      {
        id: 'results',
        title: 'Results (qualitative)',
        description: 'Clearer service pathways and more specific lead asks.',
        points: [
          'Higher clarity on service mix (wedding, Haldi, Mehendi).',
          'More availability checks mentioning dates and venues.',
          'Mobile load stayed lean for field users.',
        ],
      },
    ],
  },
]

export function getCaseStudyBySlug(slug) {
  return caseStudies.find((item) => item.slug === slug)
}
