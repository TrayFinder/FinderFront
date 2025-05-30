export type Product = {
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

export const products: Product[] = [
  {
    id: 1,
    name: "Garten's Beer Battered Fish Fillets with salt paper",
    originalPrice: "R$29.99",
    price: "R$23.85",
    image: "/product.svg?height=200&width=200&text=Fish+Fillets",
    categoryId: "frozen",
    featured: true,
    brand: "Garten's",
    weight: "400 Grams",
    rating: 4.5,
    reviews: 32,
    items: 1,
    description: "Delicious beer battered fish fillets, perfect for a quick and tasty meal.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in velit sapiente odio, error dolore vero temporibus consequatur, nobis veniam odit dignissimos consectetur quae in perferendis doloribusdelis corporis, neque dicta, repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quia.",
    packagingInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in velit perferendis dolor! Quia vel consequuntur repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quia.",
  },
  {
    id: 2,
    name: "Café Premium Torrado e Moído 500g",
    originalPrice: "R$24.90",
    price: "R$19.90",
    image: "/product.svg?height=200&width=200&text=Coffee",
    categoryId: "groceries",
    featured: true,
    brand: "Café Altura",
    weight: "500 Grams",
    rating: 4.8,
    reviews: 56,
    items: 1,
    description: "Café premium de alta qualidade, torrado e moído na medida certa.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in velit sapiente odio, error dolore vero temporibus consequatur, nobis veniam odit dignissimos consectetur quae in perferendis doloribusdelis corporis, neque dicta, repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quia.",
    packagingInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in velit perferendis dolor! Quia vel consequuntur repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quia.",
  },
  {
    id: 3,
    name: "Azeite de Oliva Extra Virgem 500ml",
    originalPrice: "R$32.50",
    price: "R$27.90",
    image: "/product.svg?height=200&width=200&text=Olive+Oil",
    categoryId: "groceries",
    featured: true,
    brand: "Azeite Real",
    weight: "500 ml",
    rating: 4.7,
    reviews: 41,
    items: 1,
    description: "Azeite de oliva extra virgem de primeira prensagem a frio.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in velit sapiente odio, error dolore vero temporibus consequatur, nobis veniam odit dignissimos consectetur quae in perferendis doloribusdelis corporis, neque dicta, repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quia.",
    packagingInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in velit perferendis dolor! Quia vel consequuntur repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quia.",
  },
  {
    id: 4,
    name: "Chocolate ao Leite Premium 200g",
    originalPrice: "R$15.90",
    price: "R$12.50",
    image: "/product.svg?height=200&width=200&text=Chocolate",
    categoryId: "snacks",
    featured: true,
    brand: "Cacau Show",
    weight: "200 Grams",
    rating: 4.9,
    reviews: 87,
    items: 1,
    description: "Chocolate ao leite premium, feito com os melhores ingredientes.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in velit sapiente odio, error dolore vero temporibus consequatur, nobis veniam odit dignissimos consectetur quae in perferendis doloribusdelis corporis, neque dicta, repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quia.",
    packagingInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in velit perferendis dolor! Quia vel consequuntur repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quia.",
  },
  {
    id: 5,
    name: "Monster Energy Ultra 473ml",
    originalPrice: "R$8.99",
    price: "R$7.99",
    image: "/product.svg?height=200&width=200&text=Monster",
    categoryId: "beverages",
    featured: true,
    brand: "Monster",
    weight: "473 ml",
    rating: 4.7,
    reviews: 75,
    items: 1,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In iure minus error doloribus sapor natus?",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in velit sapiente odio, error dolore vero temporibus consequatur, nobis veniam odit dignissimos consectetur quae in perferendis doloribusdelis corporis, neque dicta, repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quia.",
    packagingInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in velit perferendis dolor! Quia vel consequuntur repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quia.",
  },
  {
    id: 6,
    name: "Queijo Parmesão Ralado 100g",
    originalPrice: "R$12.90",
    price: "R$9.99",
    image: "/product.svg?height=200&width=200&text=Cheese",
    categoryId: "dairy",
    brand: "Tirolez",
    weight: "100 Grams",
    rating: 4.6,
    reviews: 29,
    items: 1,
    description: "Queijo parmesão ralado fresco, perfeito para massas e saladas.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in velit sapiente odio, error dolore vero temporibus consequatur, nobis veniam odit dignissimos consectetur quae in perferendis doloribusdelis corporis, neque dicta, repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quia.",
    packagingInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in velit perferendis dolor! Quia vel consequuntur repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quia.",
  },
  {
    id: 7,
    name: "Biscoito Recheado Chocolate 140g",
    originalPrice: "R$5.50",
    price: "R$4.29",
    image: "/product.svg?height=200&width=200&text=Cookies",
    categoryId: "snacks",
    brand: "Nestlé",
    weight: "140 Grams",
    rating: 4.4,
    reviews: 63,
    items: 1,
    description: "Biscoito recheado com delicioso creme de chocolate.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in velit sapiente odio, error dolore vero temporibus consequatur, nobis veniam odit dignissimos consectetur quae in perferendis doloribusdelis corporis, neque dicta, repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quia.",
    packagingInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in velit perferendis dolor! Quia vel consequuntur repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quia.",
  },
  {
    id: 8,
    name: "Arroz Branco Premium 5kg",
    originalPrice: "R$29.90",
    price: "R$24.90",
    image: "/product.svg?height=200&width=200&text=Rice",
    categoryId: "groceries",
    brand: "Tio João",
    weight: "5 kg",
    rating: 4.8,
    reviews: 92,
    items: 1,
    description: "Arroz branco premium de grãos longos e finos.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in velit sapiente odio, error dolore vero temporibus consequatur, nobis veniam odit dignissimos consectetur quae in perferendis doloribusdelis corporis, neque dicta, repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quia.",
    packagingInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in velit perferendis dolor! Quia vel consequuntur repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quia.",
  },
  {
    id: 9,
    name: "Feijão Preto 1kg",
    originalPrice: "R$8.99",
    price: "R$6.99",
    image: "/product.svg?height=200&width=200&text=Beans",
    categoryId: "groceries",
    brand: "Camil",
    weight: "1 kg",
    rating: 4.5,
    reviews: 47,
    items: 1,
    description: "Feijão preto de alta qualidade, grãos selecionados.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in velit sapiente odio, error dolore vero temporibus consequatur, nobis veniam odit dignissimos consectetur quae in perferendis doloribusdelis corporis, neque dicta, repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quia.",
    packagingInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in velit perferendis dolor! Quia vel consequuntur repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quia.",
  },
  {
    id: 10,
    name: "Leite Integral 1L",
    originalPrice: "R$5.99",
    price: "R$4.79",
    image: "/product.svg?height=200&width=200&text=Milk",
    categoryId: "dairy",
    brand: "Itambé",
    weight: "1 L",
    rating: 4.6,
    reviews: 38,
    items: 1,
    description: "Leite integral UHT, rico em cálcio e vitaminas.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in velit sapiente odio, error dolore vero temporibus consequatur, nobis veniam odit dignissimos consectetur quae in perferendis doloribusdelis corporis, neque dicta, repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quia.",
    packagingInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in velit perferendis dolor! Quia vel consequuntur repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quia.",
  },
  {
    id: 11,
    name: "Detergente Líquido 500ml",
    originalPrice: "R$3.99",
    price: "R$2.99",
    image: "/product.svg?height=200&width=200&text=Detergent",
    categoryId: "household",
    brand: "Ypê",
    weight: "500 ml",
    rating: 4.3,
    reviews: 52,
    items: 1,
    description: "Detergente líquido concentrado, remove gordura com eficiência.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in velit sapiente odio, error dolore vero temporibus consequatur, nobis veniam odit dignissimos consectetur quae in perferendis doloribusdelis corporis, neque dicta, repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quia.",
    packagingInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in velit perferendis dolor! Quia vel consequuntur repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quia.",
  },
  {
    id: 12,
    name: "Papel Higiênico 12 rolos",
    originalPrice: "R$19.90",
    price: "R$16.90",
    image: "/product.svg?height=200&width=200&text=Toilet+Paper",
    categoryId: "household",
    brand: "Neve",
    weight: "12 rolos",
    rating: 4.7,
    reviews: 76,
    items: 1,
    description: "Papel higiênico macio e resistente, folha dupla.",
    longDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in velit sapiente odio, error dolore vero temporibus consequatur, nobis veniam odit dignissimos consectetur quae in perferendis doloribusdelis corporis, neque dicta, repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quia.",
    packagingInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in velit perferendis dolor! Quia vel consequuntur repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quia.",
  },
]

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
