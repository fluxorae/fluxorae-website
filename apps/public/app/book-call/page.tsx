import { Metadata } from 'next'
import Link from 'next/link'
import ProjectBriefForm from '@/components/book-call/ProjectBriefForm'
import CTA from '@/components/common/CTA'

export const metadata: Metadata = {
  title: 'Book a Call | Fluxorae',
  description: 'Schedule a free AI consultation, submit a project brief, and request an NDA with Fluxorae.',
}

export default function BookCallPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary-dark to-primary text-white overflow-hidden">
        <div className="container-custom space-y-6 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-accent">Free consultation</p>
          <h1 className="heading-1 text-white">
            Book a call to map your AI roadmap, pilots, and ROI metrics
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Schedule our AI-native leadership squad for a 30-minute session, bring your challenge, and we will share a tailored plan, project brief, and timeline.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/book-call" className="btn-primary px-6 py-3 rounded-full">
              Book a Free Consultation
            </Link>
            <Link href="/insights" className="btn-secondary px-6 py-3 rounded-full border border-white/20">
              Review our insights
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding border-b border-white/10">
        <div className="container-custom grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-gray-400">Schedule via calendar</p>
            <h2 className="heading-2 text-white">Pick a slot, sync calendars, get confirmed</h2>
            <p className="text-gray-400 max-w-3xl">
              We hold dedicated calendar blocks for product, data, security, and growth leaders. Choose a time, and our team will send confirmed dial-in details.
            </p>
            <Link href="/book-call" className="inline-flex items-center gap-2 text-accent font-semibold text-sm">
              Open calendar & pick time
            </Link>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="h-72 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-sm uppercase tracking-[0.6em] text-gray-300">
              Calendar integration (coming soon)
            </div>
          </div>
        </div>
      </section>

      <ProjectBriefForm />

      <section className="section-padding bg-primary-dark/30 border-t border-white/10">
        <div className="container-custom grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-gray-400">NDA Option</p>
            <h2 className="heading-2 text-white">Need confidentiality before the call?</h2>
            <p className="text-gray-300">
              We can share an NDA within 24 hours to cover sensitive roadmaps, datasets, or product designs. Tick the option on the form or email <a className="text-accent font-semibold" href="mailto:legal@fluxorae.com">legal@fluxorae.com</a>.
            </p>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>Security controls are part of every onboarding</li>
              <li>Audit-ready compliance for enterprise SLAs</li>
              <li>Simple e-sign flow or shared NDA template</li>
            </ul>
          </div>
          <div className="glass-panel rounded-3xl border border-white/10 p-6 space-y-3">
            <p className="text-xs uppercase tracking-[0.5em] text-gray-400">What to share</p>
            <p className="text-sm text-gray-200">
              Challenge summary, desired outcomes, systems involved, budget range, and preferred contact. We will respond with a calendar link, NDA request, and next steps.
            </p>
            <Link href="/contact" className="text-accent font-semibold inline-flex items-center gap-1">
              Email the concierge
            </Link>
          </div>
        </div>
      </section>

      <CTA
        title="Ready for our AI squad?"
        description="Submit the brief and we will confirm your Free AI Consultation with a scoped agenda."
        primaryButton={{ text: 'Book a Call', href: '/book-call' }}
        secondaryButton={{ text: 'View Services', href: '/services' }}
        showContactDetails
      />
    </>
  )
}
