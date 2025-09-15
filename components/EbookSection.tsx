'use client'

import { motion } from 'framer-motion'
import { Download, BookOpen, Star, ArrowRight, Brain, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function EbookSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-accent/5 to-blue-600/5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
              <Star className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-accent">
                Free Download
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Master AI Communication with Our Free <span className="gradient-text">Prompting Guide</span>
            </h2>

            <p className="text-lg text-primary-600 mb-8">
              "Prompting: Humans Learning to Ask for What They Want" - A comprehensive guide to effective
              AI communication that transforms how your team interacts with AI tools.
            </p>

            {/* Benefits List */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-700">Learn the anatomy of effective prompts</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-700">Master advanced prompting techniques</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-700">Avoid common pitfalls that reduce effectiveness</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/ebook"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors group"
              >
                Get Free Ebook
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/ebooks/prompting.html"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-700 font-semibold rounded-lg border-2 border-primary-300 hover:border-accent hover:text-accent transition-colors"
              >
                <BookOpen className="mr-2 w-5 h-5" />
                Read Online
              </Link>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-accent to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary-900 mb-4">
                  Prompting: Humans Learning to Ask for What They Want
                </h3>
                <p className="text-primary-600 mb-6">
                  A practical guide to effective communication in the AI era
                </p>
                <div className="grid grid-cols-3 gap-4 text-sm text-primary-500">
                  <div>
                    <div className="font-semibold text-accent">8</div>
                    <div>Chapters</div>
                  </div>
                  <div>
                    <div className="font-semibold text-accent">30min</div>
                    <div>Read</div>
                  </div>
                  <div>
                    <div className="font-semibold text-accent">Free</div>
                    <div>Download</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center"
            >
              <Download className="w-8 h-8 text-accent" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center"
            >
              <BookOpen className="w-6 h-6 text-blue-600" />
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-primary-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-accent mb-1">8</div>
              <div className="text-sm text-primary-600">Comprehensive Chapters</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-1">5</div>
              <div className="text-sm text-primary-600">Core Components</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-1">20+</div>
              <div className="text-sm text-primary-600">Practical Examples</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-1">Free</div>
              <div className="text-sm text-primary-600">No Strings Attached</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}