'use client'

import { useEffect, useRef } from 'react'

export const useScrollAnimation = (
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px'
) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('animate-in')
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin])

  return ref
}
