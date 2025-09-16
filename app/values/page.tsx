import { Metadata } from 'next'
import { BookOpen, Users, Lightbulb, Target, Compass, RefreshCw, CheckCircle, Eye } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Values - Cohort Learning Labs',
  description: 'Our shared vocabulary - the principles and definitions that guide our collaborative work and partnerships.',
}

export default function ValuesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Our <span className="gradient-text">Values</span>
          </h1>
          <p className="text-xl text-primary-600 max-w-4xl leading-relaxed">
            At Cohort Learning Labs, we believe that meaningful collaboration begins with shared understanding.
            That's why our first and foundational value is <strong>establishing a common vocabulary</strong> with
            the people we work with. When we define terms together, we create the conditions for genuine dialogue,
            productive disagreement, and collective growth.
          </p>
          <p className="text-lg text-primary-600 max-w-3xl mt-4">
            This page serves as our living dictionary—a collection of definitions we use to guide our work and partnerships.
          </p>
        </div>
      </section>

      {/* Shared Vocabulary Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">
              Our Shared Vocabulary
            </h2>

            <div className="space-y-12">
              {/* Values */}
              <div className="border-l-4 border-accent pl-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Target className="w-6 h-6 text-accent" />
                  <h3 className="text-2xl font-bold text-primary-900">values</h3>
                  <span className="text-sm text-primary-500 italic">noun, plural</span>
                </div>
                <p className="text-primary-700 leading-relaxed">
                  The principles and priorities that determine where we allocate our time, energy, and resources.
                  Values are not aspirations or wishes, but observable patterns in how we choose to spend our most
                  limited asset: attention. At Cohort Learning Labs, values manifest in calendars, budgets, and daily decisions.
                </p>
              </div>

              {/* Cohort */}
              <div className="border-l-4 border-accent pl-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Users className="w-6 h-6 text-accent" />
                  <h3 className="text-2xl font-bold text-primary-900">cohort</h3>
                  <span className="text-sm text-primary-500 italic">noun</span>
                </div>
                <p className="text-primary-700 leading-relaxed">
                  A group of individuals who journey through an experience together, bound by shared timing and mutual support.
                  Unlike a class (which implies hierarchy) or a team (which suggests unified output), a cohort maintains
                  individual paths while benefiting from collective momentum. Drawing from <a href="https://scholar.google.com/scholar?q=louis+ormont+group+therapy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Louis Ormont's</a> insight that "the group,
                  and not the facilitator, is the primary agent of change," our cohorts harness the transformative power of
                  peer learning and collective wisdom. In our work, cohorts create accountability without conformity, and
                  connection without consensus.
                </p>
              </div>

              {/* Learning */}
              <div className="border-l-4 border-accent pl-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-accent" />
                  <h3 className="text-2xl font-bold text-primary-900">learning</h3>
                  <span className="text-sm text-primary-500 italic">verb, noun</span>
                </div>
                <p className="text-primary-700 leading-relaxed">
                  The active process of transforming experience into insight, and insight into capability. Learning is not
                  the passive absorption of information, but the deliberate practice of making meaning from what we encounter.
                  We view learning as both deeply personal (requiring individual reflection) and inherently social
                  (enhanced through dialogue and feedback).
                </p>
              </div>

              {/* Laboratory */}
              <div className="border-l-4 border-accent pl-6">
                <div className="flex items-center space-x-3 mb-3">
                  <BookOpen className="w-6 h-6 text-accent" />
                  <h3 className="text-2xl font-bold text-primary-900">laboratory</h3>
                  <span className="text-sm text-primary-500 italic">noun</span>
                </div>
                <p className="text-primary-700 leading-relaxed">
                  A space designed for experimentation, iteration, and discovery. Unlike a factory (which optimizes for efficiency)
                  or a classroom (which optimizes for transmission), a laboratory optimizes for learning through controlled
                  risk-taking. In our context, laboratory represents our commitment to treating challenges as hypotheses,
                  failures as data, and successes as starting points for new questions.
                </p>
              </div>

              {/* Collaboration */}
              <div className="border-l-4 border-accent pl-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Users className="w-6 h-6 text-accent" />
                  <h3 className="text-2xl font-bold text-primary-900">collaboration</h3>
                  <span className="text-sm text-primary-500 italic">noun</span>
                </div>
                <p className="text-primary-700 leading-relaxed">
                  The practice of working with others in ways that honor both individual expertise and collective wisdom.
                  True collaboration requires more than coordination; it demands the courage to share incomplete thoughts,
                  the humility to receive feedback, and the generosity to contribute without controlling.
                </p>
              </div>

              {/* Equity */}
              <div className="border-l-4 border-accent pl-6">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  <h3 className="text-2xl font-bold text-primary-900">equity</h3>
                  <span className="text-sm text-primary-500 italic">noun</span>
                </div>
                <p className="text-primary-700 leading-relaxed">
                  The commitment to creating conditions where all participants can fully engage, contribute, and benefit.
                  Equity goes beyond equal treatment to recognize that people arrive with different resources, experiences,
                  and needs. In our work, equity means actively addressing barriers to participation and continuously
                  examining our own assumptions.
                </p>
              </div>

              {/* Emergence */}
              <div className="border-l-4 border-accent pl-6">
                <div className="flex items-center space-x-3 mb-3">
                  <RefreshCw className="w-6 h-6 text-accent" />
                  <h3 className="text-2xl font-bold text-primary-900">emergence</h3>
                  <span className="text-sm text-primary-500 italic">noun</span>
                </div>
                <p className="text-primary-700 leading-relaxed">
                  The phenomenon where collective interactions produce outcomes that couldn't be predicted or achieved by
                  individuals alone. We design for emergence by creating structures loose enough for creativity but strong
                  enough for coherence, trusting that the group's wisdom exceeds our individual imaginations.
                </p>
              </div>

              {/* Practice */}
              <div className="border-l-4 border-accent pl-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Target className="w-6 h-6 text-accent" />
                  <h3 className="text-2xl font-bold text-primary-900">practice</h3>
                  <span className="text-sm text-primary-500 italic">noun, verb</span>
                </div>
                <p className="text-primary-700 leading-relaxed">
                  The repeated, intentional engagement with skills or concepts to deepen understanding and capability.
                  Practice acknowledges that learning is not a one-time event but an ongoing discipline. We distinguish
                  practice from performance—practice is where we experiment and fail safely; performance is where we
                  apply what we've learned.
                </p>
              </div>

              {/* Reflection */}
              <div className="border-l-4 border-accent pl-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Eye className="w-6 h-6 text-accent" />
                  <h3 className="text-2xl font-bold text-primary-900">reflection</h3>
                  <span className="text-sm text-primary-500 italic">noun</span>
                </div>
                <p className="text-primary-700 leading-relaxed">
                  The deliberate pause to examine experience, extract lessons, and integrate new understanding.
                  Reflection transforms activity into learning. We build reflection into all our processes because
                  we believe that experience without reflection is merely activity, while reflection without
                  experience is merely speculation.
                </p>
              </div>

              {/* Accountability */}
              <div className="border-l-4 border-accent pl-6">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  <h3 className="text-2xl font-bold text-primary-900">accountability</h3>
                  <span className="text-sm text-primary-500 italic">noun</span>
                </div>
                <p className="text-primary-700 leading-relaxed">
                  The practice of making and keeping commitments to ourselves and others. Accountability in our context
                  is not about judgment or punishment, but about creating reliable relationships where people can count
                  on each other. It requires clarity about expectations, honesty about capacity, and grace when
                  circumstances change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Living Documentation */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-900 mb-8">
              Living Documentation
            </h2>
            <div className="bg-white rounded-xl p-8 text-left">
              <p className="text-primary-700 leading-relaxed mb-6">
                This vocabulary is not fixed or final. Like the learning processes we facilitate, these definitions
                evolve through use, challenge, and refinement. We invite all partners, participants, and collaborators
                to help us sharpen these definitions and propose new terms that deserve shared understanding.
              </p>
              <div className="text-sm text-primary-600 space-y-2">
                <p><em>Last updated: September 2024</em></p>
                <p><em>To suggest additions or modifications to our shared vocabulary, please <a href="/contact" className="text-accent hover:underline">contact us</a></em></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}