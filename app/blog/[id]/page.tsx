import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, Linkedin, Twitter, Facebook } from 'lucide-react'
import { getBlogPost, getRecentPosts } from '@/data/blog'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const post = getBlogPost(id)
  
  if (!post) {
    return {
      title: 'Post Not Found - Cohort Learning Labs',
    }
  }
  
  return {
    title: `${post.title} - Cohort Learning Labs`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params
  const post = getBlogPost(id)
  const recentPosts = getRecentPosts(3).filter(p => p.id !== id)
  
  if (!post) {
    notFound()
  }
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-600 hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="flex items-center text-primary-600">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-primary-600 mb-6">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center text-primary-600">
                <User className="w-5 h-5 mr-2" />
                <span className="font-medium">{post.author}</span>
                <span className="mx-3">•</span>
                <Calendar className="w-5 h-5 mr-2" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-primary-600 mr-2">Share:</span>
                <button className="p-2 bg-white rounded-lg hover:bg-primary-100 transition-colors">
                  <Linkedin className="w-5 h-5 text-primary-600" />
                </button>
                <button className="p-2 bg-white rounded-lg hover:bg-primary-100 transition-colors">
                  <Twitter className="w-5 h-5 text-primary-600" />
                </button>
                <button className="p-2 bg-white rounded-lg hover:bg-primary-100 transition-colors">
                  <Facebook className="w-5 h-5 text-primary-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-96 object-cover rounded-xl mb-8"
              />
              
              <div 
                className="prose prose-lg max-w-none text-primary-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-primary-200">
                <div className="flex items-center flex-wrap gap-2">
                  <Tag className="w-5 h-5 text-primary-600" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="mt-8 p-6 bg-primary-50 rounded-xl">
                <h3 className="text-xl font-semibold text-primary-900 mb-3">
                  About the Author
                </h3>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-primary-900">{post.author}</p>
                    <p className="text-primary-600 mt-1">
                      AI Strategy Expert at Cohort Learning Labs with over 10 years of experience 
                      helping small businesses leverage technology for growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-accent to-blue-600 text-white rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Ready to Transform Your Business?
                </h3>
                <p className="mb-4 opacity-90">
                  Get expert guidance on implementing AI solutions tailored to your needs.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-2 bg-white text-accent font-semibold rounded-lg hover:bg-primary-50 transition-colors"
                >
                  Get Started
                  <ArrowLeft className="ml-2 w-4 h-4 rotate-180" />
                </Link>
              </div>
              
              {/* Related Posts */}
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {recentPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.id}`}
                      className="block group"
                    >
                      <h4 className="font-medium text-primary-900 group-hover:text-accent transition-colors mb-1">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-primary-600 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="bg-white border-2 border-primary-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary-900 mb-3">
                  Stay Updated
                </h3>
                <p className="text-primary-600 mb-4">
                  Get the latest AI insights delivered to your inbox.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
