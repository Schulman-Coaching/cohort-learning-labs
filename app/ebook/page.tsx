import { Metadata } from 'next'
import { Download, BookOpen, Users, Brain, Lightbulb, CheckCircle, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free AI Prompting Ebook - Cohort Learning Labs',
  description: 'Download our comprehensive guide "Prompting: Humans Learning to Ask for What They Want" - essential skills for effective AI communication.',
}

export default function EbookPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
                <Star className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Free Download
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
                Prompting: Humans Learning to <span className="gradient-text">Ask for What They Want</span>
              </h1>

              <p className="text-xl text-primary-600 mb-8">
                A practical guide to effective communication in the AI era. Master the art of prompting
                and unlock the full potential of AI tools for your business.
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="/downloads/prompting-ebook.epub"
                  download
                  className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors group"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download EPUB
                </a>
                <Link
                  href="/ebooks/prompting.html"
                  target="_blank"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-700 font-semibold rounded-lg border-2 border-primary-300 hover:border-accent hover:text-accent transition-colors"
                >
                  <BookOpen className="mr-2 w-5 h-5" />
                  Read Online
                </Link>
              </div>

              {/* Key Benefits */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-primary-700">Master the fundamentals of effective AI prompting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-primary-700">Learn advanced techniques for complex tasks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-primary-700">Avoid common pitfalls that reduce AI effectiveness</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-accent to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">
                    Transform Your AI Interactions
                  </h3>
                  <p className="text-primary-600 mb-6">
                    From basic requests to sophisticated problem-solving, this guide covers it all.
                  </p>
                  <div className="text-sm text-primary-500">
                    <div className="mb-2">📚 8 Comprehensive Chapters</div>
                    <div className="mb-2">⏱️ 30-minute read</div>
                    <div>🎯 Actionable examples throughout</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">
            What You'll Learn
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                The Prompting Paradigm
              </h3>
              <p className="text-primary-600">
                Understand the fundamental principles of effective human-AI communication and why prompting matters.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                Anatomy of Great Prompts
              </h3>
              <p className="text-primary-600">
                Learn the five key components that make prompts clear, specific, and highly effective.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                Advanced Techniques
              </h3>
              <p className="text-primary-600">
                Master chain-of-thought prompting, few-shot learning, and iterative refinement strategies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                Common Pitfalls
              </h3>
              <p className="text-primary-600">
                Identify and avoid the most frequent mistakes that lead to poor AI responses.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                Domain-Specific Tips
              </h3>
              <p className="text-primary-600">
                Specialized guidance for creative, technical, educational, and business applications.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                Future-Ready Skills
              </h3>
              <p className="text-primary-600">
                Prepare for the evolving landscape of human-AI interaction and emerging trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Overview */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center">
            Chapter Overview
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-primary-900 mb-2">
                Chapter 1: Understanding the Prompting Paradigm
              </h3>
              <p className="text-primary-600">
                Learn what prompting is, why it matters, and how it's transforming human-computer interaction.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-primary-900 mb-2">
                Chapter 2: The Anatomy of an Effective Prompt
              </h3>
              <p className="text-primary-600">
                Master the five essential components: context, task, format, examples, and constraints.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-primary-900 mb-2">
                Chapter 3: Context is King
              </h3>
              <p className="text-primary-600">
                Discover how providing the right background information transforms generic responses into personalized solutions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-primary-900 mb-2">
                Chapter 4: Specificity and Clarity
              </h3>
              <p className="text-primary-600">
                Learn to balance detail with brevity and communicate your needs with precision.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-primary-900 mb-2">
                Chapters 5-8: Advanced Techniques & Applications
              </h3>
              <p className="text-primary-600">
                Explore sophisticated prompting strategies, avoid common mistakes, and prepare for the future of AI communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Author */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-900 mb-8">
              From Cohort Learning Labs
            </h2>

            <div className="bg-primary-50 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/3">
                  <img
                    src="/images/elie-schulman.jpg"
                    alt="Elie Schulman"
                    className="w-full rounded-xl shadow-lg max-w-sm mx-auto"
                  />
                </div>
                <div className="lg:w-2/3 text-left">
                  <h3 className="text-2xl font-bold text-primary-900 mb-2">Elie Schulman</h3>
                  <p className="text-lg text-accent font-semibold mb-4">Founder & Lead Facilitator</p>

                  <p className="text-primary-700 mb-4">
                    With nearly two decades of experience in group facilitation and organizational development,
                    Elie brings a unique perspective to AI adoption. His expertise in human dynamics and
                    communication makes him uniquely qualified to bridge the gap between human intent and AI understanding.
                  </p>

                  <p className="text-primary-700">
                    This ebook reflects our core philosophy: successful AI integration isn't just about technology—it's
                    about helping people communicate more effectively with these powerful tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent to-blue-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Master AI Communication?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Download your free copy today and transform how you interact with AI tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/downloads/prompting-ebook.epub"
              download
              className="inline-flex items-center px-8 py-3 bg-white text-accent font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              <Download className="mr-2 w-5 h-5" />
              Download EPUB
            </a>
            <Link
              href="/ebooks/prompting.html"
              target="_blank"
              className="inline-flex items-center px-8 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-accent transition-colors"
            >
              <BookOpen className="mr-2 w-5 h-5" />
              Read Online
            </Link>
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/80 mb-4">Want personalized guidance for your team?</p>
            <Link
              href="/contact"
              className="inline-flex items-center text-white hover:text-white/80 transition-colors"
            >
              Schedule a consultation with Elie Schulman
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}