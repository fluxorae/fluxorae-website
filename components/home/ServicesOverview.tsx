'use client'

import { motion } from 'framer-motion'
import { Cloud, Code, Database, Shield, Smartphone, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for modern businesses.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions built with cutting-edge technologies and best practices.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Database,
    title: 'Data Analytics',
    description: 'Transform data into actionable insights with advanced analytics and AI.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and data.',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile Solutions',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: TrendingUp,
    title: 'Digital Transformation',
    description: 'End-to-end digital transformation strategies to accelerate business growth.',
    color: 'from-yellow-500 to-orange-500',
  },
]

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-secondary-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">Our Global Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <Link
                  href="/services"
                  className="text-accent font-semibold hover:underline inline-flex items-center group-hover:translate-x-2 transition-transform duration-300"
                >
                  Learn More
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
