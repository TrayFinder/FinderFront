"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, ChevronUp, ShoppingBag, Check } from "lucide-react"

export type Category = {
  id: string
  name: string
}

interface CategoryDropdownProps {
  categories: Category[]
  selectedCategories: string[]
  onCategoryChange: (categories: string[]) => void
}

export default function CategoryDropdown({ categories, selectedCategories, onCategoryChange }: CategoryDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleCategory = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      onCategoryChange(selectedCategories.filter((id) => id !== categoryId))
    } else {
      onCategoryChange([...selectedCategories, categoryId])
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Category icons mapping (you can replace these with actual icons)
  const categoryIcons: Record<string, string> = {
    groceries: "🥫",
    beverages: "🥤",
    frozen: "❄️",
    dairy: "🧀",
    snacks: "🍪",
    household: "🧹",
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-sm font-medium py-2 px-4 rounded-md bg-blue-50 hover:bg-blue-100 transition-colors border border-blue-100"
      >
        <ShoppingBag className="h-4 w-4 text-blue-500" />
        <span>Categorias</span>
        {isOpen ? <ChevronUp className="h-4 w-4 text-blue-500" /> : <ChevronDown className="h-4 w-4 text-blue-500" />}
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl z-50 py-3 border animate-fade-in overflow-hidden">
          <div className="px-4 py-2 border-b mb-2">
            <h3 className="font-medium text-gray-700">Escolha uma categoria</h3>
          </div>
          <div className="max-h-80 overflow-y-auto hide-scrollbar">
            {categories.map((category) => {
              const isSelected = selectedCategories.includes(category.id)
              return (
                <div
                  key={category.id}
                  className={`px-4 py-3 hover:bg-blue-50 transition-colors cursor-pointer ${
                    isSelected ? "bg-blue-50" : ""
                  }`}
                  onClick={() => toggleCategory(category.id)}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg
                      ${isSelected ? "bg-blue-500 text-white" : "bg-blue-100 text-blue-500"}`}
                    >
                      {categoryIcons[category.id] || "🛒"}
                    </div>
                    <div className="flex-1">
                      <span className={`text-sm font-medium ${isSelected ? "text-blue-600" : "text-gray-700"}`}>
                        {category.name}
                      </span>
                    </div>
                    {isSelected && (
                      <div className="flex-shrink-0">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
          {selectedCategories.length > 0 && (
            <div className="px-4 py-2 border-t mt-2">
              <button
                onClick={() => onCategoryChange([])}
                className="text-xs text-blue-500 hover:text-blue-700 font-medium"
              >
                Limpar seleção
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
