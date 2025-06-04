"use client"

import { useState } from "react"
import Image from "next/image"

export default function CouponSection() {
  const [isHovered, setIsHovered] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const handleCopyCode = () => {
    navigator.clipboard.writeText("FINDER10")
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCopyCode}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/70 to-yellow-700/40 z-10 flex flex-col justify-center items-center text-white p-8">
        <h3 className="text-3xl font-bold mb-2">CUPOM ESPECIAL</h3>
        <p className="text-xl mb-6 text-center max-w-lg">
          Ganhe 10% de DESCONTO na primeira compra, aproveite agora, com o CUPOM:
        </p>
        <div
          className={`border-2 border-dashed border-white px-8 py-3 rounded-md transition-all duration-300 ${
            isHovered ? "bg-white/10 scale-110" : ""
          }`}
        >
          <span className="text-2xl font-bold tracking-wider">FINDER10</span>
        </div>
        {isCopied && (
          <div className="absolute bottom-4 bg-green-600 text-white py-2 px-4 rounded-md animate-fade-in">
            Código copiado!
          </div>
        )}
      </div>
      <Image
        src="/cupom.svg?height=300&width=1200"
        alt="Cupom Especial"
        width={1200}
        height={300}
        className={`w-full h-64 object-cover transition-transform duration-500 ${
          isHovered ? "scale-105" : "scale-100"
        }`}
      />
    </div>
  )
}
