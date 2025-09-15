import { Metadata } from 'next'
import { Star, Quote, Building, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Testimonials - Cohort Learning Labs',
  description: 'Read success stories and testimonials from small businesses that have transformed their operations with our AI consulting services.',
}

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Solutions',
    industry: 'Technology',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    content: 'Cohort Learning Labs completely transformed our approach to customer service. Their AI chatbot solution reduced our response time by 80% and improved customer satisfaction scores by 35%. The ROI was evident within the first month.',
    rating: 5,
    results: {
      metric1: { value: '80%', label: 'Faster Response' },
      metric2: { value: '35%', label: 'Higher Satisfaction' },
    },
  },
  {
    name: 'Michael Chen',
    role: 'Operations Director',
    company: 'GrowthWorks Inc.',
    industry: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    content: 'The inventory management system that Cohort Learning Labs helped us implement has been a game-changer. We\'ve reduced waste by 40% and improved our demand forecasting accuracy dramatically. Their team made the complex simple.',
    rating: 5,
    results: {
      metric1: { value: '40%', label: 'Less Waste' },
      metric2: { value: '25%', label: 'Cost Savings' },
    },
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'Creative Digital Agency',
    industry: 'Marketing',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    content: 'As a creative agency, we were skeptical about AI. But Cohort Learning Labs showed us how to use AI for content generation and campaign optimization without losing our creative edge. We now deliver projects 3x faster.',
    rating: 5,
    results: {
      metric1: { value: '3x', label: 'Faster Delivery' },
      metric2: { value: '50%', label: 'More Projects' },
    },
  },
  {
    name: 'James Patterson',
    role: 'CFO',
    company: 'Regional Healthcare Partners',
    industry: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    content: 'The predictive analytics solution for patient scheduling has revolutionized our operations. We\'ve reduced no-shows by 30% and improved resource utilization significantly. The team\'s healthcare expertise was evident throughout.',
    rating: 5,
    results: {
      metric1: { value: '30%', label: 'Fewer No-shows' },
      metric2: { value: '20%', label: 'Better Utilization' },
    },
  },
  {
    name: 'Lisa Thompson',
    role: 'Owner',
    company: 'Thompson Legal Services',
    industry: 'Legal',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop',
    content: 'Cohort Learning Labs helped us automate document review and contract analysis. What used to take hours now takes minutes. Their training ensured our entire team was comfortable with the new tools from day one.',
    rating: 5,
    results: {
      metric1: { value: '75%', label: 'Time Saved' },
      metric2: { value: '2x', label: 'More Clients' },
    },
  },
  {
    name: 'Robert Martinez',
    role: 'Director of Operations',
    company: 'Fresh Foods Market',
    industry: 'Retail',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    content: 'The AI-powered demand forecasting system has transformed our supply chain. We\'ve reduced food waste dramatically while ensuring we never run out of popular items. The cost savings have been substantial.',
    rating: 5,
    results: {
      metric1: { value: '45%', label: 'Less Food Waste' },
      metric2: { value: '$250K', label: 'Annual Savings' },
    },
  },
]

const caseStudies = [
  {
    company: 'TechStart Solutions',
    industry: 'Technology',
    challenge: 'Overwhelming customer support tickets',
    solution: 'AI-powered chatbot and ticket routing system',
    results: '80% reduction in response time, 35% increase in CSAT',
    testimonial: 'The transformation was incredible. Our support team can now focus on complex issues while AI handles routine queries.',
  },
  {
    company: 'GrowthWorks Inc.',
    industry: 'E-commerce',
    challenge: 'Inefficient inventory management',
    solution: 'Predictive analytics for demand forecasting',
    results: '40% reduction in waste, 25% cost savings',
    testimonial: 'We finally have the insights we need to make smart inventory decisions.',
  },
  {
    company: 'Creative Digital Agency',
    industry: 'Marketing',
    challenge: 'Slow content creation process',
    solution: 'AI-assisted content generation and optimization',
    results: '3x faster project delivery, 50% more projects handled',
    testimonial: 'AI didn\'t replace our creativity - it amplified it.',
  },
]

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Client <span className="gradient-text">Success Stories</span>
          </h1>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Real results from real businesses. Discover how our clients have transformed 
            their operations and achieved remarkable growth with AI.
          </p>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="bg-white py-12 border-b border-primary-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">100+</div>
              <div className="text-primary-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <div className="text-primary-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">45%</div>
              <div className="text-primary-600">Avg. Efficiency Gain</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">30 Days</div>
              <div className="text-primary-600">Avg. Time to ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">
            What Our Clients Say
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-primary-50 rounded-xl p-8 relative">
                <Quote className="absolute top-4 right-4 w-10 h-10 text-accent/20" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-primary-700 mb-6 italic text-lg">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-primary-900">{testimonial.name}</p>
                    <p className="text-sm text-primary-600">
                      {testimonial.role}, {testimonial.company}
                    </p>
                    <p className="text-xs text-primary-500">{testimonial.industry}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">{testimonial.results.metric1.value}</div>
                    <div className="text-sm text-primary-600">{testimonial.results.metric1.label}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">{testimonial.results.metric2.value}</div>
                    <div className="text-sm text-primary-600">{testimonial.results.metric2.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">
            Case Studies
          </h2>
          
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="grid md:grid-cols-4 gap-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <Building className="w-5 h-5 text-accent mr-2" />
                      <h3 className="font-semibold text-primary-900">{study.company}</h3>
                    </div>
                    <p className="text-sm text-primary-600">{study.industry}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-primary-900 mb-1">Challenge</p>
                    <p className="text-sm text-primary-600">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-primary-900 mb-1">Solution</p>
                    <p className="text-sm text-primary-600">{study.solution}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <TrendingUp className="w-5 h-5 text-accent mr-2" />
                      <p className="text-sm font-semibold text-primary-900">Results</p>
                    </div>
                    <p className="text-sm text-primary-600">{study.results}</p>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-primary-100">
                  <p className="text-primary-700 italic">"{study.testimonial}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent to-blue-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Join Our Success Stories
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let us help you transform your business with AI and become our next success story.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-accent font-semibold rounded-lg hover:bg-primary-50 transition-colors"
          >
            Start Your Transformation
          </a>
        </div>
      </section>
    </>
  )
}
