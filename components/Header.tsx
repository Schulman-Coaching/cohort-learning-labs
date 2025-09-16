'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Phone, Mail, Clock, Users } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'About Elie', href: '/about-elie' },
  { name: 'Our Approach', href: '/our-approach' },
  { name: 'Values', href: '/values' },
  {
    name: 'Services',
    href: '/services',
    megaMenu: {
      sections: [
        {
          title: 'Consulting Services',
          links: [
            { name: 'AI Strategy Consulting', href: '/services#strategy', description: 'Strategic planning for AI adoption' },
            { name: 'Implementation Support', href: '/services#implementation', description: 'Hands-on implementation guidance' },
            { name: 'Team Training', href: '/services#training', description: 'Comprehensive team education' },
            { name: 'Custom Solutions', href: '/services#custom', description: 'Tailored AI solutions for your business' },
          ]
        },
        {
          title: 'Learning Programs',
          links: [
            { name: 'Cohort-Based Learning', href: '/programs#cohort', description: 'Collaborative group learning experiences' },
            { name: 'Executive Workshops', href: '/programs#executive', description: 'Leadership-focused AI training' },
            { name: 'Team Facilitation', href: '/programs#facilitation', description: 'Group dynamics and collaboration' },
          ]
        }
      ]
    }
  },
  {
    name: 'Resources',
    href: '/resources',
    dropdown: [
      { name: 'Free AI Prompting Ebook', href: '/ebook' },
      { name: 'Blog Articles', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Templates & Tools', href: '/tools' },
    ]
  },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="bg-white">
      {/* Top Tier - Utility Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-10">
            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Phone className="w-3 h-3" />
                <span>(516) 206-2480</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-3 h-3" />
                <span>info@cohortlearninglabs.org</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>Mon-Fri 9AM-5PM EST</span>
              </div>
            </div>

            {/* Utility Links */}
            <div className="flex items-center space-x-4 text-sm">
              <Link href="/about" className="text-gray-600 hover:text-purple-600 transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-purple-600 transition-colors">
                Blog
              </Link>
              <Link href="/resources" className="text-gray-600 hover:text-purple-600 transition-colors">
                Resources
              </Link>
              <Link
                href="/contact"
                className="bg-purple-600 text-white px-3 py-1 text-xs font-medium rounded hover:bg-purple-700 transition-colors"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Tier - Primary Navigation */}
      <div className="bg-white">
        <nav className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 text-decoration-none">
              <div className="w-9 h-9 bg-purple-600 rounded-md flex items-center justify-center text-white p-1.5">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  {/* Chair 1 (top) */}
                  <rect x="11" y="2" width="2" height="6" rx="0.5"/>
                  <rect x="10" y="7" width="4" height="1.5" rx="0.3"/>
                  {/* Chair 2 (top-right) */}
                  <rect x="17.5" y="5" width="2" height="6" rx="0.5" transform="rotate(60 18.5 8)"/>
                  <rect x="16.8" y="9.8" width="4" height="1.5" rx="0.3" transform="rotate(60 18.8 10.5)"/>
                  {/* Chair 3 (bottom-right) */}
                  <rect x="17.5" y="13" width="2" height="6" rx="0.5" transform="rotate(120 18.5 16)"/>
                  <rect x="16.8" y="12.7" width="4" height="1.5" rx="0.3" transform="rotate(120 18.8 13.5)"/>
                  {/* Chair 4 (bottom) */}
                  <rect x="11" y="16" width="2" height="6" rx="0.5" transform="rotate(180 12 19)"/>
                  <rect x="10" y="15.5" width="4" height="1.5" rx="0.3" transform="rotate(180 12 16.25)"/>
                  {/* Chair 5 (bottom-left) */}
                  <rect x="4.5" y="13" width="2" height="6" rx="0.5" transform="rotate(240 5.5 16)"/>
                  <rect x="3.8" y="12.7" width="4" height="1.5" rx="0.3" transform="rotate(240 5.8 13.5)"/>
                  {/* Chair 6 (top-left) */}
                  <rect x="4.5" y="5" width="2" height="6" rx="0.5" transform="rotate(300 5.5 8)"/>
                  <rect x="3.8" y="9.8" width="4" height="1.5" rx="0.3" transform="rotate(300 5.8 10.5)"/>
                  {/* Center circle (table) */}
                  <circle cx="12" cy="12" r="2.5" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6"/>
                </svg>
              </div>
              <div>
                <div className="text-gray-900 text-xl font-semibold">Cohort Learning Labs</div>
                <span className="text-gray-600 text-xs font-normal block -mt-0.5">Collaborative Learning in the Age of AI</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.megaMenu ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="flex items-center space-x-1 text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors duration-150 py-2">
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-white rounded-lg shadow-xl border border-gray-200 p-6 z-50"
                          >
                            <div className="grid grid-cols-2 gap-8">
                              {item.megaMenu.sections.map((section, index) => (
                                <div key={index}>
                                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    <Users className="w-4 h-4 text-purple-600" />
                                    {section.title}
                                  </h3>
                                  <ul className="space-y-3">
                                    {section.links.map((link) => (
                                      <li key={link.name}>
                                        <Link
                                          href={link.href}
                                          className="block group"
                                        >
                                          <div className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-150">
                                            {link.name}
                                          </div>
                                          <div className="text-sm text-gray-500 mt-1">
                                            {link.description}
                                          </div>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="flex items-center space-x-1 text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors duration-150 py-2">
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-40"
                          >
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors duration-150"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-gray-900 hover:text-purple-600 transition-colors duration-150 py-2"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="bg-purple-600 text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-purple-700 transition-colors duration-150"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-900" />
              ) : (
                <Menu className="w-5 h-5 text-gray-900" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="lg:hidden overflow-hidden border-t border-gray-100"
              >
                <div className="py-4 space-y-1">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-base font-medium text-gray-900 hover:text-purple-600 transition-colors duration-150"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.megaMenu && (
                        <div className="ml-4 space-y-2 pb-2">
                          {item.megaMenu.sections.map((section) => (
                            <div key={section.title}>
                              <div className="px-4 py-2 text-sm font-medium text-gray-600">
                                {section.title}
                              </div>
                              {section.links.map((link) => (
                                <Link
                                  key={link.name}
                                  href={link.href}
                                  className="block px-8 py-2 text-sm text-gray-700 hover:text-purple-600 transition-colors duration-150"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {link.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                      {item.dropdown && !item.megaMenu && (
                        <div className="ml-4 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-8 py-2 text-sm text-gray-600 hover:text-purple-600 transition-colors duration-150"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="px-4 pt-4">
                    <Link
                      href="/contact"
                      className="block w-full bg-purple-600 text-white px-4 py-3 text-base font-medium rounded-md text-center hover:bg-purple-700 transition-colors duration-150"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  )
}
