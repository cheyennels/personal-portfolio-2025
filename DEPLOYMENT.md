# Deployment Checklist

Follow this checklist to deploy your portfolio successfully.

## Pre-Deployment Checklist

### ✅ Code Cleanup (Completed)

- [x] Remove debug code and console.logs
- [x] Remove test borders and debug styles
- [x] Update TODO comments to production-ready notes
- [x] Check for linter errors
- [x] Ensure all images have proper alt text

### ✅ Configuration

- [x] Environment variables configured (using NEXT_PUBLIC_SITE_URL)
- [ ] Update site URL in environment variables for production
- [ ] Add GitHub token (optional, for GitHub stats)
- [ ] Configure contact form endpoint (if using a service)

### ✅ Content Review

- [ ] Verify all links work correctly
- [ ] Check all images load properly
- [ ] Review all text for typos
- [ ] Test contact form submission
- [ ] Verify social media links

### ✅ SEO & Performance

- [x] Sitemap configured
- [x] Robots.txt configured
- [x] Metadata for all pages
- [x] Image optimization enabled
- [ ] Update NEXT_PUBLIC_SITE_URL to production domain
- [ ] Test performance with Lighthouse

### ✅ Testing

- [ ] Test on desktop browsers (Chrome, Firefox, Safari)
- [ ] Test on mobile devices (iOS, Android)
- [ ] Test all navigation links
- [ ] Test responsive breakpoints
- [ ] Test keyboard navigation
- [ ] Test dark/light mode (if applicable)

---

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel?**

- Created by Next.js team
- Zero-config deployment
- Automatic HTTPS
- Global CDN
- Free hobby tier
- Automatic preview deployments

**Steps:**

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings ✨

3. **Configure Environment Variables**
   In Vercel dashboard, add:

   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_GITHUB_TOKEN=your_token (optional)
   ```

4. **Deploy!**

   - Click "Deploy"
   - Wait ~2 minutes
   - Your site is live! 🎉

5. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

---

### Option 2: Netlify

**Steps:**

1. **Push to GitHub** (same as above)

2. **Import to Netlify**

   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repo

3. **Build Settings**

   ```
   Build command: npm run build
   Publish directory: .next
   ```

4. **Environment Variables**
   Add in Site Settings → Environment:

   ```
   NEXT_PUBLIC_SITE_URL=https://your-site.netlify.app
   ```

5. **Deploy!**

---

### Option 3: Railway

**Steps:**

1. **Push to GitHub**

2. **Deploy on Railway**

   - Go to [railway.app](https://railway.app)
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository

3. **Configure**

   - Railway auto-detects Next.js
   - Add environment variables in Settings

4. **Deploy!**

---

## Post-Deployment Steps

### 1. Update URLs

After deployment, update these in your code:

**Update `.env.local`** (for local development):

```bash
NEXT_PUBLIC_SITE_URL=https://your-actual-domain.com
```

**For Vercel/Netlify**: Add the same in their environment variable settings

### 2. Test Production Build Locally

```bash
# Build for production
npm run build

# Test production build
npm start
```

Open http://localhost:3000 and verify everything works.

### 3. Verify SEO

After deployment, check:

- Visit `https://yourdomain.com/sitemap.xml` - should show all pages
- Visit `https://yourdomain.com/robots.txt` - should show rules
- Use [Google Search Console](https://search.google.com/search-console) to submit sitemap

### 4. Performance Testing

Run Lighthouse audit:

1. Open your deployed site
2. Open Chrome DevTools
3. Go to Lighthouse tab
4. Run audit

**Target Scores:**

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

### 5. Analytics (Optional)

Add analytics to track visitors:

- **Google Analytics** - Most common
- **Plausible** - Privacy-friendly
- **Vercel Analytics** - Built-in for Vercel

---

## Environment Variables Reference

Create these in your deployment platform:

| Variable                   | Required | Example                   | Description                |
| -------------------------- | -------- | ------------------------- | -------------------------- |
| `NEXT_PUBLIC_SITE_URL`     | Yes      | `https://yourdomain.com`  | Your production URL        |
| `NEXT_PUBLIC_GITHUB_TOKEN` | No       | `ghp_xxx...`              | GitHub API token for stats |
| `CONTACT_FORM_ENDPOINT`    | No       | `https://api.example.com` | Form submission endpoint   |

---

## Custom Domain Setup

### For Vercel:

1. **Buy domain** (Namecheap, Google Domains, etc.)

2. **Add to Vercel**:

   - Project Settings → Domains
   - Add domain (e.g., `cheyennesmith.com`)

3. **Update DNS**:
   Add these records at your domain registrar:

   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. **Wait for propagation** (5 mins - 24 hours)

### For Netlify:

1. **Add domain** in Site Settings → Domain management

2. **Update DNS**:

   ```
   Type: A
   Name: @
   Value: [Netlify's IP from dashboard]

   Type: CNAME
   Name: www
   Value: [your-site].netlify.app
   ```

---

## Contact Form Setup

Your contact form currently simulates submission. For production:

### Option A: Email Services (Easiest)

**Using Formspree (Free tier available):**

1. Go to [formspree.io](https://formspree.io)
2. Create form
3. Get endpoint URL
4. Update `contact/page.tsx`:
   ```tsx
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData),
   })
   ```

**Using EmailJS:**

1. Go to [emailjs.com](https://emailjs.com)
2. Set up email service
3. Install: `npm install @emailjs/browser`
4. Update form handler

### Option B: API Route (More Control)

Create `src/app/api/contact/route.ts`:

```typescript
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  // Use SendGrid, Resend, or Nodemailer
  // Send email here

  return NextResponse.json({ success: true })
}
```

---

## Troubleshooting

### Build fails on Vercel/Netlify

- Check build logs
- Ensure all dependencies are in `package.json`
- Verify environment variables are set
- Try building locally first: `npm run build`

### Images not loading

- Check image paths are correct
- Verify images are in `public/` directory
- Check Next.js Image configuration in `next.config.ts`

### Styles not applying

- Clear browser cache
- Check CSS file imports in `layout.tsx`
- Verify build completed successfully

### GitHub stats not showing

- Add `NEXT_PUBLIC_GITHUB_TOKEN` environment variable
- Check API rate limits
- Verify token has correct permissions

---

## Quick Deploy Commands

```bash
# 1. Final check
npm run build
npm start

# 2. Commit and push
git add .
git commit -m "Production ready"
git push origin main

# 3. Deploy to Vercel (one command!)
npx vercel --prod

# Or use Vercel CLI
npm i -g vercel
vercel --prod
```

---

## Success! 🎉

Your portfolio is now live!

**Next steps:**

1. Share the link on LinkedIn
2. Add to your resume
3. Submit sitemap to Google Search Console
4. Monitor analytics
5. Keep updating with new projects!

**Need help?** Check:

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
