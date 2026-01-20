import Hero from '@/components/home/Hero'
import ServicesOverview from '@/components/home/ServicesOverview'
import SolutionsShowcase from '@/components/home/SolutionsShowcase'
import WhyFluxorae from '@/components/home/WhyFluxorae'
import StatsSection from '@/components/home/StatsSection'
import CTA from '@/components/common/CTA'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Fluxorae - Empowering businesses worldwide with cutting-edge technology solutions, innovation, and digital transformation.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <SolutionsShowcase />
      <StatsSection />
      <WhyFluxorae />
      <CTA
        description="Let's discuss how Fluxorae can help you achieve your goals with innovative technology solutions. FLUXORAE PRIVATE LIMITED is a global leader in Software Installation & Technology Services, empowering businesses through innovation and digital transformation."
        primaryButton={{ text: 'Get Started', href: '/contact' }}
        secondaryButton={{ text: 'Learn More', href: '/services' }}
        showContactDetails
      />
    </>
  )
}
