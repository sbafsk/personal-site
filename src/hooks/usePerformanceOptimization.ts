'use client'

import { useEffect, useRef } from 'react'

export function usePerformanceOptimization() {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleAnimationStart = () => {
      element.style.willChange = 'transform, opacity'
    }

    const handleAnimationEnd = () => {
      element.style.willChange = 'auto'
    }

    const handleMouseEnter = () => {
      element.style.willChange = 'transform'
    }

    const handleMouseLeave = () => {
      element.style.willChange = 'auto'
    }

    // Add event listeners
    element.addEventListener('animationstart', handleAnimationStart)
    element.addEventListener('animationend', handleAnimationEnd)
    element.addEventListener('transitionend', handleAnimationEnd)
    element.addEventListener('mouseenter', handleMouseEnter)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('animationstart', handleAnimationStart)
      element.removeEventListener('animationend', handleAnimationEnd)
      element.removeEventListener('transitionend', handleAnimationEnd)
      element.removeEventListener('mouseenter', handleMouseEnter)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return elementRef
}

export function useIntersectionObserver(callback: (entries: IntersectionObserverEntry[]) => void, options?: IntersectionObserverInit) {
  const targetRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = targetRef.current
    if (!element) return

    const observer = new IntersectionObserver(callback, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options,
    })

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [callback, options])

  return targetRef
}