import { Metadata } from 'next'
import { Brain, Cog, Users, Zap, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services - Cohort Learning Labs',
  description: 'Explore our comprehensive AI consulting services including strategy, implementation, training, and custom solutions for small businesses.',
}

const services = [
  {
    id: 'strategy',
    icon: Brain,
    title: 'AI Strategy Consulting',
    tagline: 'Chart Your AI Journey',
    description: 'We help you develop a comprehensive AI strategy that aligns with your business goals, resources, and market position.',
    features: [
      'Business Process Analysis',
      'AI Opportunity Assessment',
      'Technology Stack Recommendations',
      'ROI Projections',
      'Implementation Roadmap',
      'Risk Assessment & Mitigation',
    ],
    benefits: [
      'Clear vision for AI adoption',
      'Prioritized implementation plan',
      'Budget optimization',
      'Competitive advantage',
    ],
    deliverables: [
      'Comprehensive AI Strategy Document',
      'Implementation Timeline',
      'Budget Forecast',
      'Success Metrics Framework',
    ],
  },
  {
    id: 'implementation',
    icon: Cog,
    title: 'Implementation Support',
    tagline: 'From Planning to Production',
    description: 'Our hands-on implementation support ensures smooth integration of AI solutions into your existing operations.',
    features: [
      'Tool Selection & Procurement',
      'System Integration',
      'Data Pipeline Setup',
      'Process Automation',
      'Quality Assurance',
      'Performance Monitoring',
    ],
    benefits: [
      'Reduced implementation time',
      'Minimized disruption',
      'Expert guidance throughout',
      'Immediate productivity gains',
    ],
    deliverables: [
      'Fully Integrated AI Systems',
      'Documentation & SOPs',
      'Performance Dashboard',
      'Support Handover Package',
    ],
  },
  {
    id: 'training',
    icon: Users,
    title: 'Team Training',
    tagline: 'Empower Your Workforce',
    description: 'Comprehensive training programs to ensure your team can effectively leverage AI tools and technologies.',
    features: [
      'Custom Curriculum Development',
      'Hands-on Workshops',
      'Role-specific Training',
      'Best Practices Sessions',
      'Ongoing Support & Q&A',
      'Certification Programs',
    ],
    benefits: [
      'Increased team confidence',
      'Higher adoption rates',
      'Improved productivity',
      'Reduced resistance to change',
    ],
    deliverables: [
      'Training Materials & Resources',
      'Video Tutorials',
      'Quick Reference Guides',
      'Competency Assessments',
    ],
  },
  {
    id: 'custom',
    icon: Zap,
    title: 'Custom Solutions',
    tagline: 'Tailored to Your Needs',
    description: 'When off-the-shelf solutions don\'t fit, we develop custom AI applications designed specifically for your business.',
    features: [
      'Requirements Analysis',
      'Custom AI Model Development',
      'API Integration',
      'Workflow Automation',
      'Chatbot Development',
      'Predictive Analytics',
    ],
    benefits: [
      'Perfect fit for your needs',
      'Competitive differentiation',
      'Scalable solutions',
      'Full ownership of IP',
    ],
    deliverables: [
      'Custom AI Application',
      'Source Code & Documentation',
      'Deployment Support',
      'Maintenance Plan',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-primary-600 max-w-3xl">
            Comprehensive AI solutions designed to transform your business operations, 
            enhance productivity, and drive sustainable growth.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-primary-50'}`}
        >
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-primary-900">{service.title}</h2>
                    <p className="text-accent font-semibold">{service.tagline}</p>
                  </div>
                </div>
                
                <p className="text-lg text-primary-600 mb-6">
                  {service.description}
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-primary-900 mb-4">What We Offer</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-primary-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors group"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-primary-100">
                  <h3 className="text-xl font-semibold text-primary-900 mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-primary-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-accent/5 rounded-xl p-6 border border-accent/20">
                  <h3 className="text-xl font-semibold text-primary-900 mb-4">Deliverables</h3>
                  <ul className="space-y-3">
                    {service.deliverables.map((deliverable, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-accent mr-2">✓</span>
                        <span className="text-primary-700">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent to-blue-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule a free consultation and we'll help you identify the best solutions for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-accent font-semibold rounded-lg hover:bg-primary-50 transition-colors"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
