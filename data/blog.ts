export const blogPosts = [
  {
    id: 'ai-small-business-2024',
    title: 'The State of AI for Small Businesses in 2024',
    excerpt: 'Explore the latest trends and opportunities in AI adoption for small businesses, including practical tools and strategies for getting started.',
    category: 'Guides',
    author: 'John Anderson',
    date: '2024-01-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    content: `
      <p>Artificial Intelligence is no longer just for tech giants. In 2024, small businesses have unprecedented access to AI tools that can transform their operations, improve customer experiences, and drive growth.</p>
      
      <h2>Key Trends Shaping AI Adoption</h2>
      <p>This year has seen several significant developments that make AI more accessible to small businesses than ever before...</p>
      
      <h3>1. Democratization of AI Tools</h3>
      <p>Major platforms like OpenAI, Google, and Microsoft have released user-friendly AI tools that require no coding knowledge...</p>
      
      <h3>2. Cost-Effective Solutions</h3>
      <p>The cost of implementing AI has decreased significantly, with many tools offering free tiers or affordable monthly subscriptions...</p>
      
      <h3>3. Industry-Specific Applications</h3>
      <p>We're seeing more AI solutions tailored to specific industries, from retail to healthcare to professional services...</p>
      
      <h2>Getting Started with AI</h2>
      <p>For small businesses looking to adopt AI, we recommend starting with these three areas...</p>
    `,
    tags: ['AI Adoption', 'Small Business', 'Technology Trends', 'Digital Transformation'],
  },
  {
    id: 'customer-service-chatbots',
    title: 'How AI Chatbots Can Transform Your Customer Service',
    excerpt: 'Learn how implementing AI chatbots can improve response times, reduce costs, and enhance customer satisfaction for your small business.',
    category: 'Case Studies',
    author: 'Maria Garcia',
    date: '2024-01-10',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=400&fit=crop',
    content: `
      <p>Customer service is often a pain point for small businesses. Limited resources mean longer response times, which can lead to frustrated customers and lost sales. AI chatbots offer a solution that's both effective and affordable.</p>
      
      <h2>The Business Case for Chatbots</h2>
      <p>Our recent client, TechStart Solutions, saw an 80% reduction in response time after implementing an AI chatbot...</p>
      
      <h2>Implementation Best Practices</h2>
      <p>Based on our experience helping dozens of businesses implement chatbots, here are our top recommendations...</p>
    `,
    tags: ['Customer Service', 'Chatbots', 'Automation', 'Case Study'],
  },
  {
    id: 'ai-inventory-management',
    title: 'Revolutionizing Inventory Management with Predictive AI',
    excerpt: 'Discover how predictive analytics can help small businesses optimize inventory, reduce waste, and improve cash flow.',
    category: 'Guides',
    author: 'David Kim',
    date: '2024-01-05',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=400&fit=crop',
    content: `
      <p>Inventory management is a critical challenge for many small businesses. Too much inventory ties up cash, while too little leads to stockouts and lost sales. AI-powered predictive analytics can help find the perfect balance.</p>
      
      <h2>Understanding Predictive Analytics</h2>
      <p>Predictive analytics uses historical data, machine learning algorithms, and statistical techniques to predict future outcomes...</p>
    `,
    tags: ['Inventory Management', 'Predictive Analytics', 'Supply Chain', 'Retail'],
  },
  {
    id: 'ai-content-creation',
    title: 'Leveraging AI for Content Creation Without Losing Your Brand Voice',
    excerpt: 'A practical guide to using AI tools for content creation while maintaining authenticity and brand consistency.',
    category: 'Guides',
    author: 'Emily Rodriguez',
    date: '2023-12-28',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop',
    content: `
      <p>Many businesses worry that using AI for content creation will make their brand sound generic or robotic. The truth is, when used correctly, AI can enhance your content strategy while preserving your unique voice.</p>
      
      <h2>The Right Way to Use AI for Content</h2>
      <p>Think of AI as a creative assistant rather than a replacement for human creativity...</p>
    `,
    tags: ['Content Marketing', 'AI Writing', 'Brand Voice', 'Marketing'],
  },
  {
    id: 'roi-ai-investment',
    title: 'Measuring ROI on Your AI Investment: A Small Business Guide',
    excerpt: 'Learn how to track and measure the return on investment from your AI initiatives with practical metrics and benchmarks.',
    category: 'News',
    author: 'John Anderson',
    date: '2023-12-20',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    content: `
      <p>One of the most common questions we hear from small business owners is: "How do I know if AI is actually worth the investment?" Here's how to measure and maximize your ROI.</p>
      
      <h2>Key Metrics to Track</h2>
      <p>The metrics you track will depend on your specific use case, but here are the most important ones...</p>
    `,
    tags: ['ROI', 'Metrics', 'Business Strategy', 'Analytics'],
  },
  {
    id: 'ai-hiring-process',
    title: 'Streamlining Your Hiring Process with AI Tools',
    excerpt: 'Explore how AI can help small businesses find better candidates faster while reducing bias in the hiring process.',
    category: 'Case Studies',
    author: 'Maria Garcia',
    date: '2023-12-15',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&h=400&fit=crop',
    content: `
      <p>Hiring the right talent is crucial for small businesses, but the process can be time-consuming and expensive. AI tools can help streamline recruitment while improving the quality of hires.</p>
      
      <h2>AI in Different Stages of Hiring</h2>
      <p>From resume screening to interview scheduling, AI can assist at every stage of the hiring process...</p>
    `,
    tags: ['HR', 'Recruitment', 'AI Tools', 'Talent Management'],
  },
]

export function getBlogPost(id: string) {
  return blogPosts.find(post => post.id === id)
}

export function getBlogPostsByCategory(category: string) {
  return blogPosts.filter(post => post.category === category)
}

export function getRecentPosts(count: number = 3) {
  return blogPosts.slice(0, count)
}
