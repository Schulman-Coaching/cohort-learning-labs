# Cohort Learning Labs - AI Consulting Website

A professional website for Cohort Learning Labs, an organizational consulting and group facilitation firm specializing in AI adaptation for small businesses.

## Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Built with Next.js 14 and Tailwind CSS
- **Interactive Components**: Smooth animations with Framer Motion
- **Contact Form**: Functional contact form with API integration ready
- **Newsletter Signup**: Email collection for marketing
- **Blog System**: Dynamic blog with categories and tags
- **SEO Optimized**: Meta tags and structured data
- **Analytics Ready**: Google Analytics integration support

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd cohort-learning-labs
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Create environment variables:
\`\`\`bash
cp .env.local.example .env.local
\`\`\`

4. Update `.env.local` with your actual API keys and configuration

5. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

### Method 1: Deploy with Vercel CLI

1. Install Vercel CLI:
\`\`\`bash
npm install -g vercel
\`\`\`

2. Login to Vercel:
\`\`\`bash
vercel login
\`\`\`

3. Deploy:
\`\`\`bash
vercel
\`\`\`

4. Follow the prompts:
   - Set up and deploy: Yes
   - Which scope: Select your account
   - Link to existing project: No (for first deployment)
   - Project name: cohort-learning-labs
   - Directory: ./
   - Build Command: (auto-detected)
   - Output Directory: (auto-detected)
   - Development Command: (auto-detected)

5. Your site will be deployed and you'll receive a URL

### Method 2: Deploy via GitHub

1. Push your code to GitHub:
\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
\`\`\`

2. Go to [vercel.com](https://vercel.com)

3. Click "New Project"

4. Import your GitHub repository

5. Configure your project:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: ./
   - Build Command: `next build`
   - Output Directory: .next
   - Install Command: `npm install`

6. Add Environment Variables:
   - Click "Environment Variables"
   - Add each variable from your `.env.local` file

7. Click "Deploy"

### Method 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/cohort-learning-labs)

## Environment Variables

Configure these in your Vercel dashboard under Settings > Environment Variables:

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics ID | Optional |
| `RESEND_API_KEY` | Resend API key for emails | Optional |
| `MAILCHIMP_API_KEY` | Mailchimp API key | Optional |
| `MAILCHIMP_LIST_ID` | Mailchimp list ID | Optional |

## Post-Deployment Setup

### 1. Custom Domain

1. In Vercel dashboard, go to Settings > Domains
2. Add your domain (e.g., cohortlearninglabs.com)
3. Follow DNS configuration instructions

### 2. Email Service Setup

Choose one of these services for contact form emails:

**Option A: Resend**
1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to environment variables
4. Update `/app/api/contact/route.ts`

**Option B: SendGrid**
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create API key
3. Install: `npm install @sendgrid/mail`
4. Update API routes

### 3. Newsletter Service

**Mailchimp Setup:**
1. Create account at [mailchimp.com](https://mailchimp.com)
2. Create an audience
3. Get API key and List ID
4. Add to environment variables
5. Install: `npm install @mailchimp/mailchimp_marketing`

### 4. Analytics

1. Create Google Analytics 4 property
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `NEXT_PUBLIC_GA_MEASUREMENT_ID` in environment variables

### 5. Calendly Integration

1. Get your Calendly link
2. Replace placeholder in `/app/contact/page.tsx` with Calendly embed code:

\`\`\`jsx
<div className="calendly-inline-widget" 
     data-url="https://calendly.com/your-username"
     style={{ minWidth: '320px', height: '630px' }} />
<script type="text/javascript" 
        src="https://assets.calendly.com/assets/external/widget.js" async />
\`\`\`

## Customization

### Brand Colors

Edit colors in `tailwind.config.js`:

\`\`\`javascript
colors: {
  primary: {
    // Adjust gray shades
  },
  accent: {
    // Change accent color
  }
}
\`\`\`

### Content

- **Company Info**: Update in components (Header, Footer, About)
- **Services**: Edit `/app/services/page.tsx`
- **Pricing**: Modify `/app/pricing/page.tsx`
- **Blog Posts**: Add/edit in `/data/blog.ts`
- **Testimonials**: Update in components

### Images

Replace placeholder images with your own:
- Use high-quality images (WebP format recommended)
- Optimize images before uploading
- Update image URLs in components

## Performance Optimization

1. **Image Optimization**: Use Next.js Image component
2. **Code Splitting**: Automatic with Next.js
3. **Font Optimization**: Using next/font for Inter
4. **Lazy Loading**: Components load on demand

## SEO Checklist

- [ ] Update meta descriptions in each page
- [ ] Add structured data (JSON-LD)
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Submit to Google Search Console
- [ ] Optimize images with alt text

## Support

For issues or questions:
- Check [Next.js Documentation](https://nextjs.org/docs)
- Review [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- Visit [Vercel Documentation](https://vercel.com/docs)

## License

MIT License - feel free to use this template for your projects!

---

Built with ❤️ by Cohort Learning Labs
