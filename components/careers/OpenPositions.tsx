'use client'

import { motion } from 'framer-motion'
import { MapPin, Briefcase, Clock } from 'lucide-react'
import Link from 'next/link'

const positions = [
  {
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'Remote / Global',
    type: 'Full-time',
    id: 'senior-software-engineer',
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote / Global',
    type: 'Full-time',
    id: 'product-manager',
  },
  {
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Remote / Global',
    type: 'Full-time',
    id: 'ux-ui-designer',
  },
  {
    title: 'Cloud Solutions Architect',
    department: 'Engineering',
    location: 'Remote / Global',
    type: 'Full-time',
    id: 'cloud-solutions-architect',
  },
  {
    title: 'Business Development Manager',
    department: 'Sales',
    location: 'Remote / Global',
    type: 'Full-time',
    id: 'business-development-manager',
  },
  {
    title: 'Data Scientist',
    department: 'Data & Analytics',
    location: 'Remote / Global',
    type: 'Full-time',
    id: 'data-scientist',
  },
]

export default function OpenPositions() {
  return (
    <section id="positions" className="section-padding bg-secondary-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">Open Positions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore opportunities to join our global team
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {positions.map((position, index) => (
            <motion.div
              key={position.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="heading-3 text-xl mb-2">{position.title}</h3>
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
                <span className="flex items-center">
                  <Briefcase className="mr-2" size={16} />
                  {position.department}
                </span>
                <span className="flex items-center">
                  <MapPin className="mr-2" size={16} />
                  {position.location}
                </span>
                <span className="flex items-center">
                  <Clock className="mr-2" size={16} />
                  {position.type}
                </span>
              </div>
              <Link
                href={`/careers/${position.id}`}
                className="text-accent font-semibold hover:underline inline-flex items-center"
              >
                View Details
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Don&apos;t see a position that matches your skills?
          </p>
          <Link href="/contact" className="btn-outline">
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
