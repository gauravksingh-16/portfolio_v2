# Gaurav Kumar Singh - Portfolio

A modern, responsive portfolio website built with Next.js 15, React 19, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 15 with Turbopack
- **UI:** React 19, Framer Motion, Three.js
- **Styling:** Tailwind CSS 4
- **Email:** Resend
- **Icons:** Phosphor Icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
RESEND_API_KEY=your_resend_api_key_here
PROJECT_PASSWORD=your_project_password_here
```

Get your Resend API key from: https://resend.com/api-keys

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

## Deployment to Vercel

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
   - `PROJECT_PASSWORD`
4. Deploy

### Post-Deployment Checklist

- [ ] Update domain URLs in `src/app/layout.tsx`
- [ ] Update sitemap URL in `public/robots.txt`
- [ ] Submit sitemap to Google Search Console
- [ ] Test contact form functionality

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── api/            # API routes (contact, verify-password)
│   ├── experiments/    # Experiments gallery
│   ├── gallery/        # Image gallery
│   └── projects/       # Projects showcase
├── components/         # React components
├── data/              # Static data (projects, experiments)
└── hooks/             # Custom React hooks
```

## Features

- Responsive design
- Dark/light theme support
- Contact form with email integration
- Password-protected projects
- PDF viewer for case studies
- SEO optimized with structured data
- PWA manifest

## License

Private - All rights reserved
