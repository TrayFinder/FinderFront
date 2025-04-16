"use client"

import type React from "react"

import { useState, useEffect, useCallback, useRef } from "react"

interface UseCarouselProps {
  itemCount: number
  itemsPerView?: number
  autoPlay?: boolean
  interval?: number
}

export function useCarousel({ itemCount, itemsPerView = 1, autoPlay = false, interval = 5000 }: UseCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const maxIndex = Math.max(0, itemCount - itemsPerView)
  const intervalRef = useRef<number | null>(null)

  const next = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
  }, [maxIndex])

  const prev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1))
  }, [maxIndex])

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex(Math.min(Math.max(0, index), maxIndex))
    },
    [maxIndex],
  )

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      next()
    }

    if (isRightSwipe) {
      prev()
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  // Auto play functionality
  useEffect(() => {
    if (!autoPlay) return

    intervalRef.current = setInterval(() => {
      next()
    }, interval)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [autoPlay, interval, next])

  return {
    currentIndex,
    next,
    prev,
    goToSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  }
}
