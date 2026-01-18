import { Metadata } from 'next'
import ServicesHero from '@/components/services/ServicesHero'
import ServicesGrid from '@/components/services/ServicesGrid'
import ServiceProcess from '@/components/services/ServiceProcess'
import CTA from '@/components/common/CTA'

export const metadata: Metadata = {
  title: 'Global Services',
  description: 'Comprehensive technology services designed to transform your business. From cloud solutions to digital transformation, we deliver excellence.',
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
