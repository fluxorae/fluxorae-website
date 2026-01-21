'use client'

import { motion } from 'framer-motion'
import { Building2, Heart, ShoppingBag, Factory, GraduationCap, Plane, Car, Briefcase } from 'lucide-react'
import Link from 'next/link'

const industries = [
  {
    icon: Building2,
    title: 'Financial Services',
    description: 'Secure, compliant solutions for banks, insurance, and fintech companies.',
    solutions: ['Risk Management', 'Compliance Solutions', 'Digital Banking', 'Payment Systems'],
    color: 'from-electric-soft to-cyan-600',
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'HIPAA-compliant solutions improving patient care and operational efficiency.',
    solutions: ['EHR Systems', 'Telemedicine', 'Medical Analytics', 'Patient Portal'],
    color: 'from-rose-500 to-amber-400',
  },
  {
    icon: ShoppingBag,
    title: 'Retail & E-commerce',
    description: 'Omnichannel solutions enhancing customer experience and driving sales.',
    solutions: ['E-commerce Platforms', 'Inventory Management', 'Customer Analytics', 'Supply Chain'],
    color: 'from-amber-400 to-orange-500',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'IoT and automation solutions optimizing production and supply chains.',
    solutions: ['Industry 4.0', 'IoT Integration', 'Supply Chain', 'Quality Control'],
    color: 'from-orange-500 to-amber-600',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Digital learning platforms and administrative solutions for educational institutions.',
    solutions: ['Learning Management', 'Student Information', 'Virtual Classrooms', 'Administrative Tools'],
    color: 'from-emerald-400 to-electric-soft',
  },
  {
    icon: Plane,
    title: 'Travel & Hospitality',
    description: 'Customer-centric solutions enhancing guest experiences and operations.',
    solutions: ['Booking Systems', 'CRM Solutions', 'Revenue Management', 'Mobile Apps'],
    color: 'from-electric to-teal-500',
  },
  {
    icon: Car,
    title: 'Automotive',
    description: 'Connected vehicle solutions and manufacturing optimization.',
    solutions: ['Connected Vehicles', 'Manufacturing Systems', 'Dealer Management', 'Fleet Management'],
    color: 'from-slate-700 to-gray-500',
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    description: 'Practice management and client engagement solutions.',
    solutions: ['CRM Systems', 'Project Management', 'Billing Solutions', 'Client Portal'],
    color: 'from-amber-300 to-electric-soft',
  },
]

export default function IndustriesGrid() {
  return (
    <section className="section-padding bg-secondary-light">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`h-32 bg-gradient-to-br ${industry.color} flex items-center justify-center`}>
                  <Icon className="text-white" size={48} />
                </div>
                <div className="p-8">
                  <h3 className="heading-3 text-xl mb-3">{industry.title}</h3>
                  <p className="text-gray-600 mb-6">{industry.description}</p>
                  <ul className="space-y-2 mb-6">
                    {industry.solutions.map((solution) => (
                      <li key={solution} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="text-accent font-semibold hover:underline inline-flex items-center group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
