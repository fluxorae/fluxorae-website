import { Metadata } from 'next'
import CaseStudiesClient from './CaseStudiesClient'

export const metadata: Metadata = {
  title: 'Case Studies | Fluxorae',
  description: 'Browse Fluxorae case studies with outcomes across industries, solutions, and ROI metrics.',
}

export default function CaseStudiesPage() {
  return <CaseStudiesClient />
}
