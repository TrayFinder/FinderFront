'use client'
import { Product, ProductApi } from "@/data/products";
import api from "@/lib/axios";

export async function getProductId(
  id: number
) {
  const response = await api.get(`/products/${id}`, {
    params: {
      id,
    },
  });

  console.log(response.data);
  return response.data;
}

export async function loadProductId(id: number): Promise<Product[]> {
  const data = await getProductId(id);
const raw = data?.data ?? data;
  const items = Array.isArray(raw) ? raw : [raw];

  console.log("items", items);

  return items.map((p: ProductApi) => ({
    id: p.id,
    barcode: p.barcode,
    name: p.product_name,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    categoryId: p.category,
    subcategory: p.subcategory,
    filename: p.filename,
    price: `R$${p.sale_price}`,
    originalPrice: `R$${p.price}`,
    on_sale: p.on_sale,
    items: String(p.stock),
    featured: true,
    image: `/db-images/${p.filename}`,
    brand: "Garten's",
    weight: "400 Gramas",
    rating: 4.5,
    reviews: 32,
    longDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quod architecto hic, est fugiat natus dolore modi quo earum quasi id nemo repellendus quisquam distinctio sint perspiciatis ducimus, explicabo maxime. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quod architecto hic, est fugiat natus dolore modi quo earum quasi id nemo repellendus quisquam distinctio sint perspiciatis ducimus, explicabo maxime.",
    packagingInfo: "Informações de embalagem padrão...",
  }));
}
