"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Star, Search, Eye, ArrowRight } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingWhatsApp from "@/components/floating-whatsapp"
import ProductModal from "@/components/product-modal"
import Link from "next/link"

const categories = [
  { id: "all", name: "Todos", count: 32 },
  { id: "letreiros", name: "Letreiros LED", count: 8 },
  { id: "nfc", name: "Tags NFC", count: 6 },
  { id: "irrigacao", name: "Irrigação", count: 5 },
  { id: "alarmes", name: "Alarmes", count: 4 },
  { id: "sensores", name: "Sensores", count: 5 },
  { id: "controle", name: "Controle Remoto", count: 4 },
]

const allProducts = [
  // Letreiros LED
  {
    id: 1,
    name: "Letreiro LED Personalizado 50cm",
    price: "R$ 189,90",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 87,
    category: "letreiros",
    popularity: 95,
    description: "Letreiro LED RGB programável via app",
  },
  {
    id: 2,
    name: "Placa LED para Estabelecimento",
    price: "R$ 299,90",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 124,
    category: "letreiros",
    popularity: 92,
    description: "Letreiro profissional com controle remoto",
  },
  {
    id: 3,
    name: "Display LED Matriz 32x8",
    price: "R$ 159,90",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 67,
    category: "letreiros",
    popularity: 88,
    description: "Painel de LED para mensagens dinâmicas",
  },
  {
    id: 4,
    name: "Letreiro Neon LED Flexível",
    price: "R$ 129,90",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 45,
    category: "letreiros",
    popularity: 85,
    description: "Fita LED neon para contornos e decoração",
  },

  // Tags NFC
  {
    id: 5,
    name: "Kit 10 Tags NFC Programáveis",
    price: "R$ 45,90",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 203,
    category: "nfc",
    popularity: 90,
    description: "Tags NFC para automação residencial",
  },
  {
    id: 6,
    name: "Tag NFC Adesiva Transparente",
    price: "R$ 8,90",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 156,
    category: "nfc",
    popularity: 87,
    description: "Tag NFC discreta para móveis e objetos",
  },
  {
    id: 7,
    name: "Chaveiro NFC Personalizado",
    price: "R$ 15,90",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 89,
    category: "nfc",
    popularity: 84,
    description: "Chaveiro com chip NFC integrado",
  },
  {
    id: 8,
    name: "Cartão NFC Business",
    price: "R$ 25,90",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 67,
    category: "nfc",
    popularity: 82,
    description: "Cartão de visita inteligente com NFC",
  },

  // Irrigação
  {
    id: 9,
    name: "Sistema Irrigação WiFi Completo",
    price: "R$ 299,90",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 134,
    category: "irrigacao",
    popularity: 94,
    description: "Sistema completo com sensor de umidade",
  },
  {
    id: 10,
    name: "Sensor de Umidade do Solo",
    price: "R$ 35,90",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 98,
    category: "irrigacao",
    popularity: 89,
    description: "Sensor para monitoramento automático",
  },
  {
    id: 11,
    name: "Válvula Solenoide 12V",
    price: "R$ 89,90",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 76,
    category: "irrigacao",
    popularity: 86,
    description: "Válvula para controle automático de água",
  },
  {
    id: 12,
    name: "Bomba d'Água Submersível",
    price: "R$ 159,90",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 54,
    category: "irrigacao",
    popularity: 83,
    description: "Bomba compacta para sistemas de irrigação",
  },

  // Alarmes
  {
    id: 13,
    name: "Alarme Residencial WiFi",
    price: "R$ 249,90",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 167,
    category: "alarmes",
    popularity: 93,
    description: "Sistema de alarme com notificação no celular",
  },
  {
    id: 14,
    name: "Sensor de Movimento PIR",
    price: "R$ 45,90",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 123,
    category: "alarmes",
    popularity: 88,
    description: "Detector de presença para automação",
  },
  {
    id: 15,
    name: "Sirene Inteligente 120dB",
    price: "R$ 89,90",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 89,
    category: "alarmes",
    popularity: 85,
    description: "Sirene com controle via smartphone",
  },
  {
    id: 16,
    name: "Sensor Magnético Porta/Janela",
    price: "R$ 25,90",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 145,
    category: "alarmes",
    popularity: 81,
    description: "Sensor para detecção de abertura",
  },

  // Sensores
  {
    id: 17,
    name: "Sensor de Temperatura WiFi",
    price: "R$ 65,90",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 98,
    category: "sensores",
    popularity: 87,
    description: "Monitoramento de temperatura remoto",
  },
  {
    id: 18,
    name: "Sensor de Qualidade do Ar",
    price: "R$ 129,90",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 67,
    category: "sensores",
    popularity: 84,
    description: "Monitor CO2, umidade e temperatura",
  },
  {
    id: 19,
    name: "Sensor de Luminosidade LDR",
    price: "R$ 18,90",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 134,
    category: "sensores",
    popularity: 82,
    description: "Sensor para automação de iluminação",
  },
  {
    id: 20,
    name: "Sensor Ultrassônico Distância",
    price: "R$ 35,90",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 89,
    category: "sensores",
    popularity: 79,
    description: "Medição de distância para projetos",
  },

  // Controle Remoto
  {
    id: 21,
    name: "Relé WiFi 4 Canais",
    price: "R$ 89,90",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 156,
    category: "controle",
    popularity: 91,
    description: "Controle remoto de dispositivos elétricos",
  },
  {
    id: 22,
    name: "Interruptor Inteligente",
    price: "R$ 45,90",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 123,
    category: "controle",
    popularity: 88,
    description: "Interruptor com controle por app",
  },
  {
    id: 23,
    name: "Tomada Inteligente WiFi",
    price: "R$ 35,90",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 189,
    category: "controle",
    popularity: 86,
    description: "Tomada com timer e controle remoto",
  },
  {
    id: 24,
    name: "Controle Remoto Universal",
    price: "R$ 69,90",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 98,
    category: "controle",
    popularity: 83,
    description: "Controle IR para múltiplos dispositivos",
  },
]

