# Cheyenne Smith - Portfolio 2025

A modern, responsive portfolio website built with Next.js 15, React, and TypeScript, showcasing design and development work.

## ✨ Features

- **Modern Stack**: Next.js 15 with App Router, React, TypeScript
- **Responsive Design**: Optimized for all screen sizes
- **Image Optimization**: AVIF/WebP format support with Next.js Image
- **Accessibility**: Keyboard navigation, skip links, semantic HTML
- **SEO Optimized**: Dynamic metadata, sitemap, robots.txt
- **Performance**: Server-side rendering, static generation, optimized assets
- **Custom Styling**: Modular CSS with Tailwind utilities

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/cheyennels/portfolio-2025.git
cd portfolio-2025

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
src/
├── app/
│   ├── components/        # Reusable React components
│   ├── hooks/            # Custom React hooks
│   ├── styles/           # Modular CSS files
│   ├── ui/               # UI utilities (fonts)
│   ├── contact/          # Contact page
│   ├── current-project/  # Featured project page
│   ├── design/           # Design portfolio
│   ├── dev/              # Development portfolio
│   └── resume/           # Resume page
public/
└── assets/               # Images and static files
```

## 🎨 Key Pages

- **/** - Homepage with hero section and about
- **/resume** - Professional resume and skills
- **/design** - Design portfolio showcase
- **/dev** - Development projects and GitHub stats
- **/contact** - Contact form and information
- **/current-project** - Featured project deep-dive

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Custom CSS + Tailwind CSS
- **Fonts**: Schibsted Grotesk (Google Fonts)
- **Icons**: React Icons (Font Awesome)
- **Image Optimization**: Next.js Image with AVIF/WebP

## 📝 Environment Variables

Create a `.env.local` file:

```bash
# Site URL for sitemap/robots.txt
NEXT_PUBLIC_SITE_URL=https://yoursite.com

# GitHub token for API (optional)
NEXT_PUBLIC_GITHUB_TOKEN=your_token_here
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/cheyennels/portfolio-2025)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Other Platforms

The app can also be deployed to:

- Netlify
- Railway
- AWS Amplify
- Cloudflare Pages

## 📦 Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 🎯 Customization

### Update Site Content

See [CONTENT_MANAGEMENT.md](./CONTENT_MANAGEMENT.md) for detailed guide on:

- Managing projects and images
- Data file structure recommendations
- CMS integration options

### Update Styles

Styles are organized in `src/app/styles/`:

- `globals.css` - Global styles and variables
- `typography.css` - Text and font styles
- `components.css` - Component-specific styles
- `pages.css` - Page layout styles
- `blog.css` - Blog/project section styles
- `responsive.css` - Media queries

### Update Metadata

Edit `src/app/metadata.ts` to update SEO metadata for each page.

## 🔧 Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Run production build
npm run lint      # Run ESLint
```

## 📊 Performance Features

- **Image Optimization**: Automatic AVIF/WebP conversion
- **Code Splitting**: Automatic route-based splitting
- **Server Components**: Default SSR for better performance
- **Font Optimization**: Self-hosted Google Fonts
- **Lazy Loading**: Images load on viewport entry

## ♿ Accessibility

- Semantic HTML structure
- Skip-to-content link
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus-visible indicators
- Descriptive alt text for images

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

## 👤 Contact

- **Email**: cheyenneleesmith@gmail.com
- **GitHub**: [@cheyennels](https://github.com/cheyennels)
- **LinkedIn**: [Cheyenne Smith](https://www.linkedin.com/in/cheyenne-smith-4309a2194/)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**Note**: This is a personal portfolio project. The contact form currently uses a simulated submission. For production, integrate with your preferred email service or form backend.
# Force rebuild
