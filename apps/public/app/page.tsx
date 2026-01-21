import Hero from '@/components/home/Hero'
import ServicesOverview from '@/components/home/ServicesOverview'
import SolutionsShowcase from '@/components/home/SolutionsShowcase'
import WhyFluxorae from '@/components/home/WhyFluxorae'
import StatsSection from '@/components/home/StatsSection'
import CTA from '@/components/common/CTA'
import { Metadata } from 'next'
import ServiceProcess from '@/components/services/ServiceProcess'
import UserTypeSegment from '@/components/home/UserTypeSegment'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Fluxorae - Empowering businesses worldwide with cutting-edge technology solutions, innovation, and digital transformation.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <UserTypeSegment />
      <ServicesOverview />
      <SolutionsShowcase />
      <StatsSection />
      <WhyFluxorae />
      <ServiceProcess />
      <CTA
        title="Book a 30-minute consult"
        description="Map your goals to an AI-powered roadmap, clear milestones, and first wins in 6-8 weeks."
        primaryButton={{ text: 'Book a Free Consultation', href: '/contact' }}
        secondaryButton={{ text: 'View Services', href: '/services' }}
        showContactDetails
      />
    </>
  )
}
