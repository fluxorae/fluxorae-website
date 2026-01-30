import { Metadata } from 'next'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesGrid from '@/components/services/ServicesGrid'
import ServiceProcess from '@/components/services/ServiceProcess'
import CTA from '@/components/common/CTA'
import { ServiceDto } from '@/types/api'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'AI + product engineering + growth. Fluxorae delivers automation, high-performance web, SEO, design systems, data, and cloud in one integrated team.',
}

async function getServices(): Promise<ServiceDto[]> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000'
  try {
    const res = await fetch(new URL('/api/services', baseUrl), { next: { revalidate: 120 } })
    if (!res.ok) {
      return []
    }
    return (await res.json()) as ServiceDto[]
  } catch {
    return []
  }
}

export default async function ServicesPage() {
  const services = await getServices()
  const customQuoteCount = services.filter((service) => service.customQuote).length

  return (
    <>
      <ServicesHero servicesCount={services.length} customQuote={customQuoteCount} />
      <ServicesGrid services={services} />
      <ServiceProcess />
      <CTA
        title="Map your AI roadmap with Fluxorae"
        description="Book a call to align your business objectives with a service bucket, KPIs, and success milestones."
        primaryButton={{ text: 'Request Proposal', href: '/book-call' }}
        secondaryButton={{ text: 'Download Pricing Guide', href: '/pricing' }}
        showContactDetails
      />
    </>
  )
}
