import { Metadata } from 'next'
import { Brain, Users, Heart, Target, Lightbulb, Shield, Award, Scale, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Cohort Learning Labs',
  description: 'Led by Elie Schulman, we combine deep expertise in group facilitation, organizational dynamics, and AI technology to help small businesses thrive in the digital age.',
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
            Where human insight meets technological innovation. We specialize in helping small businesses 
            navigate AI adoption through structured group learning and personalized facilitation.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">
              Meet Our Founder
            </h2>
            
            <div className="bg-primary-50 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="lg:w-1/3">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                    alt="Elie Schulman"
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>
                <div className="lg:w-2/3">
                  <h3 className="text-2xl font-bold text-primary-900 mb-2">Elie Schulman</h3>
                  <p className="text-lg text-accent font-semibold mb-4">Founder & Lead Facilitator</p>
                  
                  <p className="text-primary-700 mb-4">
                    Elie Schulman brings a unique blend of expertise to Cohort Learning Labs. With nearly 
                    two decades of experience in group psychoanalysis, mindfulness practice, and organizational 
                    development, he has mastered the art of fostering meaningful, transformative discussions 
                    that drive real business results.
                  </p>
                  
                  <p className="text-primary-700 mb-4">
                    As a practicing lawyer specializing in complex interpersonal conflicts and mediation, 
                    Elie understands the challenges businesses face when navigating change. His legal practice 
                    has reinforced his skills in active listening, conflict resolution, and structured 
                    problem-solving—critical tools for guiding organizations through AI transformation.
                  </p>
                  
                  <p className="text-primary-700">
                    Elie's approach combines emotional intelligence with practical business strategy, creating 
                    safe, structured learning environments where teams can explore AI adoption while addressing 
                    the human side of technological change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">
            Our Unique Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Group Facilitation Excellence</h3>
              <p className="text-primary-600">
                Over 18 years of experience in group dynamics, learning from leading figures including 
                Dr. Louis Ormont. Expert in creating cohesive, productive team environments.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Emotional Intelligence & AI</h3>
              <p className="text-primary-600">
                Uniquely positioned to address both the technical and human aspects of AI adoption, 
                ensuring teams embrace change rather than resist it.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Scale className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Legal & Business Acumen</h3>
              <p className="text-primary-600">
                Background in law and mediation brings practical conflict-resolution skills and 
                understanding of compliance, ethics, and risk management in AI implementation.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Mindfulness & Resilience</h3>
              <p className="text-primary-600">
                Integrating mindfulness techniques to help teams manage change stress and maintain 
                clarity during digital transformation.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Safe Learning Environments</h3>
              <p className="text-primary-600">
                Creating non-judgmental spaces where teams can experiment, fail, learn, and grow 
                together in their AI journey.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Proven Track Record</h3>
              <p className="text-primary-600">
                Successfully guided over 100 organizations through transitions, with deep experience 
                in personal and professional transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">
              Our Unique Approach
            </h2>
            
            <div className="prose prose-lg max-w-none text-primary-700">
              <p className="mb-6">
                At Cohort Learning Labs, we believe that successful AI adoption isn't just about 
                technology—it's about people. Our approach combines cutting-edge AI solutions with 
                deep understanding of human dynamics and organizational psychology.
              </p>
              
              <h3 className="text-xl font-semibold text-primary-900 mb-4">The Cohort Learning Method</h3>
              <p className="mb-6">
                We facilitate interactive, discussion-driven learning environments where your team doesn't 
                just learn about AI—they experience it, discuss it, and integrate it into their work 
                culture. This experiential approach ensures:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span>Real-time reflection and problem-solving specific to your business</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span>Group cohesion that transforms resistance into enthusiasm</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span>Sustainable change that sticks because your team owns it</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span>Conflict navigation that turns challenges into growth opportunities</span>
                </li>
              </ul>
              
              <p className="mb-6">
                Whether we're helping you implement AI tools, develop an AI strategy, or train your team, 
                we ensure that the human element remains at the center of your digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">
            Why Small Businesses Choose Us
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Deeply Empathetic</h3>
              <p className="text-primary-600">
                We understand the challenges of change and support you through every transition.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Authentic & Non-Judgmental</h3>
              <p className="text-primary-600">
                Making complex AI topics accessible and meaningful for every team member.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Group Dynamics Mastery</h3>
              <p className="text-primary-600">
                Ensuring all team members benefit from shared learning and collective growth.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Brain className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Practical Wisdom</h3>
              <p className="text-primary-600">
                Balancing intellectual depth with emotional intelligence and real-world application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent to-blue-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business with Human-Centered AI?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's explore how our unique approach to AI adoption can help your team embrace 
            the future with confidence and enthusiasm.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-accent font-semibold rounded-lg hover:bg-primary-50 transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </>
  )
}
