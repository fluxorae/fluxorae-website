'use client'

import { motion } from 'framer-motion'
import { Heart, Briefcase, Users, TrendingUp, Globe, Award } from 'lucide-react'

const benefits = [
  {
    icon: Briefcase,
    title: 'Career Growth',
    description: 'Opportunities for professional development and advancement in your career.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Work on projects that make a difference across 50+ countries worldwide.',
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    description: 'Join a diverse team of experts who value collaboration and innovation.',
  },
  {
    icon: Award,
    title: 'Competitive Benefits',
    description: 'Comprehensive benefits package including health, dental, and retirement plans.',
  },
  {
    icon: TrendingUp,
    title: 'Innovation Focus',
    description: 'Work with cutting-edge technologies and shape the future of business.',
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'Flexible work arrangements and a supportive environment for your well-being.',
  },
]

export default function WhyWorkHere() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">Why Work at Fluxorae?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join a team that values your growth, innovation, and contribution
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary-light p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Icon className="text-accent" size={32} />
                </div>
                <h3 className="heading-3 text-xl mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
