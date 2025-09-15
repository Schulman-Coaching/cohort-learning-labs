'use client'

import { motion } from 'framer-motion'
import { Target, Users, Lightbulb } from 'lucide-react'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Bridging the Gap Between <span className="gradient-text">AI Innovation</span> and Small Business Success
            </h2>
            
            <p className="text-lg text-primary-600 mb-6">
              At Cohort Learning Labs, we understand that adopting AI can feel overwhelming for small businesses. 
              That's why we've developed a comprehensive approach that combines strategic consulting, 
              hands-on implementation, and continuous support.
            </p>
            
            <p className="text-lg text-primary-600 mb-8">
              Our team of experts specializes in translating complex AI technologies into practical, 
              actionable solutions that drive real business results. We don't just advise—we partner 
              with you every step of the way.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-3">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-primary-900 mb-1">Focused</h3>
                <p className="text-sm text-primary-600">Tailored solutions for your specific needs</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-3">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-primary-900 mb-1">Collaborative</h3>
                <p className="text-sm text-primary-600">Working alongside your team</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-3">
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-primary-900 mb-1">Innovative</h3>
                <p className="text-sm text-primary-600">Cutting-edge AI solutions</p>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center text-accent font-semibold hover:text-accent-hover transition-colors"
            >
              Learn More About Us →
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="Team collaboration"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent text-white rounded-lg p-6 shadow-xl">
              <p className="text-3xl font-bold mb-1">5+</p>
              <p className="text-sm">Years of Experience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
