'use client'

import Image from 'next/image'
import { useState } from 'react'
import placeholder from '../../../public/assets/illustration/p-1.png'
import ImageModal from '../components/ImageModal'

import discovery1 from '../../../public/assets/puppy-app/discovery1.png'
import discovery2 from '../../../public/assets/puppy-app/discovery2.png'
import discovery3 from '../../../public/assets/puppy-app/discovery3.png'
import wireframes from '../../../public/assets/puppy-app/wireframes.png'
import style from '../../../public/assets/puppy-app/style.png'
import pixelArt from '../../../public/assets/puppy-app/pixel-art.png'
import moodboard1 from '../../../public/assets/puppy-app/moodboard1.png'
import moodboard2 from '../../../public/assets/puppy-app/moodboard2.png'
import components from '../../../public/assets/puppy-app/components.png'
import splash from '../../../public/assets/puppy-app/splash.png'
import signup from '../../../public/assets/puppy-app/sign-up.png'
import dashboard from '../../../public/assets/puppy-app/dashboard.png'
import screens from '../../../public/assets/puppy-app/screens.png'
import loficomponents from '../../../public/assets/puppy-app/lo-fi-components.png'
import wf1 from '../../../public/assets/puppy-app/wf1.png'
import wf2 from '../../../public/assets/puppy-app/wf2.png'
import wf3 from '../../../public/assets/puppy-app/wf3.png'
import banner from '../../../public/assets/puppy-app/banner.png'

