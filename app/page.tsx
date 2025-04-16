"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCarousel from "@/components/product-carousel"
import PromoBanners from "@/components/promo-banners"
import BrandsCarousel from "@/components/brands-carousel"
import CouponSection from "@/components/coupon-section"
import HeroBanner from "@/components/hero-banner"
import { categories, products } from "@/data/products"

export default function Home() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")

  const [selectedCategories, setSelectedCategories] = useState<string[]>(categoryParam ? [categoryParam] : [])

  // Update selected categories when URL param changes
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategories([categoryParam])
    }
  }, [categoryParam])

  // Filter products based on selected categories
  const filteredProducts =
    selectedCategories.length === 0
      ? products
      : products.filter((product) => selectedCategories.includes(product.categoryId))

  // Get featured products
  const featuredProducts = products.filter((product) => product.featured)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>
        {/* Hero Banner */}
        <HeroBanner />

        {/* Best Offers Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8 relative">
              Melhores Ofertas
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500"></span>
            </h2>
            <ProductCarousel products={featuredProducts} />
          </div>
        </section>

        {/* Promotional Banners */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <PromoBanners />
          </div>
        </section>

        {/* Everyone is Buying Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8 relative">
              Tá todo mundo comprando
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500"></span>
            </h2>
            <ProductCarousel products={filteredProducts} />

            {selectedCategories.length > 0 && (
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500 mb-2">
                  Filtrando por:{" "}
                  {selectedCategories.map((id) => categories.find((cat) => cat.id === id)?.name).join(", ")}
                </p>
                <button onClick={() => setSelectedCategories([])} className="text-sm text-blue-500 hover:underline">
                  Limpar filtros
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Coupon Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <CouponSection />
          </div>
        </section>

        {/* Our Brands Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8 relative">
              Nossas Marcas
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500"></span>
            </h2>
            <BrandsCarousel />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
