'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Clock, Send, Calendar, MessageSquare } from 'lucide-react'

type FormData = {
  name: string
  email: string
  company: string
  phone: string
  service: string
  message: string
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    }
    
    setIsSubmitting(false)
    setTimeout(() => setSubmitStatus('idle'), 5000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Let's Start Your <span className="gradient-text">AI Journey</span>
          </h1>
          <p className="text-xl text-primary-600 max-w-3xl">
            Ready to transform your business with AI? Get in touch for a free consultation 
            and discover how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-primary-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-primary-900 mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        {...register('name', { required: 'Name is required' })}
                        className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        type="email"
                        className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="john@company.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-2">
                        Company Name
                      </label>
                      <input
                        {...register('company')}
                        className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Your Company"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        {...register('phone')}
                        className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      {...register('service')}
                      className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select a service</option>
                      <option value="strategy">AI Strategy Consulting</option>
                      <option value="implementation">Implementation Support</option>
                      <option value="training">Team Training</option>
                      <option value="custom">Custom Solutions</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      rows={5}
                      className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Tell us about your project and goals..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 w-5 h-5" />
                  </button>
                  
                  {submitStatus === 'success' && (
                    <p className="text-green-600 text-center">
                      Thank you for your message! We'll get back to you soon.
                    </p>
                  )}
                  
                  {submitStatus === 'error' && (
                    <p className="text-red-600 text-center">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}
                </form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-primary-100">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-accent mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium text-primary-900">Email</p>
                      <p className="text-primary-600">info@cohortlearninglabs.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-accent mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium text-primary-900">Phone</p>
                      <p className="text-primary-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-accent mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium text-primary-900">Office</p>
                      <p className="text-primary-600">
                        123 Business Ave, Suite 100<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-accent mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium text-primary-900">Business Hours</p>
                      <p className="text-primary-600">
                        Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="bg-accent text-white rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
                
                <div className="space-y-3">
                  <a
                    href="#schedule"
                    className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <span className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule a Call
                    </span>
                    <span>→</span>
                  </a>
                  
                  <a
                    href="#"
                    className="flex items-center justify-between p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <span className="flex items-center">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Start Live Chat
                    </span>
                    <span>→</span>
                  </a>
                </div>
              </div>
              
              {/* Response Time */}
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  Average Response Time
                </h3>
                <p className="text-3xl font-bold text-accent mb-2">2 Hours</p>
                <p className="text-sm text-primary-600">
                  During business hours. We aim to respond to all inquiries 
                  within one business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="section-padding bg-primary-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">
            Schedule a Free Consultation
          </h2>
          <p className="text-xl text-primary-600 mb-8 max-w-2xl mx-auto">
            Book a 30-minute call with our AI experts to discuss your business needs 
            and explore how we can help.
          </p>
          
          {/* Calendly embed placeholder */}
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
            <p className="text-primary-600">
              [Calendly scheduling widget would be embedded here]
            </p>
            <p className="text-sm text-primary-500 mt-4">
              To integrate Calendly, add their embed script to your site.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
