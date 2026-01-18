'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const solutions = [
  {
    title: 'Enterprise Cloud Migration',
    description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum efficiency.',
    features: ['Scalable Architecture', 'Security Compliance', 'Cost Optimization', '24/7 Support'],
    gradient: 'from-blue-600 to-cyan-600',
    industries: ['Finance', 'Healthcare', 'Retail', 'Manufacturing'],
  },
  {
    title: 'AI-Powered Analytics Platform',
    description: 'Leverage artificial intelligence and machine learning to gain actionable insights from your data.',
    features: ['Machine Learning Models', 'Real-time Analytics', 'Predictive Insights', 'Automated Reporting'],
    gradient: 'from-purple-600 to-pink-600',
    industries: ['E-commerce', 'Finance', 'Healthcare', 'Telecommunications'],
  },
  {
    title: 'Digital Innovation Platform',
    description: 'Build modern digital products that drive business transformation and competitive advantage.',
    features: ['Agile Development', 'DevOps Integration', 'Continuous Delivery', 'Microservices Architecture'],
    gradient: 'from-orange-600 to-red-600',
    industries: ['Technology', 'Finance', 'Retail', 'Media'],
  },
  {
    title: 'Cybersecurity Shield',
    description: 'Comprehensive security solution protecting your digital assets from emerging threats.',
    features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Management', 'Incident Response'],
    gradient: 'from-red-600 to-orange-600',
    industries: ['Finance', 'Healthcare', 'Government', 'Energy'],
  },
  {
    title: 'Customer Experience Platform',
    description: 'Deliver exceptional customer experiences across all touchpoints with integrated solutions.',
    features: ['Omnichannel Integration', 'Personalization Engine', 'Customer Analytics', 'Support Automation'],
    gradient: 'from-green-600 to-emerald-600',
    industries: ['Retail', 'E-commerce', 'Hospitality', 'Telecommunications'],
  },
  {
    title: 'Supply Chain Optimization',
    description: 'Optimize your supply chain operations with data-driven insights and automation.',
    features: ['Demand Forecasting', 'Inventory Management', 'Logistics Optimization', 'Real-time Tracking'],
    gradient: 'from-indigo-600 to-blue-600',
    industries: ['Manufacturing', 'Retail', 'Logistics', 'Automotive'],
  },
]

export default function SolutionsShowcase() {
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
          <h2 className="heading-2 mb-4">Featured Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Proven solutions designed to address your unique business challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative bg-white p-8 h-full flex flex-col group-hover:bg-transparent transition-colors duration-300 shadow-md hover:shadow-xl">
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
                <div className="mb-6">
                  <p className="text-sm text-gray-500 group-hover:text-gray-300 mb-2 transition-colors duration-300">
                    Ideal for:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {solution.industries.map((industry) => (
                      <span
                        key={industry}
                        className="px-3 py-1 bg-secondary-light group-hover:bg-white/20 rounded-full text-xs font-medium text-gray-700 group-hover:text-white transition-colors duration-300"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-accent font-semibold group-hover:text-white transition-colors duration-300"
                >
                  Request Demo
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
