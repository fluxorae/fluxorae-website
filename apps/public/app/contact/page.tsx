import { Metadata } from 'next'
import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import { Suspense } from 'react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Fluxorae. We\'re here to help transform your business with innovative technology solutions.',
}

const inquiryCards = [
  {
    title: 'Sales Inquiry',
    description: 'Book a discovery call to align your pilots, packages, and OKRs.',
    action: 'Book a Call',
    href: '/book-call',
  },
  {
    title: 'Technical Support',
    description: 'Raise issues or request maintenance support with guaranteed SLA response.',
    action: 'WhatsApp Support',
    href: 'https://wa.me/919115377791',
  },
  {
    title: 'Partnership Requests',
    description: 'Explore integrations, referrals, and co-innovation opportunities.',
    action: 'Email Partnerships',
    href: 'mailto:partners@fluxorae.com',
  },
]

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="section-padding border-b border-white/10">
        <div className="container-custom grid gap-4 md:grid-cols-3">
          {inquiryCards.map((card) => (
            <article key={card.title} className="glass-panel rounded-3xl border border-white/10 p-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
              <p className="text-sm text-gray-300 flex-grow">{card.description}</p>
              <Link href={card.href} className="mt-6 inline-flex items-center gap-2 text-accent font-semibold text-sm">
                {card.action}
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="section-padding bg-primary-dark/30 border-t border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-1 panel h-full">
              <ContactInfo />
            </div>
            <div className="lg:col-span-2 panel">
              <Suspense fallback={<div className="glass-panel p-6 rounded-2xl text-secondary">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding border-t border-white/10 bg-primary-dark/20">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-gray-400">Office locations</p>
            <h2 className="heading-2 text-white">Visit or meet our teams globally</h2>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>
                <strong className="text-white">India HQ</strong>
                <p>Gata No. 316, Sahinwan, Gosaisinghpur, Kadipur, Sultanpur, UP - 228131</p>
              </li>
              <li>
                <strong className="text-white">North America</strong>
                <p>Remote-first pods serving Boston, Austin, and Toronto.</p>
              </li>
              <li>
                <strong className="text-white">Europe</strong>
                <p>Distributed engineering and GTM with EU data and compliance support.</p>
              </li>
            </ul>
            <p className="text-gray-400">
              Map integration keeps live availability and location references close—perfect for scheduling in-person workshops or asynchronous support.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <iframe
              title="Fluxorae offices"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.121538723751!2d82.71191137409509!3d26.286911183429198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992f0d2037f2f81%3A0x9f5bff1f3f954ed7!2sSultanpur%2C%20Uttar%20Pradesh%20228131!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-80 border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
