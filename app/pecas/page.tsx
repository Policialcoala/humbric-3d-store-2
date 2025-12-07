"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Star, Eye, Search, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductModal from "@/components/product-modal"
import FloatingWhatsApp from "@/components/floating-whatsapp"

const categories = [
  { id: "all", name: "Todos", count: 48 },
  { id: "chaveiro", name: "chaveiro", count: 12 },
  { id: "utilidades", name: "Utilidades", count: 15 },
  { id: "brinquedos", name: "Brinquedos", count: 8 },
  { id: "articulados", name: "Articulados", count: 6 },
  { id: "decoracao", name: "Decoração", count: 4 },
  { id: "pop", name: "Cultura", count: 3 },
]
// normaliza product.categories ou product.category (string ou "a;b") pra array
const toCategoryArray = (product: any): string[] => {
  if (!product) return []
  if (Array.isArray(product.categories)) return product.categories
  if (Array.isArray(product.category)) return product.category
  if (typeof product.category === "string") {
    return product.category.split(";").map(s => s.trim()).filter(Boolean)
  }
  return []
}


// --- updated: each product has up to 3 images in the `images` array
const allProducts = [
  // chaveiro
  {
    id: 1,
    name: "Chaveiro de pato",
    price: "R$ 7,00",
    images: [
      "/chaveiropato3D_1.jpg?height=300&width=300",
      "/chaveiropato3D_2.png?height=300&width=300",
      "/chaveiropato3D_3.png?height=300&width=300",
    ],
    rating: 4.9,
    reviews: 124,
    category: "chaveiro",
    "ularity": 95,
    description:
      "Engrenagem de alta precisão fabricada em PLA+ resistente. Ideal para projetos de automação e robótica.",
  },
  {
    id: 2,
    name: "Chaveiro de Polvo Articulado",
    price: "R$ 7,00",
    images: [
      "/chaveiropolvo2_3D_2.jpg?height=300&width=300",
      "/chaveiropolvo2_3D_2.png?height=300&width=300",
      "/chaveiropolvo2_3D_3.png?height=300&width=300",
    ],
    rating: 4.8,
    reviews: 89,
    category: "chaveiro",
    popularity: 92,
    description: "Suporte robusto para motores NEMA 17. Fabricado em ABS para máxima durabilidade.",
  },
  {
    id: 3,
    name: "Chaveiro de Polvo Articulado",
    price: "R$ 7,00",
    images: [
      "/chaveiropolvo3_3D_1.png?height=300&width=300",
      "/chaveiropolvo3_3D_2.png?height=300&width=300",
      "/chaveiropolvo3_3D_3.png?height=300&width=300",
    ],
    rating: 4.7,
    reviews: 67,
    category: "chaveiro",
    popularity: 88,
    description: "Acoplamento flexível para eixos de 5mm. Absorve vibrações e desalinhamentos.",
  },
  {
    id: 4,
    name: "Chaveiro de pokebola",
    price: "R$ 8,00",
    images: [
      "/chaveiropokebola1_3D.jpg?height=300&width=300",
      "/chaveiropokebola2_3D.png?height=300&width=300",
      "/chaveiropokebola3_3D.png?height=300&width=300",
    ],
    rating: 4.9,
    reviews: 156,
    category: "chaveiro",
    popularity: 85,
    description: "Guia linear de precisão para movimentos suaves e precisos em projetos CNC.",
  },

  // Utilidades (exemplos mantidos com 3 imagens)
  {
    id: 5,
    name: "Porta Caneta Moletom",
    price: "R$ 12,90",
    images: [
      "/portacaneta1_3D_1.png?height=300&width=300",
      "/portacaneta1_3D_2.png?height=300&width=300",
      "/portacaneta1_3D_3.png?height=300&width=300",
    ],
    rating: 4.6,
    reviews: 203,
    category: "utilidades",
    popularity: 90,
    description: "Organizador modular para cabos. Mantém sua mesa limpa e organizada.",
  },
  {
    id: 10,
    name: "Porta Chave F40",
    price: "R$ 34,90",
    images: [
      "/chave_f401.webp?height=300&width=300",
      "/chaveiroF40_2.png?height=300&width=300",
      "/chaveiroF40_3.png?height=300&width=300",
    ],
    rating: 4.6,
    reviews: 203,
    category: "utilidades",
    popularity: 90,
    description: "Organizador modular para cabos. Mantém sua mesa limpa e organizada.",
  },
  {
    id: 11,
    name: "Porta Chave Marshall",
    price: "R$ 34,90",
    images: [
      "/portachave1_1_3D.webp?height=300&width=300",
      "/portachave1_2_3D.png?height=300&width=300",
      "/portachave1_3_3D.png?height=300&width=300",
    ],
    rating: 4.6,
    reviews: 203,
    category: "utilidades",
    popularity: 90,
    description: "Organizador modular para cabos. Mantém sua mesa limpa e organizada.",
  },
  {
    id: 6,
    name: "Porta Caneta Dinossauro",
    price: "R$ 18,90",
    images: [
      "/portacaneta2_3D_1.png?height=300&width=300",
      "/portacaneta2_3D_2.png?height=300&width=300",
      "/portacaneta2_3D_3.png?height=300&width=300",
    ],
    rating: 4.8,
    reviews: 145,
    category: "utilidades",
    popularity: 87,
    description: "Suporte ajustável para smartphones. Compatível com todos os tamanhos.",
  },
  {
    id: 7,
    name: "Porta caneta Brush Pen",
    price: "R$ 18,90",
    images: [
      "/portacaneta3_3D_1.jpg?height=300&width=300",
      "/portacaneta3_3D_2.png?height=300&width=300",
      "/portacaneta3_3D_3.png?height=300&width=300",
    ],
    rating: 4.5,
    reviews: 98,
    category: "utilidades",
    popularity: 82,
    description: "Gancho resistente para pendurar objetos. Fácil instalação com adesivo.",
  },
  {
    id: 8,
    name: "Báu de Joias",
    price: "R$ 22,90",
    images: [
      "/baudejoia_3D_1.png?height=300&width=300",
      "/baudejoia_3D_2.png?height=300&width=300",
      "/baudejoia_3D_3.png?height=300&width=300",
    ],
    rating: 4.7,
    reviews: 76,
    category: "utilidades",
    popularity: 78,
    description: "Porta canetas modular. Combine múltiplas unidades para criar seu organizador ideal.",
  },

  // ... (para os demais produtos mantenha o mesmo padrão de 3 imagens)
  // Brinquedos
  {
    id: 9,
    name: "Dummy Articulado",
    price: "R$ 29,90",
    images: [
      "/dummy_3D_1.png?height=300&width=300",
      "/dummy_3D_2.png?height=300&width=300",
      "/dummy_3D_3.png?height=300&width=300",
    ],
    rating: 4.9,
    reviews: 89,
    category: "brinquedos",
    popularity: 86,
    description: "Cubo mágico 3x3 com cores personalizadas. Movimento suave e durável.",
  },
  // decoração
  {
    id: 12,
    name: "Vaso 3D",
    price: "R$ 12,90",
    images: [
      "/vaso1_3D_1.png?height=300&width=300",
      "/vaso1_3D_2.png?height=300&width=300",
      "/vaso1_3D_3.png?height=300&width=300",
    ],
    rating: 4.9,
    reviews: 89,
    category: "decoracao",
    popularity: 86,
    description: "Cubo mágico 3x3 com cores personalizadas. Movimento suave e durável.",
  },
  {
    id: 13,
    name: "Agentes Round 6",
    price: "R$ 29,90",
    images: [
      "/pop1_3D_1.png?height=300&width=300",
      "/pop1_3D_2.png?height=300&width=300",
      "/pop1_3D_3.png?height=300&width=300",
    ],
    rating: 4.9,
    reviews: 89,
    category: ["pop", "brinquedos"],
    popularity: 86,
    description: "Cubo mágico 3x3 com cores personalizadas. Movimento suave e durável.",
  },
  // ... rest of products keep the same pattern (omitted for brevity in this snippet)
]

