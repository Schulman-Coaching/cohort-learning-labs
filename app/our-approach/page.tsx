import { Metadata } from 'next'
import { Brain, Users, Heart, Target, Compass, RefreshCw, Eye, Lightbulb, Scale, CheckCircle, ArrowRight, Circle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Approach - Four-Dimensional Synthesis | Cohort Learning Labs',
  description: 'Discover our revolutionary four-dimensional synthesis methodology integrating Louis Ormont, T-Groups, Carl Rogers, and Ruth Cohn\'s Theme-Centered Interaction for transformative group learning.',
}

export default function OurApproachPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Our <span className="gradient-text">Approach</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary-800 mb-8">
              A Revolutionary Four-Dimensional Synthesis for Transformative Group Learning
            </h2>
            <p className="text-lg text-primary-700 leading-relaxed">
              Our cohort learning labs represent a groundbreaking integration of four foundational approaches
              to group dynamics and human development. By masterfully weaving together the psychoanalytic insights
              of Louis Ormont, the experiential methodology of T-Groups, the person-centered facilitation of Carl Rogers,
              and the structural wisdom of Ruth Cohn's Theme-Centered Interaction, we've created a uniquely powerful
              environment for deep learning and authentic transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">
              The Four Pillars of Our Approach
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Louis Ormont */}
              <div className="bg-primary-50 rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900">Louis Ormont's</h3>
                    <p className="text-primary-600">Group Psychoanalytic Theory</p>
                  </div>
                </div>
                <p className="text-primary-700 mb-4">
                  Drawing from Ormont's pioneering work in group therapy, our labs incorporate:
                </p>
                <ul className="space-y-2 text-primary-700">
                  <li className="flex items-start">
                    <Circle className="w-4 h-4 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Here-and-Now Focus:</strong> Emphasis on immediate group dynamics and real-time interpersonal processes</span>
                  </li>
                  <li className="flex items-start">
                    <Circle className="w-4 h-4 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Resistance Analysis:</strong> Understanding and working through individual and group defenses that inhibit learning</span>
                  </li>
                  <li className="flex items-start">
                    <Circle className="w-4 h-4 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Projective Identification:</strong> Recognizing how group members unconsciously influence each other's emotional states</span>
                  </li>
                  <li className="flex items-start">
                    <Circle className="w-4 h-4 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Group-as-a-Whole Perspective:</strong> Viewing the cohort as a living system with its own unconscious dynamics</span>
                  </li>
                </ul>
              </div>

              {/* T-Group Principles */}
              <div className="bg-primary-50 rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900">T-Group</h3>
                    <p className="text-primary-600">Principles</p>
                  </div>
                </div>
                <p className="text-primary-700 mb-4">
                  From the sensitivity training tradition, we integrate:
                </p>
                <ul className="space-y-2 text-primary-700">
                  <li className="flex items-start">
                    <Circle className="w-4 h-4 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Experiential Learning:</strong> Learning through direct experience rather than theoretical instruction</span>
                  </li>
                  <li className="flex items-start">
                    <Circle className="w-4 h-4 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Process Focus:</strong> Attention to how things happen, not just what happens</span>
                  </li>
                  <li className="flex items-start">
                    <Circle className="w-4 h-4 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Feedback Culture:</strong> Creating safe spaces for honest, constructive interpersonal feedback</span>
                  </li>
                  <li className="flex items-start">
                    <Circle className="w-4 h-4 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Democratic Leadership:</strong> Shared responsibility for group outcomes and learning</span>
                  </li>
                </ul>
              </div>

              {/* Carl Rogers */}
              <div className="bg-primary-50 rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900">Carl Rogers'</h3>
                    <p className="text-primary-600">Person-Centered Group Facilitation</p>
                  </div>
                </div>
                <p className="text-primary-700 mb-4">
                  Rogers' humanistic approach contributes:
                </p>
                <ul className="space-y-2 text-primary-700">
                  <li className="flex items-start">
                    <Circle className="w-4 h-4 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Unconditional Positive Regard:</strong> Creating an atmosphere of acceptance and non-judgment</span>
                  </li>
                  <li className="flex items-start">
                    <Circle className="w-4 h-4 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Empathic Understanding:</strong> Deep listening and reflection of participants' experiences</span>
                  </li>
                  <li className="flex items-start">
                    <Circle className="w-4 h-4 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Genuineness:</strong> Authentic facilitator presence and modeling of congruent behavior</span>
                  </li>
                  <li className="flex items-start">
                    <Circle className="w-4 h-4 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Self-Direction:</strong> Trust in the group's inherent wisdom and capacity for growth</span>
                  </li>
                </ul>
              </div>

              {/* Ruth Cohn */}
              <div className="bg-primary-50 rounded-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Compass className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900">Ruth Cohn's</h3>
                    <p className="text-primary-600">Theme-Centered Interaction (TCI)</p>
                  </div>
                </div>
                <p className="text-primary-700 mb-4">
                  Cohn's structural framework provides:
                </p>
                <ul className="space-y-2 text-primary-700">
                  <li className="flex items-start">
                    <Circle className="w-4 h-4 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Four-Factor Model:</strong> Dynamic balance between I (individual), We (group), It (theme/task), and Globe (environment/context)</span>
                  </li>
                  <li className="flex items-start">
                    <Circle className="w-4 h-4 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Selective Authenticity:</strong> Being genuine while remaining conscious of what serves the group's purpose</span>
                  </li>
                  <li className="flex items-start">
                    <Circle className="w-4 h-4 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Chairperson Principle:</strong> Each participant takes responsibility for their own engagement and learning</span>
                  </li>
                  <li className="flex items-start">
                    <Circle className="w-4 h-4 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Disturbance Precedence:</strong> Addressing what interferes with group process before continuing with tasks</span>
                  </li>
                  <li className="flex items-start">
                    <Circle className="w-4 h-4 text-accent mt-1 mr-3 flex-shrink-0" />
                    <span><strong>Living Learning:</strong> Integration of cognitive, emotional, and bodily experience in service of growth</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Our Synthesis Unique */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">
              What Makes Our Four-Dimensional Synthesis Unique
            </h2>

            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-3">Depth Meets Safety with Structural Wisdom</h3>
                    <p className="text-primary-700 leading-relaxed">
                      While Ormont's psychoanalytic approach provides profound insights into unconscious group dynamics,
                      Rogers' person-centered principles ensure participants feel genuinely safe to explore vulnerable territory.
                      Cohn's TCI framework adds essential structure that prevents the group from getting lost in either analysis
                      paralysis or emotional overwhelm, maintaining productive focus while honoring all dimensions of experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-3">Dynamic Balance Across All Levels</h3>
                    <p className="text-primary-700 leading-relaxed">
                      TCI's four-factor model (I-We-It-Globe) provides a sophisticated framework for maintaining awareness
                      of individual needs, group dynamics, task focus, and environmental context. This prevents the common
                      pitfall of groups that become either too task-focused or too process-focused, instead creating dynamic equilibrium.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-3">Experiential Structure with Emergent Flexibility</h3>
                    <p className="text-primary-700 leading-relaxed">
                      T-Group methodology provides essential experiential learning structure, while Rogers' philosophy prevents
                      rigidity and Cohn's "selective authenticity" principle guides when and how to share. This creates both
                      the security of proven frameworks and the freedom for authentic emergence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-3">Individual, Interpersonal, and Systemic Integration</h3>
                    <p className="text-primary-700 leading-relaxed">
                      Our approach simultaneously addresses personal growth (Rogers), interpersonal dynamics (T-Groups),
                      systemic group patterns (Ormont), and the structural relationships between all elements (Cohn).
                      This multi-dimensional intervention creates exponential learning opportunities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">5</div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-3">Conscious Disruption and Flow</h3>
                    <p className="text-primary-700 leading-relaxed">
                      Cohn's "disturbance precedence" principle, combined with Ormont's understanding of resistance and
                      Rogers' acceptance, creates a unique capacity to work with obstacles as gateways to deeper learning
                      rather than problems to solve.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">6</div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-3">Psychodynamic Depth with Humanistic Heart and Structural Intelligence</h3>
                    <p className="text-primary-700 leading-relaxed">
                      We combine Ormont's sophisticated understanding of unconscious processes with Rogers' profound respect
                      for human potential and Cohn's practical wisdom about group structure. This creates an environment where
                      participants can explore shadow aspects while feeling fundamentally valued and structurally supported.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Methodological Elements */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">
              Core Methodological Elements
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Compass className="w-6 h-6 text-accent" />
                  <h3 className="text-lg font-bold text-primary-900">Four-Dimensional Facilitation</h3>
                </div>
                <p className="text-primary-700 text-sm leading-relaxed">
                  Our facilitators seamlessly navigate between Rogerian reflection, T-Group process observations,
                  Ormont-style interpretations of group dynamics, and TCI structural interventions. They continuously
                  monitor the balance between individual needs (I), group process (We), learning objectives (It),
                  and contextual factors (Globe).
                </p>
              </div>

              <div className="bg-primary-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="w-6 h-6 text-accent" />
                  <h3 className="text-lg font-bold text-primary-900">Multi-Layered Awareness</h3>
                </div>
                <p className="text-primary-700 text-sm leading-relaxed">
                  Participants develop capacity to simultaneously track personal internal experience (Rogers),
                  interpersonal dynamics (T-Groups), unconscious group processes (Ormont), and structural balance
                  across I-We-It-Globe (Cohn).
                </p>
              </div>

              <div className="bg-primary-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="w-6 h-6 text-accent" />
                  <h3 className="text-lg font-bold text-primary-900">Selective Authenticity in Practice</h3>
                </div>
                <p className="text-primary-700 text-sm leading-relaxed">
                  Drawing from Cohn's principle, participants learn to be genuine while considering what serves
                  the collective learning. This creates more sophisticated emotional intelligence than either
                  complete openness or strategic withholding.
                </p>
              </div>

              <div className="bg-primary-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <RefreshCw className="w-6 h-6 text-accent" />
                  <h3 className="text-lg font-bold text-primary-900">Living Learning Integration</h3>
                </div>
                <p className="text-primary-700 text-sm leading-relaxed">
                  Each session weaves together cognitive understanding, emotional processing, and embodied experience,
                  with TCI's structural awareness ensuring all dimensions remain in dynamic balance.
                </p>
              </div>

              <div className="bg-primary-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="w-6 h-6 text-accent" />
                  <h3 className="text-lg font-bold text-primary-900">Disturbance as Gateway</h3>
                </div>
                <p className="text-primary-700 text-sm leading-relaxed">
                  When tensions, conflicts, or resistances arise, we use Cohn's "disturbance precedence" principle
                  combined with Ormont's analysis of group resistance and Rogers' accepting presence to transform
                  obstacles into learning opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Transformative Impact */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-900 mb-12">
              The Transformative Impact
            </h2>

            <div className="bg-white rounded-xl p-8 mb-8">
              <p className="text-lg text-primary-700 mb-6">
                This synthesis creates learning experiences that are:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-left">
                  <div className="flex items-start space-x-3 mb-4">
                    <Lightbulb className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-bold text-primary-900">Intellectually Rigorous</h3>
                      <p className="text-primary-700 text-sm">Deep understanding of group dynamics and human psychology</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 mb-4">
                    <Heart className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-bold text-primary-900">Emotionally Profound</h3>
                      <p className="text-primary-700 text-sm">Authentic encounters that reshape self-concept and relationships</p>
                    </div>
                  </div>
                </div>
                <div className="text-left">
                  <div className="flex items-start space-x-3 mb-4">
                    <Target className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-bold text-primary-900">Behaviorally Practical</h3>
                      <p className="text-primary-700 text-sm">Real-world skills in communication, leadership, and collaboration</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 mb-4">
                    <Compass className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-bold text-primary-900">Spiritually Meaningful</h3>
                      <p className="text-primary-700 text-sm">Connection to purpose, authenticity, and human potential</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-accent/10 to-blue-600/10 rounded-xl p-8">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Why This Four-Dimensional Approach Works</h3>
              <p className="text-primary-700 leading-relaxed mb-6">
                Traditional learning approaches often address either the cognitive or emotional dimensions of development,
                while group work frequently loses balance between individual needs and collective goals. Our synthesis
                recognizes that transformative learning requires simultaneous attention to:
              </p>

              <div className="grid md:grid-cols-1 gap-3 text-left max-w-2xl mx-auto">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <span className="text-primary-700"><strong>Cognitive Understanding</strong> (what we know)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <span className="text-primary-700"><strong>Emotional Processing</strong> (what we feel)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <span className="text-primary-700"><strong>Behavioral Practice</strong> (what we do)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <span className="text-primary-700"><strong>Relational Integration</strong> (how we connect)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                  <span className="text-primary-700"><strong>Structural Awareness</strong> (how we balance individual, group, task, and context)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Lab Experience */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">
              The Lab Experience
            </h2>

            <div className="bg-primary-50 rounded-xl p-8 mb-8">
              <p className="text-lg text-primary-700 mb-6">
                Participants enter a carefully crafted container where they can:
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-primary-700">Explore their authentic leadership style while learning to balance personal needs with collective goals</span>
                </div>
                <div className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-primary-700">Practice difficult conversations in real-time with structural support from the I-We-It-Globe framework</span>
                </div>
                <div className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-primary-700">Receive honest feedback about their interpersonal impact within an atmosphere of unconditional positive regard</span>
                </div>
                <div className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-primary-700">Work through personal and professional challenges with peer support and psychodynamic insight</span>
                </div>
                <div className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-primary-700">Develop deeper self-awareness and emotional intelligence while maintaining task focus</span>
                </div>
                <div className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-primary-700">Build lasting relationships based on genuine understanding and selective authenticity</span>
                </div>
                <div className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-primary-700">Learn to be their own "chairperson"—taking responsibility for their participation and learning</span>
                </div>
                <div className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-primary-700">Practice addressing disturbances as they arise, transforming obstacles into growth opportunities</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border-2 border-primary-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-primary-900 mb-4">Beyond Traditional Learning</h3>
                <p className="text-primary-700 text-sm leading-relaxed">
                  This approach doesn't just teach about collaboration—it creates collaborative learning communities
                  that become living models of how to balance individual authenticity, interpersonal connection,
                  meaningful work, and environmental awareness.
                </p>
              </div>

              <div className="bg-white border-2 border-primary-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-primary-900 mb-4">Sophisticated Leadership Development</h3>
                <p className="text-primary-700 text-sm leading-relaxed">
                  The integration of TCI principles means participants don't just experience personal growth or learn
                  group skills—they develop sophisticated capacity to navigate the complex interplay between self,
                  others, tasks, and context that defines effective leadership and meaningful participation in any human system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="section-padding bg-gradient-to-r from-accent to-blue-600">
        <div className="container-custom text-center text-white">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 italic">
              "Our cohort learning labs represent more than a methodology—they're a paradigm shift toward learning
              that honors the full complexity and potential of human beings in relationship, while providing the
              structural wisdom to navigate that complexity with grace and effectiveness."
            </blockquote>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-accent font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              Experience Our Approach
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}