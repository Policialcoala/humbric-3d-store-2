"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ProductModal from "./product-modal"

const featuredProducts = [
  {
    id: 1,
    name: "Suporte para Fones de Ouvido Tsunami",
    price: "R$ 45,00",
    originalPrice: "R$ 65,00",
    images: ["/suporte_tsunami1.webp?height=300&width=300", "/suporte_tsunami2.webp?height=300&width=300"],
    rating: 4.9,
    reviews: 87,
    category: "utilidade",
    description:
      "Engrenagens de alta precisão fabricadas em PLA+ resistente. Ideais para projetos de automação e robótica. Disponíveis em diversas configurações de dentes e módulos.",
  },
  {
    id: 2,
    name: "Suporte para fone",
    price: "R$ 28,90",
    originalPrice: "R$ 35,90",
    images: ["/suporte_fone1.webp?height=300&width=300", "/suporte_fone2.webp?height=300&width=300"],
    rating: 4.8,
    reviews: 124,
    category: "utilidades",
    description:
      "Suportes robustos para motores e sensores. Fabricados em ABS para máxima durabilidade. Compatíveis com perfis de alumínio padrão.",
  },
  {
    id: 3,
    name: "Suporte para controle Caveira",
    price: "R$ 89,90",
    originalPrice: null,
    images: ["/suporte_fone_caveira1.webp?height=300&width=300", "/suporte_fone_caveira2.webp?height=300&width=300"],
    rating: 4.9,
    reviews: 56,
    category: "utilidade",
    description:
      "Protótipos funcionais para testes e validação de conceitos. Impressão em alta resolução com acabamento profissional.",
  },
  {
    id: 4,
    name: "F40 Porta-chaves",
    price: "R$ 35,90",
    originalPrice: "R$ 49,90",
    images: ["/chave_f401.webp?height=300&width=300", "/chave_f402.webp?height=300&width=300"],
    rating: 4.7,
    reviews: 203,
    category: "articulados",
    description:
      "Peças de reposição sob medida para equipamentos diversos. Garantia de encaixe perfeito e durabilidade superior.",
  },
]

export default function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<(typeof featuredProducts)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getCategoryColor = (category: string) => {
    const colors = {
      industrial: "bg-neon-blue",
      utilidades: "bg-neon-pink",
      brinquedos: "bg-purple-500",
      articulados: "bg-neon-blue",
      decoracao: "bg-neon-pink",
      "cultura-pop": "bg-purple-500",
    }
    return colors[category as keyof typeof colors] || "bg-neon-blue"
  }

  const getCategoryName = (category: string) => {
    const names = {
      industrial: "Industrial",
      utilidades: "Utilidades",
      brinquedos: "Brinquedos",
      articulados: "Articulados",
      decoracao: "Decoração",
      "cultura-pop": "Cultura Pop",
    }
    return names[category as keyof typeof names] || category
  }

  const openModal = (product: (typeof featuredProducts)[0]) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  return (
    <section id="featured-products" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            <span className="gradient-neon">Peças em Destaque</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Peças impressas em 3D com alta precisão e acabamento profissional para seus projetos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg hover:shadow-neon-blue/20 transition-all duration-300 border-border/50 hover:border-neon-blue/50"
            >
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <Badge
                    className={`absolute top-2 left-2 ${getCategoryColor(product.category)} text-black font-semibold`}
                  >
                    {getCategoryName(product.category)}
                  </Badge>
                </div>

                <h3 className="font-semibold text-lg mb-2 group-hover:text-neon-blue transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "text-neon-pink fill-neon-pink" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">({product.reviews})</span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold text-neon-blue">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  )}
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
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/pecas">
            <Button variant="outline" size="lg" className="border-neon-pink text-neon-pink hover:bg-neon-pink/10">
              Ver Todos os Produtos
            </Button>
          </Link>
        </div>
      </div>

      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
