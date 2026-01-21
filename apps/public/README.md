# Fluxorae.com - Corporate Website

Enterprise-grade, production-ready website for Fluxorae - A global corporate brand website.

**Location:** `apps/public` (monorepo).  
**Env toggles:** `NEXT_PUBLIC_BASE_URL` (default `https://fluxorae.com`), `INDIA_SITE_MODE` (`redirect` | `site` to disable .in 301s when running an India variant).

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, React, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for premium UI/UX
- **SEO Optimized**: Server-side rendering, metadata, schema markup, sitemap
- **CMS Integration**: Sanity CMS for blog/insights management
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Contact Form**: Functional contact form with email notifications
- **Performance**: Optimized for fast loading and great performance

## 📋 Pages

1. **Home** - Hero section, services overview, solutions showcase
2. **About** - Company mission, vision, values, timeline, leadership
3. **Services** - Comprehensive service offerings
4. **Solutions** - Industry-specific solutions
5. **Industries** - Industries we serve
6. **Insights** - Blog with CMS integration
7. **Careers** - Job openings and company culture
8. **Contact** - Contact form and information

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Backend
- **Next.js API Routes** - Server-side API endpoints
- **Nodemailer** - Email sending
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### CMS
- **Sanity** - Headless CMS for blog content

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- Sanity account (for CMS)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd apps/public
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   - Sanity project ID and dataset
   - Email SMTP settings for contact form
   - Google Analytics ID (optional)

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design System

### Colors
- **Primary**: Dark Blue (`#0A2540`)
- **Secondary**: White (`#FFFFFF`)
- **Accent**: Orange (`#FF6B35`)

### Typography
- **Headings**: Poppins (Display font)
- **Body**: Inter (Sans-serif)

## 📁 Project Structure

```
Website/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── solutions/         # Solutions page
│   ├── industries/        # Industries page
│   ├── insights/          # Blog/Insights pages
│   ├── careers/           # Careers page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt
├── components/            # React components
│   ├── common/           # Shared components
│   ├── home/             # Home page components
│   ├── about/            # About page components
│   ├── services/         # Services components
│   ├── solutions/        # Solutions components
│   ├── industries/       # Industries components
│   ├── careers/          # Careers components
│   ├── contact/          # Contact components
│   ├── insights/         # Blog components
│   └── layout/           # Layout components (Header, Footer)
├── lib/                  # Utility functions
│   └── sanity.ts         # Sanity CMS client
├── public/               # Static assets
└── package.json          # Dependencies
```

## 🔧 Configuration

### Sanity CMS Setup

1. Create a Sanity project at [sanity.io](https://sanity.io)
2. Create a schema for blog posts:
   ```javascript
   // In your Sanity studio
   {
     name: 'blogPost',
     title: 'Blog Post',
     type: 'document',
     fields: [
       { name: 'title', type: 'string' },
       { name: 'slug', type: 'slug' },
       { name: 'excerpt', type: 'text' },
       { name: 'publishedAt', type: 'datetime' },
       { name: 'author', type: 'string' },
       { name: 'mainImage', type: 'image' },
       { name: 'content', type: 'array', of: [{ type: 'block' }] },
     ]
   }
   ```
3. Add project ID and dataset to `.env.local`

### Email Configuration

Configure SMTP settings in `.env.local`:
- For Gmail: Use App Password
- For other providers: Use their SMTP settings

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. **Install Vercel CLI** (optional)
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

   Or connect your GitHub repository to Vercel for automatic deployments.

3. **Environment Variables**
   Add all environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `SMTP_FROM`
   - `CONTACT_EMAIL`

## 🔍 SEO Configuration

The site includes:
- ✅ Meta tags and Open Graph
- ✅ Structured data (Schema.org)
- ✅ Sitemap generation
- ✅ Robots.txt
- ✅ Semantic HTML
- ✅ Optimized images

## 📱 Responsive Design

Fully responsive across all devices:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large Desktop (1280px+)

## 🎯 Performance

- Server-side rendering (SSR)
- Image optimization
- Code splitting
- Lazy loading
- Optimized fonts

## 📝 License

Copyright © 2024 Fluxorae. All rights reserved.

## 🤝 Support

For support, email info@fluxorae.com or contact us through the website.

---

Built with ❤️ by Fluxorae
