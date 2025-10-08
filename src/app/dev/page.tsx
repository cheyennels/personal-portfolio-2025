import { Suspense } from 'react'
import GitHubContributions from '../components/GitHubContributions'
import GitHubStats from '../components/GitHubStats'
import { SkeletonCard } from '../components/Skeleton'
import Divider from '../components/Divider'

import type { Metadata } from 'next'
import { devMetadata } from '../metadata'
import { FaArrowRight } from 'react-icons/fa'

export const metadata: Metadata = devMetadata

export default function Dev() {
  return (
    <div className="blog-page-wrapper">
      <div className="blog-container w-full h-full grid place-content-center gap-16">
        <div className="blog-wrapper">
          <div className="blog-header">
            <h1>Development Work</h1>
            <p className="blog-date">
              Last updated:{' '}
              {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
              })}
            </p>
          </div>

          <p className="blog-section-body">
            I&apos;m currently learning and building projects with React,
            Next.js, TypeScript, and React Native. I&apos;m also interested in
            learning about AI and how it can be used to enhance my work.
            I&apos;ll post projects here as I build and finish them!
          </p>

          <Divider />

          <div className="blog-section">
            <div className="blog-section-header">
              <h2 className="blog-section-title">This Portfolio Site</h2>
              <p className="blog-section-date">2025</p>
            </div>
            <p className="blog-section-body">
              This portfolio is a modern, fully responsive web application built
              with Next.js 15, React, and TypeScript. I designed and developed
              it to showcase my work as a designer and developer while
              demonstrating my technical skills and design sensibility. The site
              features a clean, minimal aesthetic with smooth animations and
              transitions. Built with Next.js App Router for optimal
              performance, the architecture leverages server-side rendering and
              static generation for fast page loads. All styling is custom CSS
              with Tailwind for utilities, organized into modular stylesheets
              for maintainability. I implemented comprehensive accessibility
              features including keyboard navigation, skip links, and semantic
              HTML. The component architecture is reusable and scalable, with
              shared components like Button and Divider used throughout. Images
              are optimized through Next.js Image component with AVIF and WebP
              format support. The site includes SEO optimization with proper
              metadata, sitemap, and robots.txt configuration.
            </p>
            <a
              href="https://github.com/cheyennels/personal-portfolio-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="section-link group"
            >
              View on GitHub
              <FaArrowRight className="text-xl group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>

          <Divider />

          <div className="blog-section">
            <div className="blog-section-header">
              <h2 className="blog-section-title">
                Personal Portfolio Site - Previous Version
              </h2>
              <p className="blog-section-date">2020</p>
            </div>
            <p className="blog-section-body">
              cheyenneis.online is a fully custom portfolio site I designed and
              developed while job hunting after college. The goal was to build a
              minimal, image-focused space that highlights my design,
              illustration, and front-end work while reflecting my personal
              style. I developed the site using HTML, CSS, and vanilla
              JavaScript, choosing to skip frameworks to keep it lean and easy
              to maintain. The structure is completely static, which allows for
              quick loading and simple hosting. CSS is organized for
              responsiveness, ensuring flexible layouts across devices. All
              images and assets were optimized for performance and visual
              quality.
            </p>
            <a
              href="https://cheyenneis.online"
              target="_blank"
              rel="noopener noreferrer"
              className="section-link group"
            >
              View this site
              <FaArrowRight className="text-xl group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
          <Divider />

          {/* GitHub Stats Section */}
          <div className="blog-section">
            <h2 className="blog-section-title">GitHub Activity</h2>
            <p className="blog-section-body">
              Here&apos;s a snapshot of my recent development activity and
              contributions.
            </p>
            <div className="flex flex-col gap-6 mt-6">
              <Suspense fallback={<SkeletonCard />}>
                <GitHubContributions />
              </Suspense>
              <Suspense fallback={<SkeletonCard />}>
                <GitHubStats />
              </Suspense>
            </div>
          </div>

          <Divider />
        </div>
      </div>
    </div>
  )
}
