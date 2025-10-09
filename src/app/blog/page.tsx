import type { Metadata } from 'next'
import { blogMetadata } from '../metadata'
import Link from 'next/link'
import Divider from '../components/Divider'
import { FaArrowRight } from 'react-icons/fa'

export const metadata: Metadata = blogMetadata

// Blog posts data - you can move this to a separate file later
const blogPosts = [
  {
    id: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js 15',
    date: '2025-10-09',
    excerpt:
      'Learn how I built this portfolio using Next.js 15, TypeScript, and modern web development practices.',
    slug: 'getting-started-with-nextjs',
    tags: ['Next.js', 'React', 'TypeScript'],
  },
  // Add more blog posts here
]

export default function Blog() {
  return (
    <div className="whole-page-wrapper">
      <div className="page-container w-full h-full">
        <div className="page-wrapper">
          <div className="page-header">
            <h1>Blog</h1>
            <p className="text-large text-grey-700 mt-2">
              Thoughts on design, development, and creativity
            </p>
          </div>

          <Divider />

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
                    <FaArrowRight className="text-xl group-hover:translate-x-1 transition-transform duration-200" />
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

