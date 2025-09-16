import { Metadata } from 'next'
import { Brain, Users, Heart, Scale, BookOpen, Award, Clock, Target, Lightbulb, Compass } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Elie Schulman - Founder & CEO | Cohort Learning Labs',
  description: 'Learn about Elie Schulman\'s comprehensive background in group psychoanalysis, legal practice, organizational development, and AI transformation consulting.',
}

export default function AboutEliePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              About <span className="gradient-text">Elie Schulman</span>
            </h1>
            <p className="text-xl text-primary-600 mb-8">
              Founder & CEO, Cohort Learning Labs
            </p>
            <p className="text-lg text-primary-700 max-w-3xl mx-auto">
              A unique synthesis of group psychoanalysis expertise, legal acumen, and organizational development
              mastery dedicated to humanizing AI transformation in the workplace.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Portrait */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="bg-primary-50 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="lg:w-1/3">
                  <img
                    src="/images/elie-schulman.jpg"
                    alt="Elie Schulman"
                    className="w-full rounded-xl shadow-lg"
                  />
                  <div className="mt-6 text-center">
                    <h2 className="text-2xl font-bold text-primary-900 mb-2">Elie Schulman</h2>
                    <p className="text-lg text-accent font-semibold">Founder & CEO</p>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <h3 className="text-2xl font-bold text-primary-900 mb-6">Professional Philosophy</h3>

                  <blockquote className="text-lg text-primary-700 italic border-l-4 border-accent pl-6 mb-8">
                    "The most profound transformations happen not in isolation, but in the crucible of authentic
                    human connection. When we bring our whole selves—fears, hopes, resistances, and dreams—into
                    dialogue with others facing similar challenges, we discover possibilities that none of us
                    could have imagined alone."
                  </blockquote>

                  <p className="text-primary-700 leading-relaxed mb-6">
                    Elie Schulman represents a rare convergence of deep psychological insight and practical business
                    expertise. His approach to organizational transformation is grounded in nearly two decades of
                    experience facilitating profound personal and professional change through the power of group dynamics.
                  </p>

                  <p className="text-primary-700 leading-relaxed">
                    What sets Elie apart is his ability to create psychological safety within business contexts,
                    allowing teams to navigate the vulnerable territory of technological change with both courage
                    and compassion. His work doesn't just help organizations adopt AI—it helps them evolve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational & Training Background */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">
              Educational Foundation & Professional Training
            </h2>

            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary-900 mb-3">Group Psychoanalysis Mastery</h3>
                    <p className="text-primary-700 mb-4">
                      <strong>18+ Years of Deep Training</strong> in group psychoanalysis under the mentorship of
                      Dr. Louis Ormont, one of the field's most respected pioneers. This intensive training provided
                      foundational understanding of group dynamics, resistance patterns, and the transformative
                      power of collective healing.
                    </p>
                    <div className="bg-primary-50 rounded-lg p-4">
                      <h4 className="font-semibold text-primary-900 mb-2">Core Competencies Developed:</h4>
                      <ul className="text-sm text-primary-700 space-y-1">
                        <li>• Advanced group facilitation and intervention techniques</li>
                        <li>• Understanding of unconscious group processes and dynamics</li>
                        <li>• Mastery of Ormont's "group as primary agent of change" principle</li>
                        <li>• Expertise in working through resistance and defensive patterns</li>
                        <li>• Skills in creating psychological safety within group settings</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Scale className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary-900 mb-3">Legal Education & Practice</h3>
                    <p className="text-primary-700 mb-4">
                      <strong>Juris Doctor</strong> with specialized focus on conflict resolution and mediation.
                      Legal training provided rigorous analytical thinking, structured problem-solving approaches,
                      and deep understanding of how to navigate complex interpersonal and organizational conflicts.
                    </p>
                    <div className="bg-primary-50 rounded-lg p-4">
                      <h4 className="font-semibold text-primary-900 mb-2">Professional Legal Focus:</h4>
                      <ul className="text-sm text-primary-700 space-y-1">
                        <li>• Complex interpersonal conflict resolution</li>
                        <li>• Mediation and alternative dispute resolution</li>
                        <li>• Organizational compliance and ethics</li>
                        <li>• Risk assessment and management</li>
                        <li>• Structured negotiation and communication</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary-900 mb-3">Mindfulness & Contemplative Practice</h3>
                    <p className="text-primary-700 mb-4">
                      <strong>Decades of Personal Practice</strong> in mindfulness meditation and contemplative
                      disciplines. This foundation provides the emotional regulation, present-moment awareness,
                      and compassionate presence essential for facilitating transformational group experiences.
                    </p>
                    <div className="bg-primary-50 rounded-lg p-4">
                      <h4 className="font-semibold text-primary-900 mb-2">Integrative Applications:</h4>
                      <ul className="text-sm text-primary-700 space-y-1">
                        <li>• Stress and anxiety management during organizational change</li>
                        <li>• Cultivation of emotional intelligence and self-awareness</li>
                        <li>• Development of resilience and adaptive capacity</li>
                        <li>• Creation of contemplative spaces for deep reflection</li>
                        <li>• Integration of wisdom traditions with modern organizational development</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Journey */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">
              Professional Journey & Evolution
            </h2>

            <div className="space-y-12">
              {/* Early Career */}
              <div className="relative">
                <div className="flex items-start space-x-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                    <div className="w-0.5 h-32 bg-accent/20 mt-2"></div>
                  </div>
                  <div className="flex-1 pb-12">
                    <div className="flex items-center space-x-3 mb-3">
                      <Clock className="w-5 h-5 text-accent" />
                      <span className="text-sm font-semibold text-accent">Early Career Foundation</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary-900 mb-4">
                      Legal Practice & Interpersonal Conflict Resolution
                    </h3>
                    <p className="text-primary-700 leading-relaxed mb-4">
                      Began career as a practicing attorney specializing in complex interpersonal conflicts and
                      mediation. This foundational experience revealed the profound impact that psychological
                      dynamics have on apparently "rational" business decisions and conflicts.
                    </p>
                    <div className="bg-primary-50 rounded-lg p-4">
                      <p className="text-sm text-primary-700">
                        <strong>Key Insight:</strong> Even the most sophisticated legal frameworks cannot address
                        the human emotional and psychological factors that drive organizational conflict and resistance to change.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Group Training */}
              <div className="relative">
                <div className="flex items-start space-x-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                    <div className="w-0.5 h-32 bg-accent/20 mt-2"></div>
                  </div>
                  <div className="flex-1 pb-12">
                    <div className="flex items-center space-x-3 mb-3">
                      <Users className="w-5 h-5 text-accent" />
                      <span className="text-sm font-semibold text-accent">Deep Specialization Period</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary-900 mb-4">
                      Intensive Group Psychoanalysis Training
                    </h3>
                    <p className="text-primary-700 leading-relaxed mb-4">
                      Embarked on extensive training in group psychoanalysis under Dr. Louis Ormont, dedicating
                      nearly two decades to mastering the subtle art of group facilitation, understanding
                      unconscious dynamics, and creating transformational group experiences.
                    </p>
                    <div className="bg-primary-50 rounded-lg p-4">
                      <p className="text-sm text-primary-700">
                        <strong>Transformational Learning:</strong> Discovered that the group itself, rather than
                        any individual expert or facilitator, holds the greatest power for sustainable change and healing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Organizational Development */}
              <div className="relative">
                <div className="flex items-start space-x-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                    <div className="w-0.5 h-32 bg-accent/20 mt-2"></div>
                  </div>
                  <div className="flex-1 pb-12">
                    <div className="flex items-center space-x-3 mb-3">
                      <Target className="w-5 h-5 text-accent" />
                      <span className="text-sm font-semibold text-accent">Applied Integration</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary-900 mb-4">
                      Organizational Development & Change Management
                    </h3>
                    <p className="text-primary-700 leading-relaxed mb-4">
                      Applied group psychoanalysis principles to organizational settings, helping over 100
                      organizations navigate complex transitions, cultural transformations, and technological
                      adaptations. Developed expertise in translating psychological insights into practical
                      business applications.
                    </p>
                    <div className="bg-primary-50 rounded-lg p-4">
                      <p className="text-sm text-primary-700">
                        <strong>Breakthrough Realization:</strong> Organizations are essentially complex group systems,
                        and the same principles that create healing in therapeutic groups can drive transformation in business contexts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Era */}
              <div className="relative">
                <div className="flex items-start space-x-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <Lightbulb className="w-5 h-5 text-accent" />
                      <span className="text-sm font-semibold text-accent">Current Innovation</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary-900 mb-4">
                      AI Transformation & Cohort Learning Labs
                    </h3>
                    <p className="text-primary-700 leading-relaxed mb-4">
                      Recognized that the AI revolution presents unprecedented challenges that require a fundamentally
                      different approach to organizational change. Founded Cohort Learning Labs to apply decades of
                      group dynamics expertise to help organizations navigate AI transformation with wisdom,
                      compassion, and practical effectiveness.
                    </p>
                    <div className="bg-primary-50 rounded-lg p-4">
                      <p className="text-sm text-primary-700">
                        <strong>Unique Innovation:</strong> Created the first methodology that systematically applies
                        group psychoanalysis principles to AI transformation, addressing both technical and psychological
                        dimensions of technological change.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Expertise */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">
              Unique Professional Expertise
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4">Psychological Insight</h3>
                <p className="text-primary-700 text-sm leading-relaxed">
                  Deep understanding of how unconscious psychological processes drive organizational behavior,
                  resistance to change, and group dynamics. Ability to identify and work with hidden emotional
                  factors that determine the success or failure of transformation initiatives.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4">Group Facilitation Mastery</h3>
                <p className="text-primary-700 text-sm leading-relaxed">
                  Nearly two decades of experience creating and facilitating transformational group experiences.
                  Expertise in managing complex group dynamics, working through resistance, and creating conditions
                  for collective insight and growth.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Scale className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4">Legal & Ethical Framework</h3>
                <p className="text-primary-700 text-sm leading-relaxed">
                  Legal background provides structured approach to risk assessment, compliance considerations,
                  and ethical implications of AI implementation. Understanding of how to navigate complex
                  regulatory environments while maintaining focus on human development.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-4">Contemplative Wisdom</h3>
                <p className="text-primary-700 text-sm leading-relaxed">
                  Integration of contemplative practices and mindfulness traditions provides grounding, emotional
                  regulation, and wisdom perspective essential for navigating the complexities of technological
                  change while maintaining human-centered focus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Values & Approach */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">
              Personal Values & Leadership Philosophy
            </h2>

            <div className="prose prose-lg max-w-none">
              <div className="bg-primary-50 rounded-xl p-8 mb-8">
                <h3 className="text-xl font-bold text-primary-900 mb-4">Authentic Presence</h3>
                <p className="text-primary-700 leading-relaxed">
                  Elie brings his whole self to every interaction—vulnerability, curiosity, and genuine care for
                  the people and organizations he serves. This authenticity creates the psychological safety
                  necessary for real transformation to occur.
                </p>
              </div>

              <div className="bg-primary-50 rounded-xl p-8 mb-8">
                <h3 className="text-xl font-bold text-primary-900 mb-4">Collective Wisdom</h3>
                <p className="text-primary-700 leading-relaxed">
                  Fundamental belief that the answers to an organization's most complex challenges already exist
                  within the collective intelligence of its people. The facilitator's role is not to provide
                  solutions, but to create conditions where this wisdom can emerge.
                </p>
              </div>

              <div className="bg-primary-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-primary-900 mb-4">Sustainable Transformation</h3>
                <p className="text-primary-700 leading-relaxed">
                  Focus on creating lasting change that continues long after formal consulting relationships end.
                  This requires building internal capacity, developing organizational learning systems, and
                  fostering cultures of continuous adaptation and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition & Impact */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-900 mb-12">
              Recognition & Impact
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-primary-900 mb-2">100+</div>
                <p className="text-primary-700">Organizations Transformed</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-primary-900 mb-2">18+</div>
                <p className="text-primary-700">Years Group Expertise</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-primary-900 mb-2">1000+</div>
                <p className="text-primary-700">Professionals Guided</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8">
              <blockquote className="text-lg text-primary-700 italic mb-4">
                "Elie has the rare gift of seeing both the forest and the trees—understanding complex organizational
                systems while never losing sight of the individual human beings who make up those systems. His approach
                to AI transformation is unlike anything we've experienced: deeply practical yet profoundly human."
              </blockquote>
              <p className="text-primary-600">— Fortune 500 CEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-accent to-blue-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the unique synthesis of psychological insight, group wisdom, and practical business
            expertise that defines Elie's approach to AI transformation.
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