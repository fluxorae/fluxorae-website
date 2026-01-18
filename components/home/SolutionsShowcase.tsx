'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const solutions = [
  {
    title: 'Enterprise Cloud Migration',
    description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime.',
    features: ['Scalable Architecture', 'Security Compliance', 'Cost Optimization'],
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'AI-Powered Analytics',
    description: 'Leverage artificial intelligence to gain insights from your data.',
    features: ['Machine Learning Models', 'Real-time Analytics', 'Predictive Insights'],
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    title: 'Digital Innovation Platform',
    description: 'Build modern digital products that drive business transformation.',
    features: ['Agile Development', 'DevOps Integration', 'Continuous Delivery'],
    gradient: 'from-orange-600 to-red-600',
  },
]

export default function SolutionsShowcase() {
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
          <h2 className="heading-2 mb-4">Innovative Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cutting-edge solutions designed to solve complex business challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group overflow-hidden rounded-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative bg-secondary-light p-8 h-full flex flex-col group-hover:bg-transparent transition-colors duration-300">
                <h3 className="heading-3 text-xl mb-4 group-hover:text-white transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  {solution.description}
                </p>
                <ul className="space-y-3 mb-6 flex-grow">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <CheckCircle
                        size={20}
                        className="text-accent group-hover:text-white transition-colors duration-300 flex-shrink-0"
                      />
                      <span className="text-gray-700 group-hover:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/solutions"
                  className="inline-flex items-center text-accent font-semibold group-hover:text-white transition-colors duration-300"
                >
                  Explore Solution
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
                </Link>
              </div>
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
          <Link href="/solutions" className="btn-secondary">
            Discover All Solutions
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
