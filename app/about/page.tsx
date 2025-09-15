import { Metadata } from 'next'
import { CheckCircle, Target, Heart, Rocket } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Cohort Learning Labs',
  description: 'Learn about our mission to empower small businesses with AI solutions and our experienced team of consultants.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            About <span className="gradient-text">Cohort Learning Labs</span>
          </h1>
          <p className="text-xl text-primary-600 max-w-3xl">
            We're on a mission to democratize AI for small businesses, making cutting-edge technology 
            accessible and practical for organizations of all sizes.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-6">Our Story</h2>
              <p className="text-lg text-primary-600 mb-4">
                Founded in 2019, Cohort Learning Labs emerged from a simple observation: while large 
                corporations were rapidly adopting AI technologies, small businesses were being left behind, 
                not due to lack of interest, but due to lack of accessible expertise and resources.
              </p>
              <p className="text-lg text-primary-600 mb-4">
                Our founder, with over a decade of experience in both AI development and small business 
                consulting, recognized this gap and set out to bridge it. We started with a single client, 
                a local retail business struggling with inventory management, and helped them implement 
                an AI-powered solution that reduced waste by 40%.
              </p>
              <p className="text-lg text-primary-600">
                Today, we've helped over 100 small businesses across various industries harness the power 
                of AI, and we're just getting started. Our approach remains the same: practical, 
                personalized, and focused on real results.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="Our team at work"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">
            Our Mission & Values
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Mission-Driven</h3>
              <p className="text-primary-600">
                Empowering small businesses to compete and thrive in the AI-driven economy.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Client-Centered</h3>
              <p className="text-primary-600">
                Your success is our success. We're committed to delivering real value.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Rocket className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Innovation</h3>
              <p className="text-primary-600">
                Staying at the forefront of AI developments to bring you the best solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Integrity</h3>
              <p className="text-primary-600">
                Transparent, honest, and ethical in all our business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">
            Meet Our Team
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop"
                alt="Team member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-primary-900 mb-1">John Anderson</h3>
              <p className="text-primary-600 mb-2">Founder & CEO</p>
              <p className="text-sm text-primary-500">
                15+ years in AI and business consulting
              </p>
            </div>
            
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop"
                alt="Team member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-primary-900 mb-1">Maria Garcia</h3>
              <p className="text-primary-600 mb-2">Head of AI Strategy</p>
              <p className="text-sm text-primary-500">
                Former Google AI researcher, PhD in Machine Learning
              </p>
            </div>
            
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop"
                alt="Team member"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-primary-900 mb-1">David Kim</h3>
              <p className="text-primary-600 mb-2">Implementation Director</p>
              <p className="text-sm text-primary-500">
                10+ years in software development and integration
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
