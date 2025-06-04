"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, ShoppingCart, User, Camera, X, Upload, Loader2 } from "lucide-react"
import CategoryDropdown from "@/components/category-dropdown"
import { categories } from "@/data/products"
import { analyzeImage } from "@/app/actions/analyze-image"

export default function Header() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [aiResponse, setAiResponse] = useState<string | null>(null)
  const [searchResults, setSearchResults] = useState<any[] | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onload = () => {
        setImagePreview(reader.result as string)
        setAiResponse(null)
        setSearchResults(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const file = e.dataTransfer.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onload = () => {
        setImagePreview(reader.result as string)
        setAiResponse(null)
        setSearchResults(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSearchByImage = async () => {
    if (!imageFile) return

    setIsLoading(true)
    setAiResponse(null)
    setSearchResults(null)

    try {

      const formData = new FormData()
      formData.append("image", imageFile)

      const response = await analyzeImage(formData)

      if (response.success) {
        setAiResponse(response.analysis)
        setSearchResults(response.results)
      } else {
        setAiResponse(response.message || "Não foi possível analisar a imagem. Por favor, tente novamente.")
      }
    } catch (error) {
      console.error("Error analyzing image:", error)
      setAiResponse("Não foi possível analisar a imagem. Por favor, tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  const resetModal = () => {
    setImagePreview(null)
    setImageFile(null)
    setAiResponse(null)
    setSearchResults(null)
    setIsLoading(false)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    resetModal()
  }

  return (
    <>
      <div className="bg-blue-900 text-white text-center py-2 text-sm">
        FRETE GRÁTIS para compras acima de R$ 299. Aproveite!
      </div>

      <header className="bg-white py-4 px-4 md:px-8 flex items-center justify-between border-b">
        <div className="flex items-center space-x-6">

          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/Logo.svg?height=40&width=120&text=Tray+Finder"
                alt="Tray Finder Logo"
                width={120}
                height={40}
                className="h-10"
              />
            </Link>
          </div>

          <CategoryDropdown
            categories={categories}
            selectedCategories={selectedCategories}
            onCategoryChange={setSelectedCategories}
          />
        </div>

        <div className="flex-1 max-w-xl mx-4">
          <div className="relative flex h-10">
            <input
              type="text"
              placeholder="Buscar no site..."
              className="w-full h-full border rounded-l-md py-2 px-4 focus:outline-none"
            />
            <div className="flex h-full">
              <button
                className="h-full bg-gray-100 border-y border-r flex items-center justify-center px-3 hover:bg-gray-200 transition-colors"
                onClick={() => setIsModalOpen(true)}
                aria-label="Search by image"
              >
                <Camera className="h-5 w-5 text-gray-500" />
              </button>
              <button
                className="h-full bg-blue-500 text-white flex items-center justify-center px-3 rounded-r-md hover:bg-blue-600 transition-colors"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="flex items-center text-sm">
            <ShoppingCart className="h-5 w-5 mr-1" />
            <span className="hidden md:inline">Carrinho</span>
          </button>
          <button className="flex items-center text-sm">
            <User className="h-5 w-5 mr-1" />
            <span className="hidden md:inline">Conta</span>
          </button>
        </div>
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <X className="h-5 w-5" />
            </button>

            <h3 className="text-xl font-bold mb-4">Buscar por imagem</h3>
            <p className="text-sm text-gray-600 mb-4">
              Faça upload de uma imagem do produto que você está procurando e nossa IA irá encontrar produtos similares.
            </p>

            {!imagePreview ? (
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
                  ${isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600 mb-2">Arraste uma imagem ou clique para selecionar</p>
                <p className="text-sm text-gray-500">Suporta JPG, PNG e GIF</p>
                <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
              </div>
            ) : (
              <div>
                <div className="relative w-full h-48 mb-4 border rounded-lg overflow-hidden">
                  <Image src={imagePreview || "/placeholder.svg"} alt="Preview" fill className="object-contain" />
                </div>

                {isLoading ? (
                  <div className="text-center py-4">
                    <Loader2 className="h-8 w-8 mx-auto text-blue-500 animate-spin mb-2" />
                    <p className="text-gray-600">Analisando imagem com IA...</p>
                  </div>
                ) : aiResponse ? (
                  <div className="mb-6">
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4">
                      <h4 className="font-medium text-blue-800 mb-1">Análise da IA</h4>
                      <p className="text-sm text-gray-700">{aiResponse}</p>
                    </div>

                    {searchResults && searchResults.length > 0 && (
                      <div>
                        <h4 className="font-medium text-gray-800 mb-3">Produtos encontrados</h4>
                        <div className="grid grid-cols-3 gap-3">
                          {searchResults.map((product) => (
                            <Link
                              href={`/product/${product.id}`}
                              key={product.id}
                              className="border rounded-md p-2 hover:border-blue-300 transition-colors"
                              onClick={closeModal}
                            >
                              <div className="relative w-full h-20 mb-1">
                                <Image
                                  src={product.image || "/placeholder.svg"}
                                  alt={product.name}
                                  fill
                                  className="object-contain"
                                />
                              </div>
                              <p className="text-xs font-medium line-clamp-1">{product.name}</p>
                              <p className="text-xs text-green-600">{product.price}</p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex space-x-2 justify-center mt-4">
                      <button onClick={resetModal} className="px-4 py-2 border rounded-md text-sm">
                        Tentar outra imagem
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex space-x-2 justify-center">
                    <button onClick={() => resetModal()} className="px-4 py-2 border rounded-md text-sm">
                      Remover
                    </button>
                    <button
                      onClick={handleSearchByImage}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm flex items-center"
                    >
                      <Search className="h-4 w-4 mr-1" />
                      Analisar com IA
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
