import { Metadata } from 'next'
import { Check, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing - Cohort Learning Labs',
  description: 'Transparent pricing for our AI consulting services. Choose the plan that best fits your business needs and budget.',
}

const plans = [
  {
    name: 'Starter',
    price: '$2,500',
    period: 'one-time',
    description: 'Perfect for small businesses just starting with AI',
    features: [
      'AI Readiness Assessment',
      'Basic Strategy Consultation (4 hours)',
      'Tool Recommendations',
      'Implementation Roadmap',
      'Email Support (30 days)',
    ],
    notIncluded: [
      'Hands-on Implementation',
      'Custom Development',
      'Team Training',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$7,500',
    period: 'per month',
    description: 'Comprehensive support for businesses ready to scale with AI',
    features: [
      'Everything in Starter',
      'Dedicated Consultant (20 hours/month)',
      'Implementation Support',
      'Team Training (up to 10 people)',
      'Monthly Progress Reviews',
      'Priority Support',
      'Performance Monitoring',
    ],
    notIncluded: [
      'Custom Development',
    ],
    cta: 'Start Growing',
    popular: true,
    minCommitment: '3 months minimum',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored to you',
    description: 'Full-service AI transformation for ambitious businesses',
    features: [
      'Everything in Growth',
      'Unlimited Consulting Hours',
      'Custom AI Development',
      'Company-wide Training',
      'Dedicated Project Manager',
      'SLA Guarantee',
      'Quarterly Business Reviews',
      'Executive Reporting',
    ],
    notIncluded: [],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Choose the plan that best fits your business needs. All plans include our 
            commitment to your success and satisfaction guarantee.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-accent to-blue-600 text-white shadow-2xl scale-105'
                    : 'bg-primary-50 border border-primary-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-primary-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-primary-900'}`}>
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-primary-900'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ml-2 ${plan.popular ? 'text-white/80' : 'text-primary-600'}`}>
                      {plan.period}
                    </span>
                  </div>
                  {plan.minCommitment && (
                    <p className={`text-sm ${plan.popular ? 'text-white/80' : 'text-primary-600'}`}>
                      {plan.minCommitment}
                    </p>
                  )}
                </div>
                
                <p className={`mb-6 ${plan.popular ? 'text-white/90' : 'text-primary-600'}`}>
                  {plan.description}
                </p>
                
                <div className="mb-8">
                  <p className={`font-semibold mb-4 ${plan.popular ? 'text-white' : 'text-primary-900'}`}>
                    Included:
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className={`w-5 h-5 mt-0.5 mr-3 flex-shrink-0 ${
                          plan.popular ? 'text-white' : 'text-accent'
                        }`} />
                        <span className={plan.popular ? 'text-white/90' : 'text-primary-700'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <p className={`font-semibold mb-3 mt-6 ${plan.popular ? 'text-white' : 'text-primary-900'}`}>
                        Not Included:
                      </p>
                      <ul className="space-y-2">
                        {plan.notIncluded.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <X className={`w-5 h-5 mt-0.5 mr-3 flex-shrink-0 ${
                              plan.popular ? 'text-white/50' : 'text-primary-400'
                            }`} />
                            <span className={plan.popular ? 'text-white/60' : 'text-primary-500'}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
                
                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-colors ${
                    plan.popular
                      ? 'bg-white text-accent hover:bg-primary-50'
                      : 'bg-accent text-white hover:bg-accent-hover'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary-900 mb-2">
                What's included in the consultation hours?
              </h3>
              <p className="text-primary-600">
                Consultation hours include strategy sessions, implementation guidance, troubleshooting, 
                progress reviews, and any direct support from our consultants.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary-900 mb-2">
                Can I change my plan later?
              </h3>
              <p className="text-primary-600">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the 
                start of your next billing cycle.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary-900 mb-2">
                Do you offer refunds?
              </h3>
              <p className="text-primary-600">
                We offer a 30-day satisfaction guarantee for all new clients. If you're not completely 
                satisfied with our services, we'll refund your investment.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary-900 mb-2">
                What happens after my project ends?
              </h3>
              <p className="text-primary-600">
                We provide comprehensive documentation and training to ensure your team can maintain 
                and optimize the solutions independently. Ongoing support packages are also available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your needs and find the perfect plan for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors"
          >
            Schedule Your Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
