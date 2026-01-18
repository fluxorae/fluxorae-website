'use client'

import { motion } from 'framer-motion'
import { Heart, Shield, Rocket, Users } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We operate with transparency, honesty, and ethical practices in everything we do.',
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'We continuously push boundaries and explore new technologies to deliver cutting-edge solutions.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork, both within our organization and with our clients.',
  },
  {
    icon: Shield,
    title: 'Excellence',
    description: 'We are committed to delivering exceptional quality and exceeding expectations in every project.',
  },
]

export default function CompanyValues() {
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
          <h2 className="heading-2 mb-4">Our Core Values</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The principles that guide our work and define our culture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="text-accent" size={32} />
                </div>
                <h3 className="heading-3 text-xl mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
