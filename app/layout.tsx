import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { SITE_URL } from '@/lib/routes'

const serif = localFont({
  src: [
    {
      path: '../node_modules/@fontsource-variable/eb-garamond/files/eb-garamond-latin-wght-normal.woff2',
      weight: '400 800',
      style: 'normal',
    },
    {
      path: '../node_modules/@fontsource-variable/eb-garamond/files/eb-garamond-latin-wght-italic.woff2',
      weight: '400 800',
      style: 'italic',
    },
  ],
  variable: '--font-serif',
  display: 'swap',
})

const sans = localFont({
  src: '../node_modules/@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2',
  weight: '300 700',
  variable: '--font-sans',
  display: 'swap',
})

const title = 'Cohort Learning Labs | Group Learning Through Difference'
const description =
  'Cohort Learning Labs creates recurring groups where people examine how they communicate, experience, and respond to differences that matter.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords:
    'group learning, group inquiry, difference of opinion, group process, facilitated groups, organizational learning, professional judgment, cohort learning',
  authors: [{ name: 'Cohort Learning Labs' }],
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en_US',
    siteName: 'Cohort Learning Labs',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable}`}
      // Next 16 no longer suppresses `scroll-behavior: smooth` (set in
      // globals.css) during route transitions unless this opts in.
      data-scroll-behavior="smooth"
    >
      <head>
        <GoogleAnalytics />
      </head>
      <body className="min-h-screen bg-ground">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