export default function AutomacaoPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProduct, setSelectedProduct] = useState<(typeof allProducts)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (product: (typeof allProducts)[0]) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const filteredProducts = useMemo(() => {
    let filtered = allProducts

    // Filtrar por categoria
    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    // Filtrar por busca
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Ordenar por popularidade
    return filtered.sort((a, b) => b.popularity - a.popularity)
  }, [selectedCategory, searchTerm])

  const getCategoryColor = (category: string) => {
    const colors = {
      letreiros: "bg-neon-blue",
      nfc: "bg-neon-pink",
      irrigacao: "bg-purple-500",
      alarmes: "bg-neon-blue",
      sensores: "bg-neon-pink",
      controle: "bg-purple-500",
    }
    return colors[category as keyof typeof colors] || "bg-neon-blue"
  }

  const getCategoryName = (category: string) => {
    const names = {
      letreiros: "Letreiros LED",
      nfc: "Tags NFC",
      irrigacao: "Irrigação",
      alarmes: "Alarmes",
      sensores: "Sensores",
      controle: "Controle Remoto",
    }
    return names[category as keyof typeof names] || category
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container py-8">
        {/* Header da página */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              <span className="gradient-neon">Produtos de Automação</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Soluções inteligentes para automatizar sua casa, escritório ou empresa
            </p>
          </div>
          <Link href="/pecas">
            <Button
              variant="outline"
              className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 flex items-center gap-2"
            >
              Ver Peças 3D
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Busca inteligente */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar produtos de automação..."
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
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.id
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
                <Card
                  key={product.id}
                  className="group hover:shadow-lg hover:shadow-neon-blue/20 transition-all duration-300 border-border/50 hover:border-neon-blue/50"
                >
                  <CardContent className="p-4">
                    <div className="relative mb-4">
                      <Image
                        src={product.image || "/placeholder.svg"}
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

                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>

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

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  Nenhum produto encontrado para "{searchTerm}" na categoria selecionada.
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
