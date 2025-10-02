'use client'

import Image from 'next/image'
import puppies from '../../public/assets/illustration/pixel-art.png'
import portrait from '../../public/assets/illustration/me-3.jpg'
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa'
import Section from './components/Section'
import { useEffect, useRef } from 'react'
import { useScrollAnimation } from './hooks/useScrollAnimation'

export default function Home() {
  const arrowRef = useRef<HTMLDivElement>(null)
  const heroRef = useScrollAnimation(0.1, '0px 0px -100px 0px')
  const sectionRef = useScrollAnimation(0.1, '0px 0px -100px 0px')

  useEffect(() => {
    const timer = setTimeout(() => {
      if (arrowRef.current) {
        const icon = arrowRef.current.querySelector('.scroll-icon')
        if (icon) {
          icon.classList.remove('bounce')
        }
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = () => {
    const section = document.querySelector('.section')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div className="home-container">
      <div
        ref={heroRef as React.RefObject<HTMLDivElement>}
        className="hero-section scroll-animate"
      >
        <div>
          <h1 className="text-hero w-full">Cheyenne Smith</h1>
          <h2 className="text-title">I design. I code. I create.</h2>
          <p className="body-hero">
            Turning ideas into beautiful experiences people enjoy.
          </p>
          <div className="hero-icons">
            <a
              href="https://github.com/cheyennels"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/cheyenne-smith-4309a2194/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
            >
              <FaLinkedin className="icon" />
            </a>
          </div>
        </div>
        <Image
          src={portrait}
          alt="A picture of Cheyenne"
          width={400}
          height={400}
          className="hidden lg:block"
        />
        <div className="mask-square block lg:hidden">
          <Image
            src={portrait}
            alt="A picture of Cheyenne"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div ref={arrowRef} className="arrow-container">
        <FaArrowDown
          className="bounce scroll-icon"
          onClick={scrollToSection}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className="scroll-animate"
      >
        <Section>
          <div className="section-image-container">
            <Image
              src={puppies}
              alt="Puppy Pedometer app pixel art illustration"
              fill
              className="section-image"
            />
          </div>
          <div className="flex flex-col gap-4 lg:max-w-[60%]">
            <h3 className="section-title">What am I currently working on?</h3>
            <p className="section-body">
              I’m currently designing a mobile app called Puppy Pedometer,
              created to encourage users to get outside and stay active. Drawing
              inspiration from apps like Pikmin Bloom, Finch, and Pokémon Go,
              the app transforms daily steps into growth for a virtual puppy
              while unlocking accessories for customization. I’m in the process
              of wireframing and developing pixel art, with the goal of creating
              a cozy, peaceful, and playful aesthetic.{' '}
            </p>
          </div>
        </Section>
      </div>
    </div>
  )
}
