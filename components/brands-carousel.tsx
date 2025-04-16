"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCarousel } from "@/hooks/use-carousel"
import { brands } from "@/data/products"

export default function BrandsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [itemsPerView, setItemsPerView] = useState(5)

  // Determine items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2)
      } else if (window.innerWidth < 768) {
        setItemsPerView(3)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(4)
      } else {
        setItemsPerView(5)
      }
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)
    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [])

  const { currentIndex, next, prev, handleTouchStart, handleTouchMove, handleTouchEnd } = useCarousel({
    itemCount: brands.length,
    itemsPerView,
    autoPlay: true,
    interval: 3000,
  })

  // Calculate the translation for the carousel
  const translateX = `-${currentIndex * (100 / itemsPerView)}%`

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${translateX})` }}
        >
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex-grow flex-shrink-0 px-4 flex justify-center"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="bg-white rounded-full p-2 shadow-sm border flex items-center justify-center h-24 w-24 transition-transform hover:scale-105">
                <Image
                  src={brand.image || "/placeholder.svg"}
                  alt={brand.name}
                  width={80}
                  height={80}
                  className="h-16 w-16 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-100 transition-colors"
        aria-label="Previous brands"
      >
        <ChevronLeft className="h-5 w-5 text-gray-600" />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-100 transition-colors"
        aria-label="Next brands"
      >
        <ChevronRight className="h-5 w-5 text-gray-600" />
      </button>
    </div>
  )
}