export default function CurrentProject() {
  const [modalImage, setModalImage] = useState<{
    src: string
    alt: string
  } | null>(null)

  const openModal = (src: string, alt: string) => {
    setModalImage({ src, alt })
  }

  const closeModal = () => {
    setModalImage(null)
  }

  return (
    <div className="blog-page-wrapper">
      <div className="blog-container w-full h-full grid place-content-center gap-16">
        <div className="blog-wrapper">
          <div className="blog-header">
            <h1>Current Project - Puppy Pedometer</h1>
            <p className="blog-date">Last Updated: October 2025</p>
            <div className="blog-banner">
              <Image src={banner} alt="Banner" fill />
            </div>
          </div>
          <div className="blog-section">
            <h2 className="blog-section-title">Project Overview</h2>
            <p className="blog-section-body">
              I'm currently working on a mobile app called Puppy Pedometer. The
              goal is to make daily activity more fun and motivating by turning
              steps into a way to grow and customize a virtual puppy. Inspired
              by cozy and playful apps like Pikmin Bloom, Finch, and Pokémon Go,
              Puppy Pedometer encourages people to get outside and move while
              taking care of something cute! (think Tamagotchi 👾)
            </p>
          </div>

          <div className="blog-section">
            <h2 className="blog-section-title">Discovery Process</h2>
            <p className="blog-section-body">
              This idea started as a personal project: I wanted to create
              something that would motivate me (and my friends) to be more
              active, but with a lighthearted, cozy aesthetic. I researched
              similar gamified wellness apps, looked at their strengths, and
              thought about what could feel fresh and fun.
            </p>
            <div className="blog-section-images">
              <div
                className="blog-image-square"
                onClick={() => openModal(moodboard1.src, 'Mood board 1')}
              >
                {/* Images to show here:
              inspiration board, notes/mindmap, or moodboard. */}
                <Image src={moodboard1} alt="Mood board 1" fill />
              </div>
              <div
                className="blog-image-square"
                onClick={() => openModal(moodboard2.src, 'Mood board 2')}
              >
                <Image src={moodboard2} alt="Mood board 2" fill />
              </div>
            </div>

            <div className="blog-section-images">
              <div
                className="blog-image-square"
                onClick={() => openModal(discovery1.src, 'Discovery process 1')}
              >
                <Image src={discovery1} alt="Discovery process 1" fill />
              </div>
              <div
                className="blog-image-square"
                onClick={() => openModal(discovery2.src, 'Discovery process 2')}
              >
                <Image src={discovery2} alt="Discovery process 2" fill />
              </div>
              <div
                className="blog-image-square"
                onClick={() => openModal(discovery3.src, 'Discovery process 3')}
              >
                <Image src={discovery3} alt="Discovery process 3" fill />
              </div>
            </div>
          </div>

          <div className="blog-section">
            <h2 className="blog-section-title">Wireframes</h2>
            <p className="blog-section-body">
              To map out the experience, I began with wireframes. I focused on
              making the navigation simple while leaving room for fun
              interactions (like checking in on your puppy, earning rewards, and
              viewing progress).
            </p>
            <div className="blog-section-images">
              <div
                className="blog-image-square"
                onClick={() =>
                  openModal(wireframes.src, 'Home screen wireframe')
                }
              >
                {/*  Images to show here: A few wireframes of key
              screens (home, progress, puppy view). Optional: quick user flow
              diagram. */}
                <Image src={wireframes} alt="Home screen wireframe" fill />
              </div>
              <div
                className="blog-image-square"
                onClick={() => openModal(wf2.src, 'Progress screen wireframe')}
              >
                <Image src={wf2} alt="Progress screen wireframe" fill />
              </div>
              <div
                className="blog-image-square"
                onClick={() => openModal(wf3.src, 'Puppy view wireframe')}
              >
                <Image src={wf3} alt="Puppy view wireframe" fill />
              </div>
              <div
                className="blog-image-square"
                onClick={() => openModal(wf1.src, 'Puppy view wireframe')}
              >
                <Image src={wf1} alt="Puppy view wireframe" fill />
              </div>
            </div>
          </div>

          <div className="blog-section">
            <h2 className="blog-section-title">Low Fidelity Designs</h2>
            <p className="blog-section-body">
              From there, I moved into low-fidelity mockups. These helped me
              visualize spacing, layout, and overall flow before diving into
              details. One challenge was making sure the app felt playful
              without overloading the interface.
            </p>
            <div className="blog-section-images">
              <div
                className="blog-image-square"
                onClick={() => openModal(splash.src, 'Splash screen')}
              >
                {/*  Images to show here:
              side-by-side comparison of a wireframe vs. low-fi version of the
              same screen. */}
                <Image src={splash} alt="Splash screen" fill />
              </div>
              <div
                className="blog-image-square"
                onClick={() => openModal(signup.src, 'Sign up screen')}
              >
                <Image src={signup} alt="Sign up screen" fill />
              </div>
              <div
                className="blog-image-square"
                onClick={() => openModal(dashboard.src, 'Dashboard screen')}
              >
                <Image src={dashboard} alt="Dashboard screen" fill />
              </div>
              <div
                className="blog-image-square"
                onClick={() => openModal(screens.src, 'Screen collection')}
              >
                <Image src={screens} alt="Screen collection" fill />
              </div>
            </div>
          </div>

          <div className="blog-section">
            <h2 className="blog-section-title">
              Components and Style Exploration
            </h2>
            <p className="blog-section-body">
              I also started setting up a small component library in Figma —
              buttons, inputs, and cards — along with an early pastel color
              palette. The goal is to keep the style cozy, fun, and accessible
              across devices. Down the road I would like to add a dark mode!
            </p>
            <div className="blog-section-images">
              <div
                className="blog-image-square"
                onClick={() => openModal(style.src, 'Style guide')}
              >
                {/*  Images to show here: Figma components page, style
              tile with colors + typography. */}
                <Image src={style} alt="Style guide" fill />
              </div>
              <div
                className="blog-image-square"
                onClick={() =>
                  openModal(components.src, 'Figma components library')
                }
              >
                <Image src={components} alt="Figma components library" fill />
              </div>
            </div>
          </div>

          <div className="blog-section">
            <h2 className="blog-section-title">What's Next</h2>
            <p className="blog-section-body">
              The next steps are: Completing my component library, moving into
              high-fidelity designs and adding pixel art for the puppy and
              accessories (hats, collars, etc.), and then prototyping
              interactivity, accessibility and usability testing. I'm especially
              excited to experiment with animations to make the puppy feel alive
              and responsive.
            </p>
            <div className="blog-section-images">
              <div
                className="blog-image-square"
                onClick={() =>
                  openModal(loficomponents.src, 'Low-fi components')
                }
              >
                <Image src={loficomponents} alt="Low-fi components" fill />
                {/*  Images to show here: placeholder
              "coming soon" mockup or pixel art sneak peek. */}
              </div>
              <div
                className="blog-image-square"
                onClick={() => openModal(pixelArt.src, 'Pixel art sneak peek')}
              >
                <Image src={pixelArt} alt="Pixel art sneak peek" fill />
              </div>
            </div>
          </div>

          <div className="blog-section">
            <h2 className="blog-section-title">Reflection</h2>
            <p className="blog-section-body">
              So far, this project has been a great exercise in balancing
              playful aesthetics with functional design. I’ve learned a lot
              about building a design system early on, and I’m continuing to
              refine my process as I go. Stay tuned — more updates (and puppy
              accessories) are on the way! 🐶✨
            </p>
          </div>

          <div className="blog-section">
            <h2 className="blog-section-title">Thank you for reading!</h2>
            <p className="blog-section-body">
              If you have any feedback or suggestions, please feel free to reach
              out! I am still in the process of designing the app and will be
              updating this page as I go. Check back soon! 🌸🐶💗
            </p>
          </div>
        </div>

        {modalImage && (
          <ImageModal
            src={modalImage.src}
            alt={modalImage.alt}
            isOpen={!!modalImage}
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  )
}
