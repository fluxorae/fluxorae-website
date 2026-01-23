import { Metadata } from 'next'
import IndustriesHero from '@/components/industries/IndustriesHero'
import IndustriesGrid from '@/components/industries/IndustriesGrid'
import CTA from '@/components/common/CTA'

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Industry-specific solutions for Finance, Healthcare, Retail, Manufacturing, and more. Discover how Fluxorae serves diverse industries.',
}

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHero />
      <IndustriesGrid />
      <CTA
        title="Need an industry-ready AI partner?"
        description="Book a call to discuss your vertical challenges, reference architectures, and compliance needs."
        primaryButton={{ text: 'Book a Call', href: '/book-call' }}
        secondaryButton={{ text: 'View Case Studies', href: '/case-studies' }}
        showContactDetails
      />
    </>
  )
}
