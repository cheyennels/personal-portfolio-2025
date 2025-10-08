# Quick Start Guide - Deploy Today! 🚀

This guide will get your portfolio live in under 30 minutes.

## ✅ Pre-Flight Checklist (5 minutes)

### 1. Review Your Content

- [ ] Check all text for typos on each page
- [ ] Verify all images load correctly
- [ ] Test all links (social media, GitHub, etc.)
- [ ] Make sure your email is correct in the footer and contact page

### 2. Test Locally

```bash
# Build for production
npm run build

# Test production build
npm start
```

Visit http://localhost:3000 and click through every page.

---

## 🚀 Deploy to Vercel (10 minutes)

### Step 1: Commit Your Code (2 min)

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy to Vercel (3 min)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Sign in with GitHub
3. Click "Import" on your portfolio repository
4. Vercel auto-configures everything ✨
5. Click "Deploy"

### Step 3: Configure Environment Variables (2 min)

While it's deploying:

1. Go to Project Settings → Environment Variables
2. Add this:
   ```
   Name: NEXT_PUBLIC_SITE_URL
   Value: (leave blank for now, we'll update it)
   ```

### Step 4: Get Your URL (1 min)

1. Deployment finishes (takes ~2 minutes)
2. You'll see: `https://your-portfolio.vercel.app`
3. Click the URL - **your site is live!** 🎉

### Step 5: Update Site URL (2 min)

1. Copy your Vercel URL
2. Go back to Environment Variables
3. Update `NEXT_PUBLIC_SITE_URL` with your actual URL:
   ```
   NEXT_PUBLIC_SITE_URL=https://your-portfolio.vercel.app
   ```
4. Go to Deployments → Click "..." → Redeploy

---

## 📝 Update Your Domain (Optional - 5 min)

### If you have a custom domain:

1. **Add domain in Vercel**:

   - Project Settings → Domains
   - Add your domain (e.g., `cheyennesmith.com`)

2. **Update DNS at your registrar**:

   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Update Environment Variable**:

   ```
   NEXT_PUBLIC_SITE_URL=https://cheyennesmith.com
   ```

4. **Redeploy** (Vercel does this automatically)

---

## 🎯 Post-Deployment (10 minutes)

### 1. Test Your Live Site (3 min)

Visit your live URL and test:

- [ ] All pages load
- [ ] Images display correctly
- [ ] Links work
- [ ] Mobile responsive (use DevTools)
- [ ] Contact form shows success/error messages

### 2. Check SEO (2 min)

Verify these URLs work:

- `https://yoursite.com/sitemap.xml` ✓
- `https://yoursite.com/robots.txt` ✓

### 3. Run Lighthouse (2 min)

1. Open your live site
2. Open Chrome DevTools (F12)
3. Go to Lighthouse tab
4. Click "Generate report"

**Target scores** (should be good already!):

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

### 4. Submit to Google (3 min)

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership (Vercel makes this easy)
4. Submit your sitemap: `https://yoursite.com/sitemap.xml`

---

## ✨ Optional Enhancements

### Contact Form (Add Later)

Your form currently simulates submission. To make it work:

**Option 1: Formspree (Easiest - 5 min)**

1. Go to [formspree.io](https://formspree.io)
2. Create form, get endpoint
3. Update `src/app/contact/page.tsx` (see DEPLOYMENT.md)

**Option 2: Email Service**

- Use EmailJS, SendGrid, or Resend
- See DEPLOYMENT.md for setup

### Analytics (Add Later)

Track your visitors:

- **Vercel Analytics**: Built-in, just enable it
- **Google Analytics**: Add GA4 tag
- **Plausible**: Privacy-friendly alternative

### Content Management (Add Later)

Make updating easier:

- Create data files (see CONTENT_MANAGEMENT.md)
- Or use a CMS like Sanity.io

---

## 🐛 Troubleshooting

### Build fails?

```bash
# Check locally first
npm run build

# If it works locally, check Vercel build logs
# Usually it's a missing environment variable
```

### Images not showing?

- Check paths: should be `/assets/...`
- Verify images are in `public/` folder
- Check `next.config.ts` image config

### Styles broken?

- Clear browser cache (Cmd+Shift+R / Ctrl+Shift+F5)
- Check CSS imports in `layout.tsx`

### Contact form not working?

- That's expected! It's simulated
- Follow "Contact Form" setup above

---

## 📋 Your Deployment Checklist

**Before deploying:**

- [x] Code is clean (no debug code)
- [x] No linter errors
- [x] Builds successfully locally
- [ ] All content reviewed
- [ ] All links tested

**During deployment:**

- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Environment variables set
- [ ] Initial deployment successful

**After deployment:**

- [ ] Live site tested
- [ ] Mobile responsive checked
- [ ] SEO files verified (sitemap, robots)
- [ ] Lighthouse score checked
- [ ] Google Search Console setup

---

## 🎊 Success!

**Congratulations!** Your portfolio is now live on the internet!

### Share it:

- ✅ Add to your LinkedIn profile
- ✅ Put it on your resume
- ✅ Share with potential employers
- ✅ Tweet about it
- ✅ Add to GitHub profile README

### Keep it fresh:

- Update with new projects regularly
- Add blog posts if you want
- Keep GitHub stats current
- Respond to contact form submissions

---

## 📚 Next Steps

1. **Set up contact form** (see DEPLOYMENT.md)
2. **Add analytics** (Vercel Analytics is easiest)
3. **Optimize content management** (see CONTENT_MANAGEMENT.md)
4. **Custom domain** (if you have one)
5. **Share everywhere!** 📢

---

## Need Help?

Check these files:

- `README.md` - Project overview
- `DEPLOYMENT.md` - Detailed deployment guide
- `CONTENT_MANAGEMENT.md` - Managing content

Or docs:

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)

**You've got this!** 💪
