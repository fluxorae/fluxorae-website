'use client'

import { motion } from 'framer-motion'
import { Cloud, Code, Database, Shield, Smartphone, TrendingUp, Search, BarChart3 } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Comprehensive cloud services including migration, architecture design, and managed services.',
    features: ['Cloud Migration', 'Architecture Design', 'Managed Services', 'Cost Optimization'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions built with modern technologies and agile methodologies.',
    features: ['Custom Development', 'Agile Methodology', 'Quality Assurance', 'DevOps Integration'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Database,
    title: 'Data Analytics & AI',
    description: 'Transform data into actionable insights with advanced analytics and AI solutions.',
    features: ['Business Intelligence', 'Machine Learning', 'Predictive Analytics', 'Data Visualization'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protect your digital assets with comprehensive security solutions and best practices.',
    features: ['Security Assessment', 'Threat Protection', 'Compliance', 'Incident Response'],
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile Solutions',
    description: 'Native and cross-platform mobile applications for iOS, Android, and web.',
    features: ['Native Apps', 'Cross-Platform', 'UI/UX Design', 'App Store Optimization'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: TrendingUp,
    title: 'Digital Transformation',
    description: 'End-to-end digital transformation strategies to modernize your business operations.',
    features: ['Strategy Consulting', 'Process Automation', 'Change Management', 'Continuous Improvement'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Search,
    title: 'Cloud Consulting',
    description: 'Expert guidance on cloud strategy, architecture, and implementation best practices.',
    features: ['Strategy Development', 'Architecture Review', 'Best Practices', 'Training & Support'],
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description: 'Empower decision-making with comprehensive BI solutions and data visualization.',
    features: ['Dashboard Development', 'Data Integration', 'Reporting Solutions', 'Self-Service BI'],
    color: 'from-violet-500 to-purple-500',
  },
]

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-secondary-light">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="heading-3 text-xl mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="text-accent font-semibold hover:underline inline-flex items-center group-hover:translate-x-2 transition-transform duration-300"
                >
                  Get Started
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