type ProductType = typeof allProducts[number]

export default function PecasPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    let filtered = allProducts

    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) => toCategoryArray(product).includes(selectedCategory))
    }

    if (searchTerm) {
      filtered = filtered.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    return filtered.sort((a, b) => b.popularity - a.popularity)
  }, [selectedCategory, searchTerm])

  const getCategoryColor = (category: string) => {
    const colors = {
      chaveiro: "bg-neon-blue",
      utilidades: "bg-neon-pink",
      brinquedos: "bg-purple-500",
      articulados: "bg-neon-blue",
      decoracao: "bg-neon-pink",
      pop: "bg-purple-500",
    }
    return colors[category as keyof typeof colors] || "bg-neon-blue"
  }

  const getCategoryName = (category: string) => {
    const names = {
      chaveiro: "chaveiro",
      utilidades: "Utilidades",
      brinquedos: "Brinquedos",
      articulados: "Articulados",
      decoracao: "Decoração",
      pop: "Cultura Pop",
    }
    return names[category as keyof typeof names] || category
  }

  const openModal = (product: ProductType) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  // --- small inner component so we can use hooks per card
  function ProductCard({ product }: { product: ProductType }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const images = product.images && product.images.length > 0 ? product.images : ["/placeholder.svg"]

    return (
      <Card
        className="group hover:shadow-lg hover:shadow-neon-blue/20 transition-all duration-300 border-border/50 hover:border-neon-blue/50"
      >
        <CardContent className="p-4">
          <div className="relative mb-4">
            <Image
              src={images[currentIndex]}
              alt={`${product.name} imagem ${currentIndex + 1}`}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute top-2 left-2 flex gap-2">
              {toCategoryArray(product).slice(0, 2).map((cat) => (
                <Badge key={cat} className={`${getCategoryColor(cat)} text-black font-semibold`}>
                  {getCategoryName(cat)}
                </Badge>
              ))}
            </div>
          </div>

          {/* thumbnails (mostre até 3 miniaturas) */}
          <div className="flex items-center gap-2 mb-3">
            {images.slice(0, 3).map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ver imagem ${idx + 1}`}
                className={`w-14 h-14 rounded-md overflow-hidden border ${idx === currentIndex ? "border-neon-blue scale-105" : "border-border/30"
                  } transition-all`}
              >
                <Image src={img} alt={`thumb ${idx + 1}`} width={56} height={56} className="object-cover" />
              </button>
            ))}
          </div>

          <h3 className="font-semibold text-lg mb-2 group-hover:text-neon-blue transition-colors">
            {product.name}
          </h3>

          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-neon-pink fill-neon-pink" : "text-muted-foreground"
                    }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">({product.reviews})</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-bold text-neon-blue">{product.price}</span>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <Button
            className="w-full bg-gradient-to-r from-neon-blue to-neon-pink text-black font-semibold hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300"
            onClick={() => openModal(product)}
          >
            <Eye className="mr-2 h-4 w-4" />
            Ver Mais
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container py-8">
        {/* Header da página */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              <span className="gradient-neon">Catálogo de Peças 3D</span>
            </h1>
            <p className="text-lg text-muted-foreground">Explore nossa coleção completa de peças impressas em 3D</p>
          </div>
          <Link href="/automacao">
            <Button
              variant="outline"
              className="border-neon-pink text-neon-pink hover:bg-neon-pink/10 flex items-center gap-2"
            >
              Ver Produtos de Automação
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Busca inteligente */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar peças..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-neon-blue/30 focus:border-neon-blue"
            />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filtros laterais */}
          <aside className="w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="font-semibold text-lg mb-4 text-neon-blue">Categorias</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${selectedCategory === category.id
                        ? "bg-neon-blue/20 text-neon-blue border border-neon-blue/50"
                        : "hover:bg-muted/50 text-muted-foreground hover:text-white"
                      }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <span className="text-sm">({category.count})</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Grid de produtos */}
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-muted-foreground">{filteredProducts.length} produtos encontrados</p>
              <div className="text-sm text-muted-foreground">Ordenado por popularidade</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  Nenhuma peça encontrada para "{searchTerm}" na categoria selecionada.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
