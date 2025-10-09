import type { Metadata } from 'next'
import Divider from '../../components/Divider'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Website Comparison: Old vs. New - Cheyenne Smith',
  description:
    "After a layoff, I finally gave my 2020 portfolio a much-needed makeover. Here's what changed and why it matters.",
}

export default function WebsiteComparison() {
  return (
    <div className="blog-page-wrapper">
      <div className="blog-container w-full h-full grid place-content-center gap-16">
        <div className="blog-wrapper">
          <Link
            href="/blog"
            className="section-link group inline-flex items-center mb-6"
          >
            <FaArrowLeft className="arrow-icon text-xl mr-2" />
            Back to Blog
          </Link>

          <div className="blog-header">
            <h1>Website Comparison: Old vs. New ✨</h1>
            <p className="blog-date">October 9, 2025</p>
          </div>

          <Divider />

          <div className="blog-section">
            <p className="blog-section-body">
              I hadn&apos;t updated or even thought about my personal website
              since around 2020, when I landed my first real job out of college.
              After a recent layoff, I finally dusted it off and it was
              definitely showing its age. It needed a serious makeover.
            </p>
          </div>

          <div className="blog-section">
            <p className="blog-section-body">
              Looking at it now, I can see all kinds of design and UX issues I
              just didn&apos;t notice back then. There were false interactions
              (hover animations on text that weren&apos;t even clickable), super
              low-quality images meant to help performance, text with poor
              contrast, and bold fonts so heavy they looked fuzzy. Basically, it
              was time for a fresh start.
            </p>
          </div>

          <div className="blog-section">
            <p className="blog-section-body">
              On the development side, the original site was built with plain
              HTML, CSS, and JavaScript which worked fine at the time. But I
              wanted my new site to reflect how much I&apos;ve grown as a
              developer and designer. This time around, I rebuilt everything
              with Next.js, TypeScript, and React, and I&apos;m hosting on
              Vercel (because it&apos;s just too easy).
            </p>
          </div>

          <div className="blog-section">
            <h2 className="blog-section-title">
              Here&apos;s a quick look at what changed:
            </h2>

            <div className="comparison-table">
              <div className="comparison-row comparison-header">
                <div className="comparison-cell">Aspect</div>
                <div className="comparison-cell">
                  Old Site (cheyenneis.online)
                </div>
                <div className="comparison-cell">New Site (2025 Portfolio)</div>
                <div className="comparison-cell">Why It&apos;s Better</div>
              </div>

              <div className="comparison-row">
                <div className="comparison-cell">
                  <strong>Overall purpose & messaging</strong>
                </div>
                <div className="comparison-cell">
                  Minimal landing page with title, roles (graphic/web design,
                  UX, front-end dev, illustration), and a resume link.
                </div>
                <div className="comparison-cell">
                  Full portfolio site with sections for Design, Development,
                  Contact, Blog and Resume, plus active messaging (&quot;I
                  design. I code. I create.&quot;).
                </div>
                <div className="comparison-cell">
                  Feels like a complete portfolio rather than just a digital
                  business card.
                </div>
              </div>

              <div className="comparison-row">
                <div className="comparison-cell">
                  <strong>Navigation & structure</strong>
                </div>
                <div className="comparison-cell">
                  Basically one long page, limited links (resume, contact,
                  design, illustration).
                </div>
                <div className="comparison-cell">
                  Clear nav bar (Home / Design / Development / Contact / Blog /
                  Resume).
                </div>
                <div className="comparison-cell">
                  Easier to explore and find what you&apos;re looking for.
                </div>
              </div>

              <div className="comparison-row">
                <div className="comparison-cell">
                  <strong>Visuals & branding</strong>
                </div>
                <div className="comparison-cell">
                  Sparse visuals; mostly static text.
                </div>
                <div className="comparison-cell">
                  More imagery — including a portrait, project illustrations,
                  and a custom logo with trees and a sun.
                </div>
                <div className="comparison-cell">
                  Stronger personal brand and more visual personality.
                </div>
              </div>

              <div className="comparison-row">
                <div className="comparison-cell">
                  <strong>Hero section</strong>
                </div>
                <div className="comparison-cell">
                  &quot;Welcome to the portfolio of Cheyenne Lee Smith…&quot;
                </div>
                <div className="comparison-cell">
                  &quot;Cheyenne Smith — I design. I code. I create. Turning
                  ideas into beautiful experiences people enjoy.&quot;
                </div>
                <div className="comparison-cell">
                  Clearer, more confident intro that sums up what I do.
                </div>
              </div>

              <div className="comparison-row">
                <div className="comparison-cell">
                  <strong>Project visibility</strong>
                </div>
                <div className="comparison-cell">
                  No featured projects or process.
                </div>
                <div className="comparison-cell">
                  Highlights current project (&quot;Puppy Pedometer&quot;) with
                  details and links.
                </div>
                <div className="comparison-cell">
                  Shows real work and creative process.
                </div>
              </div>

              <div className="comparison-row">
                <div className="comparison-cell">
                  <strong>Contact & calls to action</strong>
                </div>
                <div className="comparison-cell">
                  Basic &quot;Contact&quot; link.
                </div>
                <div className="comparison-cell">
                  Dedicated &quot;Let&apos;s Connect&quot; section with clear
                  CTA and visible email.
                </div>
                <div className="comparison-cell">
                  Encourages more engagement and outreach.
                </div>
              </div>

              <div className="comparison-row">
                <div className="comparison-cell">
                  <strong>Styling & layout</strong>
                </div>
                <div className="comparison-cell">
                  Simple, bare-bones HTML layout.
                </div>
                <div className="comparison-cell">
                  Modern, modular, responsive design with improved spacing and
                  UX.
                </div>
                <div className="comparison-cell">
                  Feels polished and up to date.
                </div>
              </div>

              <div className="comparison-row">
                <div className="comparison-cell">
                  <strong>Resume</strong>
                </div>
                <div className="comparison-cell">
                  &quot;Maybe download my resume? It would make me happy.&quot;
                </div>
                <div className="comparison-cell">
                  Professional &quot;Resume&quot; nav link and section.
                </div>
                <div className="comparison-cell">
                  More clear and professional.
                </div>
              </div>

              <div className="comparison-row">
                <div className="comparison-cell">
                  <strong>Personality & tone</strong>
                </div>
                <div className="comparison-cell">Minimal style and voice.</div>
                <div className="comparison-cell">
                  More personality, visuals, and voice throughout.
                </div>
                <div className="comparison-cell">Feels more me.</div>
              </div>

              <div className="comparison-row">
                <div className="comparison-cell">
                  <strong>Content depth</strong>
                </div>
                <div className="comparison-cell">
                  Very limited content beyond basic roles.
                </div>
                <div className="comparison-cell">
                  Includes project writeups, current work, and visuals.
                </div>
                <div className="comparison-cell">
                  More substance and storytelling.
                </div>
              </div>
            </div>
          </div>

          <div className="blog-section">
            <p className="blog-section-body">
              I&apos;m so proud of how the new site turned out. It took a few
              weeks of nonstop work, but I think it&apos;s awesome!~ clean,
              functional, and very me. I can&apos;t wait to keep adding new
              projects and experiments as I grow 🌸
            </p>
          </div>

          <div className="blog-section">
            <p className="blog-section-body">
              If you&apos;re curious, you can still{' '}
              <a
                href="https://cheyenneis.online"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                check out my old site
              </a>{' '}
              for nostalgia&apos;s sake. But the new one is my digital home
              🥰🥰🥰
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
