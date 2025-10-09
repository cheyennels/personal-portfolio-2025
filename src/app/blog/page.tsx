import type { Metadata } from 'next'
import { blogMetadata } from '../metadata'
import Link from 'next/link'
import Divider from '../components/Divider'
import { FaArrowRight } from 'react-icons/fa'

export const metadata: Metadata = blogMetadata

// Blog posts data - you can move this to a separate file later
const blogPosts = [
  {
    id: 'website-comparison',
    title: 'Website Comparison: Old vs. New ✨',
    date: '2025-10-09',
    excerpt:
      "After a layoff, I finally gave my 2020 portfolio a much-needed makeover. Here's what changed and why it matters.",
    slug: 'website-comparison',
    tags: ['Web Design', 'Development', 'Portfolio', 'Next.js'],
  },
  {
    id: 'puppy-pedometer-project',
    title: 'Designing Puppy Pedometer: A Mobile Fitness App',
    date: '2025-10-09',
    excerpt:
      'Take a peek at my current project - a mobile app that makes daily activity fun by encouraging users to get outside and stay active!',
    slug: 'current-project',
    tags: ['UX/UI Design', 'Mobile App', 'React Native', 'Figma'],
  },
  // Add more blog posts here
]

export default function Blog() {
  return (
    <div className="blog-page-wrapper">
      <div className="blog-container w-full h-full grid place-content-center gap-16">
        <div className="blog-wrapper">
          <div className="blog-header">
            <h1>Blog</h1>
            <p className="blog-date">
              Thoughts on design, development, and creativity
            </p>
          </div>

          <div className="blog-posts-grid">
            {blogPosts.length > 0 ? (
              blogPosts.map((post) => (
                <article key={post.id} className="blog-post-card">
                  <div className="blog-post-header">
                    <h2 className="blog-post-title">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <time className="blog-post-date">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <p className="blog-post-excerpt">{post.excerpt}</p>
                  <div className="blog-post-tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="blog-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="section-link group mt-4"
                  >
                    Read more
                    <FaArrowRight className="arrow-icon text-xl" />
                  </Link>
                </article>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-large text-grey-700">
                  No blog posts yet. Check back soon!
                </p>
                <p className="text-body text-grey-600 mt-2">
                  I&apos;m working on some exciting content about design,
                  development, and my creative process.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
