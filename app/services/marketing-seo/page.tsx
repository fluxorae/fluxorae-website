import { Metadata } from 'next'
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Digital Marketing & SEO',
  description: 'Full-funnel growth with technical SEO, CRO, performance ads, and analytics to boost demos and revenue.',
}

const data = {
  title: 'Digital Marketing & SEO',
  subtitle: 'SEO • CRO • Performance ads',
  description: 'Technical SEO, conversion rate optimization, performance ads, and analytics with experimentation at the core. We tie every move to pipeline and revenue.',
  primaryCTA: { text: 'Book a Growth Call', href: '/contact' },
  secondaryCTA: { text: 'See Case Studies', href: '/solutions' },
  painPoints: [
    'Organic traffic is flat and technical SEO debt is piling up.',
    'Landing pages and pricing pages are under-converting.',
    'Attribution is unclear; channels are not measured consistently.',
    'Campaigns lack structured experimentation and creative testing.',
  ],
  solutions: [
    'Technical SEO fixes, schema, and site health improvements.',
    'CRO playbooks: messaging, UX tweaks, and A/B tests.',
    'Performance ads with clear attribution and creative testing.',
    'Analytics pipelines with dashboards for decision-makers.',
  ],
  outcomes: [
    '+30–50% organic conversions from SEO uplifts',
    'Improved CVR on key funnels (demo/contact/pricing)',
    'Channel clarity with standardized attribution models',
    'Faster experiment cadence with measured learnings',
  ],
  process: [
    { title: 'Audit & targets', description: 'SEO/analytics audit; set growth OKRs and baseline metrics.' },
    { title: 'Fix & instrument', description: 'Technical fixes, schema, and analytics/attribution setup.' },
    { title: 'Test & optimize', description: 'CRO experiments on priority pages and creative testing.' },
    { title: 'Scale campaigns', description: 'Performance ads, content velocity, and backlink strategy.' },
    { title: 'Report & refine', description: 'Dashboards, insights, and ongoing optimizations tied to pipeline.' },
  ],
  stack: ['GA4', 'Search Console', 'Tag Manager', 'Looker / Data Studio', 'Ahrefs', 'Semrush', 'VWO / Optimizely', 'Meta / Google Ads'],
}

export default function Page() {
  return <ServiceDetailPage data={data} />
}
