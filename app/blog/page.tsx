import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, User, Tag, ArrowRight } from 'lucide-react'
import { blogPosts } from '@/data/blog'

export const metadata: Metadata = {
  title: 'Blog - Cohort Learning Labs',
  description: 'Insights, guides, and case studies on AI adoption for small businesses. Learn from our experience and stay updated on the latest trends.',
}

const categories = ['All', 'Case Studies', 'Guides', 'News']

export default function BlogPage() {
  // In a real app, you'd implement filtering logic here
  const posts = blogPosts

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Insights & <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-xl text-primary-600 max-w-3xl">
            Stay updated with the latest AI trends, practical guides, and success stories 
            from small businesses transforming with AI.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white py-8 border-b border-primary-100">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-accent text-white'
                    : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg card-hover">
                <Link href={`/blog/${post.id}`}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-primary-600 mb-3">
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <Link href={`/blog/${post.id}`}>
                    <h2 className="text-xl font-bold text-primary-900 mb-3 hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="text-primary-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-primary-500">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-accent font-semibold mt-4 hover:text-accent-hover transition-colors group"
                  >
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 rounded-lg bg-primary-100 text-primary-600 hover:bg-primary-200 transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 rounded-lg bg-accent text-white">1</button>
              <button className="px-4 py-2 rounded-lg bg-primary-100 text-primary-600 hover:bg-primary-200 transition-colors">
                2
              </button>
              <button className="px-4 py-2 rounded-lg bg-primary-100 text-primary-600 hover:bg-primary-200 transition-colors">
                3
              </button>
              <button className="px-4 py-2 rounded-lg bg-primary-100 text-primary-600 hover:bg-primary-200 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gradient-to-r from-accent to-blue-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with AI Insights
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Subscribe to our newsletter for the latest AI trends, tips, and success stories 
            delivered to your inbox.
          </p>
          
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-primary-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-accent font-semibold rounded-lg hover:bg-primary-50 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
