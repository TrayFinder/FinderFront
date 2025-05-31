"use client"

import type React from "react"

import Footer from "@/components/footer"
import Header from "@/components/header"
import ProductCarousel from "@/components/product-carousel"
import StarRating from "@/components/star-rating"
import { Product, loadProducts } from "@/data/products"
import { Minus, Plus, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"


export default function ProductPage() {
  const params = useParams()
  const productId = Number(params.id)
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
      async function fetchData() {
        try {
          const data = await loadProducts();
          setProducts(data);
        } catch (err) {
          console.error("Erro ao carregar produtos", err);
        }
      }
      fetchData();
    }, []);
  const product = products.find((p) => p.id === productId)

  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("description")

  // Image zoom functionality
  const [showZoom, setShowZoom] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })
  const imageContainerRef = useRef<HTMLDivElement>(null)

  const relatedProducts = products.filter((p) => p.categoryId === product?.categoryId && p.id !== productId).slice(0, 5)

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="bg-white rounded-md shadow-sm border p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
            <p className="mb-4">O produto que você está procurando não existe ou foi removido.</p>
            <Link href="/" className="text-blue-500 hover:underline">
              Voltar para a página inicial
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const updateQuantity = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount))
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageContainerRef.current) return

    const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect()

    // Calculate position as percentage
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100

    setZoomPosition({ x, y })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Product Details */}
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product Image with Zoom */}
              <div
                ref={imageContainerRef}
                className="flex justify-center items-center bg-white p-4 relative overflow-hidden cursor-zoom-in"
                onMouseEnter={() => setShowZoom(true)}
                onMouseLeave={() => setShowZoom(false)}
                onMouseMove={handleMouseMove}
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="max-h-[400px] w-auto object-contain relative z-10"
                />

                {showZoom && (
                  <div
                    className="absolute inset-0 z-20 pointer-events-none"
                    style={{
                      backgroundImage: `url(${product.image || "/placeholder.svg"})`,
                      backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "200%",
                    }}
                  />
                )}
              </div>

              {/* Product Info */}
              <div>
                <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                <p className="text-gray-600 mb-4">{product.description}</p>

                <div className="mb-4">
                  <StarRating rating={product.rating || 0} reviews={product.reviews} />
                </div>

                <div className="border-t border-b py-4 my-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Marca</p>
                    <p className="font-medium">{product.brand}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Categoria</p>
                    <p className="font-medium">
                      {product.categoryId && products.find((p) => p.categoryId === product.categoryId)?.categoryId}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Peso</p>
                    <p className="font-medium">{product.weight}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Itens</p>
                    <p className="font-medium">{product.items}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-gray-500 line-through">{product.originalPrice}</div>
                  <div className="text-3xl font-bold text-green-600">{product.price}</div>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center border rounded-md">
                    <button onClick={() => updateQuantity(-1)} className="p-2 text-gray-500 hover:text-gray-700">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 text-lg">{quantity}</span>
                    <button onClick={() => updateQuantity(1)} className="p-2 text-gray-500 hover:text-gray-700">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md flex items-center justify-center transition-colors">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="bg-white rounded-lg shadow-sm border mb-8">
            <div className="flex border-b">
              <button
                className={`py-3 px-6 font-medium text-sm ${
                  activeTab === "description"
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("description")}
              >
                Descrição
              </button>
              <button
                className={`py-3 px-6 font-medium text-sm ${
                  activeTab === "info"
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("info")}
              >
                Informações
              </button>
            </div>

            <div className="p-6">
              {activeTab === "description" && (
                <div>
                  <p className="text-gray-600 mb-6">{product.longDescription}</p>
                </div>
              )}

              {activeTab === "info" && (
                <div>
                  <h3 className="font-bold text-lg mb-4">Embalagem & Delivery</h3>
                  <p className="text-gray-600">{product.packagingInfo}</p>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-center mb-8 relative">
              Produtos Populares
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500"></span>
            </h2>
            <ProductCarousel products={relatedProducts} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
