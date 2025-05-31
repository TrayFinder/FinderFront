"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Minus, Plus, ShoppingCart } from "lucide-react"
import { useCarousel } from "@/hooks/use-carousel"
import type { Product } from "@/data/products"
import StarRating from "@/components/star-rating"

interface ProductCarouselProps {
  products: Product[]
  title?: string
}

export default function ProductCarousel({ products, title }: ProductCarouselProps) {
  const [quantities, setQuantities] = useState<Record<number, number>>(
    products.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {}),
  )
  const containerRef = useRef<HTMLDivElement>(null)
  const [itemsPerView, setItemsPerView] = useState(5)

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 768) {
        setItemsPerView(2)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3)
      } else if (window.innerWidth < 1280) {
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
    itemCount: products.length,
    itemsPerView,
  })

  const updateQuantity = (id: number, amount: number) => {
    setQuantities((prev) => {
      const newQuantity = Math.max(1, (prev[id] || 1) + amount)
      return { ...prev, [id]: newQuantity }
    })
  }

  const handleBuyClick = () => {
    // Add to cart logic would go here
  }

  // Calculate the translation for the carousel
  const translateX = `-${currentIndex * (100 / itemsPerView)}%`

  // If no products, show a message
  if (products.length === 0) {
    return (
      <div className="bg-white rounded-md shadow-sm border p-8 text-center">
        <p className="text-gray-500">Nenhum produto encontrado para esta categoria.</p>
      </div>
    )
  }

  return (
    <div className="relative">
      {title && (
        <h2 className="text-2xl font-bold text-center mb-8 relative">
          {title}
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500"></span>
        </h2>
      )}

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
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[220px] flex-grow flex-shrink-0 px-2"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="bg-white rounded-md shadow-sm border p-4 flex flex-col h-full hover:shadow-md transition-shadow">
                <Link href={`/product/${product.id}`} className="flex justify-center mb-4">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={150}
                    height={150}
                    className="h-36 w-auto object-contain hover:scale-105 transition-transform cursor-pointer"
                  />
                </Link>
                <h3 className="text-sm font-medium line-clamp-2 mb-2">{product.name}</h3>

                {product.rating && (
                  <div className="mb-2">
                    <StarRating rating={product.rating} reviews={product.reviews} showReviews={false} />
                  </div>
                )}

                <div className="mt-auto">
                  <div className="text-xs text-gray-500 line-through mb-1">{product.originalPrice}</div>
                  <div className="text-lg font-bold text-green-600 mb-3">{product.price}</div>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center border rounded-md">
                      <button
                        onClick={() => updateQuantity(product.id, -1)}
                        className="p-1 text-gray-500 hover:text-gray-700"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-2 text-sm">{quantities[product.id] ? quantities[product.id] : 1}</span>
                      <button
                        onClick={() => updateQuantity(product.id, 1)}
                        className="p-1 text-gray-500 hover:text-gray-700"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={handleBuyClick}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white text-xs py-1.5 px-2 rounded flex items-center justify-center transition-colors"
                  >
                    <ShoppingCart className="h-3.5 w-3.5 mr-1" />
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {products.length > itemsPerView && (
        <>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-100 transition-colors"
            aria-label="Previous products"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-100 transition-colors"
            aria-label="Next products"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </>
      )}
    </div>
  )
}
