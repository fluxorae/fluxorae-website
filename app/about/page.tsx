import { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import MissionVision from '@/components/about/MissionVision'
import CompanyValues from '@/components/about/CompanyValues'
import Leadership from '@/components/about/Leadership'
import Timeline from '@/components/about/Timeline'
import CTA from '@/components/common/CTA'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Fluxorae - Our mission, vision, values, and commitment to transforming businesses through innovative technology solutions.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <CompanyValues />
      <Timeline />
      <Leadership />
      <CTA />
    </>
  )
}
