'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Official Email',
    value: 'contact@fluxorae.com',
    href: 'mailto:contact@fluxorae.com',
  },
  {
    icon: Mail,
    label: 'Director Email',
    value: 'shivamdhuriyamd@gmail.com',
    href: 'mailto:shivamdhuriyamd@gmail.com',
  },
  {
    icon: Phone,
    label: 'WhatsApp / Contact',
    value: '+91 9115377791',
    href: 'https://wa.me/919115377791',
  },
  {
    icon: MapPin,
    label: 'Registered Office',
    value: 'Gata No. 316, Sahinwan, Gosaisinghpur, Kadipur, Sultanpur, UP - 228131',
    href: 'https://maps.google.com/?q=Gata+No.+316,+Sahinwan,+Gosaisinghpur,+Kadipur,+Sultanpur,+Uttar+Pradesh+228131',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon - Sat: 10:00 AM - 7:00 PM',
    href: '#',
  },
]

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white p-8 rounded-xl shadow-md"
    >
      <h2 className="heading-3 text-xl mb-6">Contact Information</h2>
      <p className="text-gray-600 mb-8">
        Get in touch with us through any of the following channels. We&apos;re here to help.
      </p>
      <div className="space-y-6">
        {contactInfo.map((info, index) => {
          const Icon = info.icon
          return (
            <motion.a
              key={info.label}
              href={info.href}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start space-x-4 group"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                <Icon className="text-accent group-hover:text-white transition-colors duration-300" size={20} />
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">{info.label}</div>
                <div className="text-primary font-semibold group-hover:text-accent transition-colors duration-300">
                  {info.value}
                </div>
              </div>
            </motion.a>
          )
        })}
      </div>
    </motion.div>
  )
}
