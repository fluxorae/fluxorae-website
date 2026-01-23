import Hero from '@/components/home/Hero'
import ServicesOverview from '@/components/home/ServicesOverview'
import SolutionsShowcase from '@/components/home/SolutionsShowcase'
import WhyFluxorae from '@/components/home/WhyFluxorae'
import StatsSection from '@/components/home/StatsSection'
import CTA from '@/components/common/CTA'
import { Metadata } from 'next'
import ServiceProcess from '@/components/services/ServiceProcess'
import UserTypeSegment from '@/components/home/UserTypeSegment'
import PricingPreview from '@/components/home/PricingPreview'
import TrustedBy from '@/components/home/TrustedBy'
import IndustryExpertise from '@/components/home/IndustryExpertise'
import FeaturedCaseStudies from '@/components/home/FeaturedCaseStudies'
import TechnologyStack from '@/components/home/TechnologyStack'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import AwardsCertifications from '@/components/home/AwardsCertifications'
import LatestInsights from '@/components/home/LatestInsights'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Fluxorae is an AI-native digital engineering partner delivering product, automation, data, and growth outcomes—fast, secure, and SEO-first.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <StatsSection />
      <UserTypeSegment />
      <ServicesOverview />
      <SolutionsShowcase />
      <IndustryExpertise />
      <FeaturedCaseStudies />
      <TechnologyStack />
      <WhyFluxorae />
      <TestimonialsSection />
      <AwardsCertifications />
      <LatestInsights />
      <PricingPreview />
      <ServiceProcess />
      <CTA
        title="Book a 30-minute consult"
        description="Map your goals to an AI-powered roadmap, clear milestones, and first wins in 6-8 weeks."
        primaryButton={{ text: 'Book a Free Consultation', href: '/book-call' }}
        secondaryButton={{ text: 'View Case Studies', href: '/case-studies' }}
        showContactDetails
      />
    </>
  )
}
