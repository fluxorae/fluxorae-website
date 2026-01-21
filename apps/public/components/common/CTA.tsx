'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CTAProps {
  title?: string
  description?: string
  primaryButton?: { text: string; href: string }
  secondaryButton?: { text: string; href: string }
  showContactDetails?: boolean
}

export default function CTA({
  title = 'Ready for a high-velocity build?',
  description = 'Book a 30-minute session to map your goals to an AI-powered roadmap, timelines, and first wins in weeks.',
  primaryButton = { text: 'Book a Free Consultation', href: '/contact' },
  secondaryButton = { text: 'View Services', href: '/services' },
  showContactDetails = false,
}: CTAProps) {
  return (
    <section className="section-padding bg-gradient-to-r from-primary via-primary-dark to-primary text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="heading-2 mb-6 text-white">{title}</h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">{description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={primaryButton.href} className="btn-primary group">
              {primaryButton.text}
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            {secondaryButton && (
              <Link href={secondaryButton.href} className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                {secondaryButton.text}
              </Link>
            )}
          </div>
          {showContactDetails && (
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-left text-sm text-gray-200">
              <div className="space-y-1">
                <p className="font-semibold text-white">Contact</p>
                <p>contact@fluxorae.com</p>
                <p>+91 9115377791</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-white">Registered Office</p>
                <p>Gata No. 316, Sahinwan, Gosaisinghpur,</p>
                <p>Kadipur, Sultanpur, UP - 228131</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-white">Legal</p>
                <p>CIN: U62091UP2025PTC234934</p>
                <p>GSTIN: 09AAGCF6673D1ZG</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
