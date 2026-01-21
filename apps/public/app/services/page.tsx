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
      <CTA />
    </>
  )
}
