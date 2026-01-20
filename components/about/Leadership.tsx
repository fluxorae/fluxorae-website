'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail } from 'lucide-react'

const leaders = [
  {
    name: 'Shivam Dhuriya',
    role: 'Director',
    din: '11345075',
    appointmentDate: '16-10-2025',
    bio: 'Visionary Director driving innovation and strategic growth at Fluxorae Private Limited.',
    image: '/team/shivam.jpg',
  },
  {
    name: 'Sachin Verma',
    role: 'Director',
    din: '11345076',
    appointmentDate: '16-10-2025',
    bio: 'Strategic Director focused on technology delivery and operational excellence.',
    image: '/team/sachin.jpg',
  },
]

export default function Leadership() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">Leadership Team</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Operators and builders focused on resilient delivery, security, and measurable growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="heading-3 text-2xl mb-1 group-hover:text-accent transition-colors duration-300">{leader.name}</h3>
                    <p className="text-accent font-semibold">{leader.role}</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-xl font-bold text-white">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="space-y-1 mb-3 py-3 border-y border-white/10">
                  <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">DIN: {leader.din}</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">Appointed: {leader.appointmentDate}</p>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{leader.bio}</p>
                <div className="flex items-center space-x-3">
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-gray-300 hover:bg-[#0077B5] hover:text-white transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-gray-300 hover:bg-accent hover:text-white transition-all duration-300"
                    aria-label="Email"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
