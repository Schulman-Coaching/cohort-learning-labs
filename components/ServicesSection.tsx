'use client'

import { motion } from 'framer-motion'
import { Brain, Cog, Users, Zap, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Brain,
    title: 'AI Strategy Consulting',
    description: 'Develop a comprehensive AI roadmap aligned with your business goals and resources.',
    features: ['Business Analysis', 'AI Opportunity Assessment', 'Strategic Planning'],
  },
  {
    icon: Cog,
    title: 'Implementation Support',
    description: 'Hands-on assistance to integrate AI tools and workflows into your operations.',
    features: ['Tool Selection', 'Process Integration', 'Performance Monitoring'],
  },
  {
    icon: Users,
    title: 'Team Training',
    description: 'Empower your team with the knowledge and skills to leverage AI effectively.',
    features: ['Custom Workshops', 'Hands-on Training', 'Ongoing Support'],
  },
  {
    icon: Zap,
    title: 'Custom Solutions',
    description: 'Tailored AI applications designed specifically for your unique business needs.',
    features: ['Custom Development', 'API Integration', 'Automation Solutions'],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-primary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations and drive growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg card-hover group"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                <service.icon className="w-6 h-6 text-accent group-hover:text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-primary-600 mb-4">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-primary-600">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center text-accent font-semibold hover:text-accent-hover transition-colors group"
              >
                Learn More
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
