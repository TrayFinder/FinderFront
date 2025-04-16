"use client"

import { useState } from "react"
import Image from "next/image"

export default function PromoBanners() {
  const [hoverLeft, setHoverLeft] = useState(false)
  const [hoverRight, setHoverRight] = useState(false)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        className="relative overflow-hidden rounded-lg shadow-md group"
        onMouseEnter={() => setHoverLeft(true)}
        onMouseLeave={() => setHoverLeft(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-900/40 z-10 flex flex-col justify-center items-center text-white p-8">
          <h3 className={`text-3xl font-bold mb-4 transition-transform duration-500 ${hoverLeft ? "scale-110" : ""}`}>
            ENTREGA GRÁTIS
          </h3>
          <button className="bg-white text-blue-900 px-6 py-2 rounded-md font-medium hover:bg-blue-50 transition-all duration-300 hover:shadow-lg">
            Saiba mais
          </button>
        </div>
        <Image
          src="/entrega-gratis.svg?height=300&width=600"
          alt="Entrega Grátis"
          width={600}
          height={300}
          className={`w-full h-64 object-cover transition-transform duration-500 ${hoverLeft ? "scale-110" : "scale-100"}`}
        />
      </div>

      <div
        className="relative overflow-hidden rounded-lg shadow-md group"
        onMouseEnter={() => setHoverRight(true)}
        onMouseLeave={() => setHoverRight(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-900/40 z-10 flex flex-col justify-center items-center text-white p-8">
          <h3 className={`text-3xl font-bold mb-2 transition-transform duration-500 ${hoverRight ? "scale-110" : ""}`}>
            COMBOS ESPECIAIS
          </h3>
          <p className="text-xl mb-4">por apenas R$ 69</p>
          <button className="bg-white text-blue-900 px-6 py-2 rounded-md font-medium hover:bg-blue-50 transition-all duration-300 hover:shadow-lg">
            Saiba mais
          </button>
        </div>
        <Image
          src="/combos.svg?height=300&width=600"
          alt="Combos Especiais"
          width={600}
          height={300}
          className={`w-full h-64 object-cover transition-transform duration-500 ${hoverRight ? "scale-110" : "scale-100"}`}
        />
      </div>
    </div>
  )
}
