'use client'

import { motion } from 'framer-motion'
import { Users, TrendingUp, Award, Clock } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '100+',
    label: 'Businesses Transformed',
    description: 'Small businesses successfully integrated AI',
  },
  {
    icon: TrendingUp,
    value: '45%',
    label: 'Average Efficiency Gain',
    description: 'Productivity improvement after implementation',
  },
  {
    icon: Award,
    value: '95%',
    label: 'Client Satisfaction',
    description: 'Based on post-project surveys',
  },
  {
    icon: Clock,
    value: '30',
    label: 'Days Average ROI',
    description: 'Time to see measurable results',
  },
]

export default function StatsSection() {
  return (
    <section className="bg-white py-12 border-b border-primary-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-3">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl font-bold text-primary-900 mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-primary-700 mb-1">{stat.label}</div>
              <div className="text-xs text-primary-500">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
