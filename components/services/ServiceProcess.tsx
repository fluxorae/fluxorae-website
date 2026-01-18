'use client'

import { motion } from 'framer-motion'
import { Search, Lightbulb, Rocket, CheckCircle } from 'lucide-react'

const processSteps = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'We analyze your business needs, challenges, and goals to understand your requirements.',
    number: '01',
  },
  {
    icon: Lightbulb,
    title: 'Strategy',
    description: 'We develop a comprehensive strategy tailored to your business objectives and budget.',
    number: '02',
  },
  {
    icon: Rocket,
    title: 'Implementation',
    description: 'Our expert team executes the solution with precision, ensuring quality and efficiency.',
    number: '03',
  },
  {
    icon: CheckCircle,
    title: 'Optimization',
    description: 'We continuously monitor and optimize to ensure maximum performance and value.',
    number: '04',
  },
]

export default function ServiceProcess() {
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
          <h2 className="heading-2 mb-4">Our Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-secondary-light p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon className="text-accent" size={28} />
                    </div>
                    <span className="text-4xl font-bold text-gray-200">{step.number}</span>
                  </div>
                  <h3 className="heading-3 text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-accent" />
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
