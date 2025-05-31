'use client'
import api from "@/lib/axios";
import image from "next/image";

export type Product = {
  id: number;
  barcode: string;
  name: string;
  description: string;
  categoryId: string;
  subcategory: string;
  filename: string;
  price: string; 
  originalPrice: string; 
  on_sale: boolean;
  items: string;
  featured: boolean;
  image: string; 
  brand: string;
  weight: string;
  rating: number; 
  reviews: number;
  longDescription: string;
  packagingInfo: string;

};
export type ProductApi = {
  id: number;
  barcode: string;
  product_name: string;
  description: string | null;
  category: string;
  subcategory: string;
  filename: string;
  price: number;
  sale_price: number;
  sale_percentage: number;
  on_sale: boolean;
  stock: number;
  embeddings: string | null;
  created_at: string;
  updated_at: string;
};


export const categories = [
  { id: "groceries", name: "Mercearia" },
  { id: "beverages", name: "Bebidas" },
  { id: "frozen", name: "Congelados" },
  { id: "dairy", name: "Laticínios" },
  { id: "snacks", name: "Snacks" },
  { id: "household", name: "Casa e Limpeza" },
]
export async function getProducts(page_number = 1, page_size = 50) {
  const response = await api.get("/products/sale", {
    params: {
      page_number,
      page_size,
    },
  });
  console.log(response.data);
  return response.data;
}

export async function loadProducts(): Promise<Product[]> {
  const data = await getProducts(); 

  const items = data?.data ?? data;

  return items.map((p: ProductApi) => ({
    id:              p.id,
    barcode:         p.barcode,
    name:            p.product_name,
    description:     "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    categoryId:        p.category,
    subcategory:     p.subcategory,
    filename:        p.filename,
    price:           `R$${p.sale_price}`,
    originalPrice:   `R$${p.price}`,
    on_sale:         p.on_sale,
    items:           p.stock,
    featured:        true,
    image:            `/db-images/${p.filename}`,
    brand:           "Garten's",
    weight:          "400 Gramas",
    rating:          4.5,
    reviews:         32,
    longDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quod architecto hic, est fugiat natus dolore modi quo earum quasi id nemo repellendus quisquam distinctio sint perspiciatis ducimus, explicabo maxime.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quod architecto hic, est fugiat natus dolore modi quo earum quasi id nemo repellendus quisquam distinctio sint perspiciatis ducimus, explicabo maxime.",
    packagingInfo:   "Informações de embalagem padrão..."
  }));
}

export const brands = [
  { id: 1, name: "Coca-Cola", image: "/coca.svg?height=100&width=100&text=Coca-Cola" },
  { id: 2, name: "Nestlé", image: "/coca.svg?height=100&width=100&text=Nestlé" },
  { id: 3, name: "Unilever", image: "/coca.svg?height=100&width=100&text=Unilever" },
  { id: 4, name: "Heinz", image: "/coca.svg?height=100&width=100&text=Heinz" },
  { id: 5, name: "Kellogg's", image: "/coca.svg?height=100&width=100&text=Kellogg's" },
  { id: 6, name: "Danone", image: "/coca.svg?height=100&width=100&text=Danone" },
  { id: 7, name: "Pepsi", image: "/coca.svg?height=100&width=100&text=Pepsi" },
  { id: 8, name: "Kraft", image: "/coca.svg?height=100&width=100&text=Kraft" },
]
