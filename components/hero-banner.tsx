"use client"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCarousel } from "@/hooks/use-carousel"

// Define banner images
const bannerImages = [
  "/banner1.svg?height=400&width=1200&text=Banner+1",
  "/banner2.svg?height=400&width=1200&text=Banner+2",
  "/banner4.svg?height=400&width=1200&text=Banner+3",
  "/banner3.svg?height=400&width=1200&text=Special+Offer",
]

export default function HeroBanner() {
  const { currentIndex, next, prev, goToSlide, handleTouchStart, handleTouchMove, handleTouchEnd } = useCarousel({
    itemCount: bannerImages.length,
    autoPlay: true,
    interval: 5000,
  })

  return (
    <section
      className="relative overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Banner ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover object-center w-full"
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors z-20"
        aria-label="Previous banner"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors z-20"
        aria-label="Next banner"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              currentIndex === index ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
