import { Metadata } from 'next'
import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Fluxorae. We\'re here to help transform your business with innovative technology solutions.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="section-padding bg-secondary-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
            <div className="lg:col-span-2">
              <Suspense fallback={<div className="glass-panel p-6 rounded-2xl text-secondary">Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
