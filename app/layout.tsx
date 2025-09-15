import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'Cohort Learning Labs - AI Solutions for Small Business',
  description: 'Organizational Consultant & Group Facilitator specializing in AI adaptation for small businesses. Transform your business with tailored AI solutions.',
  keywords: 'AI consulting, small business, AI adaptation, organizational consulting, group facilitation, business transformation',
  authors: [{ name: 'Cohort Learning Labs' }],
  openGraph: {
    title: 'Cohort Learning Labs - AI Solutions for Small Business',
    description: 'Transform your small business with tailored AI solutions',
    type: 'website',
    locale: 'en_US',
    siteName: 'Cohort Learning Labs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cohort Learning Labs - AI Solutions for Small Business',
    description: 'Transform your small business with tailored AI solutions',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body className="min-h-screen bg-primary-50">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
