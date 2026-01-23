import { Metadata } from 'next'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesGrid from '@/components/services/ServicesGrid'
import ServiceProcess from '@/components/services/ServiceProcess'
import CTA from '@/components/common/CTA'

export const metadata: Metadata = {
  title: 'Services',
  description: 'AI + product engineering + growth. Fluxorae delivers automation, high-performance web, SEO, design systems, data, and cloud in one integrated team.',
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServiceProcess />
      <CTA
        title="Map your AI roadmap with Fluxorae"
        description="Book a call to align your business objectives with a service bucket, KPIs, and success milestones."
        primaryButton={{ text: 'Book a Call', href: '/book-call' }}
        secondaryButton={{ text: 'View Pricing', href: '/pricing' }}
        showContactDetails
      />
    </>
  )
}
