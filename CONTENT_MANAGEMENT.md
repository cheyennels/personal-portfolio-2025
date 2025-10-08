# Content Management Guide

This guide explains the best practices for managing content (images, text, project data) in your portfolio.

## Current Approach

### ✅ What's Working Well

- **Static imports**: Images are imported directly in components, which ensures they're optimized by Next.js
- **Type safety**: TypeScript ensures all data is properly structured
- **Performance**: Next.js Image component handles optimization automatically

### ⚠️ Current Limitations

- Content is hardcoded in components
- Adding new projects requires editing multiple files
- No separation between content and presentation

---

## Recommended Improvements

### Option 1: Data Files (Simple & Recommended for Your Use Case)

Create centralized data files for easy content updates.

#### 1. Create a data directory:

```
src/
  data/
    projects.ts
    skills.ts
    experience.ts
```

#### 2. Example `projects.ts`:

```typescript
export interface Project {
  id: string
  title: string
  date: string
  description: string
  link?: {
    href: string
    text: string
    external?: boolean
  }
  images: {
    src: string
    alt: string
    className?: string
  }[]
  tags?: string[]
}

export const designProjects: Project[] = [
  {
    id: 'portfolio-2025',
    title: 'This Portfolio Site',
    date: '2025',
    description:
      'This portfolio is a modern, fully responsive web application...',
    link: {
      href: 'https://github.com/cheyennels/portfolio-2025',
      text: 'View on GitHub',
      external: true,
    },
    images: [
      // Import these at the top of the file
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'CSS'],
  },
  // ... more projects
]
```

#### 3. Update your pages to use the data:

```tsx
import { designProjects } from '@/data/projects'

export default function Design() {
  return (
    <div className="blog-page-wrapper">
      {designProjects.map((project) => (
        <div key={project.id} className="blog-section">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          {/* ... */}
        </div>
      ))}
    </div>
  )
}
```

### Option 2: CMS Integration (For Frequent Updates)

If you plan to update content frequently, consider a headless CMS:

#### Popular Options:

- **Sanity.io** - Great dev experience, free tier
- **Contentful** - Feature-rich, good documentation
- **Strapi** - Open source, self-hosted option
- **Markdown + MDX** - Simple file-based approach

#### Benefits:

- Update content without touching code
- Version control for content
- Rich text editing
- Image management built-in
- Can be shared with non-technical users

---

## Image Management

### Current Best Practices ✅

```tsx
// ✅ Good - Static import (what you're doing now)
import banner from '../../../public/assets/banner.jpg'
;<Image src={banner} alt="Banner" fill />
```

### Alternatives for Dynamic Content

#### Using public folder (for frequently changing images):

```tsx
// Images go in /public/assets/projects/
<Image
  src="/assets/projects/project-1.jpg"
  alt="Project screenshot"
  width={800}
  height={600}
/>
```

#### Image naming convention:

```
public/
  assets/
    projects/
      portfolio-2025-1.jpg
      portfolio-2025-2.jpg
      puppy-pedometer-1.jpg
      puppy-pedometer-2.jpg
    design/
      project-slug-image-1.jpg
```

---

## Recommended File Structure

```
src/
  app/
    design/
      page.tsx          # Uses data from /data
    dev/
      page.tsx
  data/
    projects.ts         # All project data
    skills.ts          # Skills & tech stack
    experience.ts      # Work experience
    education.ts       # Education
  components/
    ProjectCard.tsx    # Reusable project display
    ImageGallery.tsx   # Reusable gallery
```

---

## Quick Wins for Better Content Management

### 1. **Create Reusable Components**

Instead of repeating blog sections, create a `ProjectSection` component:

```tsx
// src/app/components/ProjectSection.tsx
interface ProjectSectionProps {
  title: string
  date: string
  description: string
  link?: { href: string; text: string; external?: boolean }
  images: { src: StaticImageData; alt: string; onClick?: () => void }[]
}

export default function ProjectSection({
  title,
  date,
  description,
  link,
  images,
}: ProjectSectionProps) {
  return (
    <div className="blog-section">
      <div className="blog-section-header">
        <h2 className="blog-section-title">{title}</h2>
        <p className="blog-section-date">{date}</p>
      </div>
      <p className="blog-section-body">{description}</p>
      {link && (
        <a
          href={link.href}
          target={link.external ? '_blank' : '_self'}
          className="section-link group"
        >
          {link.text}
          <FaArrowRight />
        </a>
      )}
      <div className="blog-section-images">
        {images.map((img, i) => (
          <div key={i} className="blog-image-square" onClick={img.onClick}>
            <Image src={img.src} alt={img.alt} fill />
          </div>
        ))}
      </div>
    </div>
  )
}
```

### 2. **Centralize Image Assets**

Move all images to organized folders:

```
public/assets/
  projects/
    design/
    dev/
  about/
  illustrations/
```

### 3. **Use Environment Variables**

Already done! ✅

- `NEXT_PUBLIC_SITE_URL` for deployment URLs
- Can add `NEXT_PUBLIC_GITHUB_TOKEN` for GitHub API
- Add `NEXT_PUBLIC_CONTACT_EMAIL` for contact form

---

## For Your Next Update Session

### Priority 1: Data Files (30 minutes)

1. Create `src/data/projects.ts`
2. Move all project data from components
3. Update design/dev pages to map over data

### Priority 2: Reusable Components (20 minutes)

1. Create `ProjectSection` component
2. Create `ImageGallery` component
3. Reduce code duplication

### Priority 3: CMS (Future - 2-3 hours)

1. Choose CMS (recommend Sanity.io)
2. Set up schema
3. Migrate content
4. Add API endpoints

---

## Benefits of These Changes

### Immediate Benefits:

- ✅ Update content without touching component code
- ✅ Consistent structure across all projects
- ✅ Easier to add/remove projects
- ✅ Better type safety
- ✅ Single source of truth

### Long-term Benefits:

- ✅ Can build admin panel later
- ✅ Easy to add search/filter
- ✅ Content versioning
- ✅ Automated backups
- ✅ Multi-language support (future)

---

## Quick Start: Implementing Data Files

1. **Create the data file** (5 min):

   ```bash
   mkdir src/data
   touch src/data/projects.ts
   ```

2. **Move content** (10 min):
   Copy project data from components to the file

3. **Update imports** (5 min):
   Import data instead of hardcoding

4. **Test** (5 min):
   Verify everything still works

**Total time: ~25 minutes for immediate improvement!**
