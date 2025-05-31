"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Header from "@/components/header";
import HeroBanner from "@/components/hero-banner";
import ProductCarousel from "@/components/product-carousel";
import PromoBanners from "@/components/promo-banners";
import CouponSection from "@/components/coupon-section";
import BrandsCarousel from "@/components/brands-carousel";
import Footer from "@/components/footer";

import { categories } from "@/data/products";
import { loadProducts } from "@/data/products";
import type { Product } from "@/data/products";

export default function Home() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") ?? "";

  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categoryParam ? [categoryParam] : []
  );
console.log("products",products)
  useEffect(() => {
    if (categoryParam) setSelectedCategories([categoryParam]);
  }, [categoryParam]);

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


  const filteredProducts =
    selectedCategories.length === 0
      ? products
      : products.filter((p) => selectedCategories.includes(p.categoryId));

  const featuredProducts = products.filter((p) => p.featured);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>
        {/* Hero Banner */}
        <HeroBanner />

        {/* Melhores Ofertas */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8 relative">
              Melhores Ofertas
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500" />
            </h2>
            <ProductCarousel products={featuredProducts} />
          </div>
        </section>

        {/* Banners Promocionais */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <PromoBanners />
          </div>
        </section>

        {/* Tá todo mundo comprando */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8 relative">
              Tá todo mundo comprando
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500" />
            </h2>
            <ProductCarousel products={filteredProducts} />

            {selectedCategories.length > 0 && (
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500 mb-2">
                  Filtrando por:{" "}
                  {selectedCategories
                    .map(
                      (id) =>
                        categories.find((cat) => cat.id === id)?.name ?? id
                    )
                    .join(", ")}
                </p>
                <button
                  onClick={() => setSelectedCategories([])}
                  className="text-sm text-blue-500 hover:underline"
                >
                  Limpar filtros
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Seção de Cupons */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <CouponSection />
          </div>
        </section>

        {/* Nossas Marcas */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8 relative">
              Nossas Marcas
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500" />
            </h2>
            <BrandsCarousel />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
