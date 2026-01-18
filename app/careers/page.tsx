import { Metadata } from 'next'
import CareersHero from '@/components/careers/CareersHero'
import OpenPositions from '@/components/careers/OpenPositions'
import WhyWorkHere from '@/components/careers/WhyWorkHere'
import CTA from '@/components/common/CTA'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the Fluxorae team and be part of a global technology leader. Explore career opportunities and grow with us.',
}

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <WhyWorkHere />
      <OpenPositions />
      <CTA
        title="Ready to Join Our Team?"
        description="We're always looking for talented individuals to join our global team."
        primaryButton={{ text: 'View Openings', href: '/careers#positions' }}
        secondaryButton={{ text: 'Contact Us', href: '/contact' }}
      />
    </>
  )
}
