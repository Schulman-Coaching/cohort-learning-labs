'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'About Elie', href: '/about-elie' },
  { name: 'Values', href: '/values' },
  {
    name: 'Services',
    href: '/services',
    dropdown: [
      { name: 'AI Strategy Consulting', href: '/services#strategy' },
      { name: 'Implementation Support', href: '/services#implementation' },
      { name: 'Team Training', href: '/services#training' },
      { name: 'Custom Solutions', href: '/services#custom' },
    ]
  },
  {
    name: 'Resources',
    href: '/ebook',
    dropdown: [
      { name: 'Free AI Prompting Ebook', href: '/ebook' },
      { name: 'Blog Articles', href: '/blog' },
    ]
  },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary-200">
      <nav className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">CL</span>
            </div>
            <div>
              <span className="font-bold text-xl text-primary-900">Cohort Learning Labs</span>
              <span className="hidden md:block text-xs text-primary-600">AI Solutions for Small Business</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button className="flex items-center space-x-1 text-primary-700 hover:text-accent transition-colors py-2">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-primary-100 overflow-hidden"
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-3 text-primary-700 hover:bg-primary-50 hover:text-accent transition-colors"
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
                    className="text-primary-700 hover:text-accent transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent-hover transition-colors"
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
              <X className="w-6 h-6 text-primary-700" />
            ) : (
              <Menu className="w-6 h-6 text-primary-700" />
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
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block py-2 text-primary-700 hover:text-accent transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-4 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block py-1 text-sm text-primary-600 hover:text-accent transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  href="/contact"
                  className="block bg-accent text-white px-6 py-2 rounded-lg text-center hover:bg-accent-hover transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
