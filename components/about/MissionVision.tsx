'use client'

import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'

export default function MissionVision() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-secondary-light p-8 rounded-xl"
          >
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
              <Target className="text-accent" size={32} />
            </div>
            <h2 className="heading-3 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To empower businesses globally by delivering innovative technology solutions that drive growth, efficiency, and competitive advantage. We are committed to excellence, integrity, and creating lasting value for our clients worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-secondary-light p-8 rounded-xl"
          >
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
              <Eye className="text-accent" size={32} />
            </div>
            <h2 className="heading-3 mb-4">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To be the world&apos;s most trusted partner in digital transformation, recognized for our innovation, expertise, and unwavering commitment to client success. We envision a future where technology seamlessly empowers every business to achieve its full potential.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
