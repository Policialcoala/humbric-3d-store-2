"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ChevronLeft, ChevronRight, Plus, Minus } from "lucide-react"
import Image from "next/image"

interface Product {
  id: number
  name: string
  price: string
  originalPrice?: string
  images: string[]
  rating: number
  reviews: number
  category: string
  description: string
}

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

// Troque aqui se precisar (formato: DDI + DDD + número, sem sinais). 
// Ex: Brasil 55 + DDD 65 + número => "5565993272126"
const WHATSAPP_NUMBER = "5565993272126"

// parse "R$ 12,90" -> number 12.9 (considera formatação BR)
const parsePriceToNumber = (priceStr: string | number): number => {
  if (typeof priceStr === "number") return priceStr
  if (!priceStr || typeof priceStr !== "string") return NaN
  let cleaned = priceStr.replace(/[^\d.,-]/g, "")
  // remove pontos de milhares e troca vírgula decimal por ponto
  cleaned = cleaned.replace(/\./g, "")
  cleaned = cleaned.replace(/,/g, ".")
  const n = parseFloat(cleaned)
  return isNaN(n) ? NaN : n
}

const formatCurrencyBRL = (value: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value)

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)

  // reset quando o produto mudar / modal abrir
  useEffect(() => {
    if (product && isOpen) {
      setCurrentImageIndex(0)
      setQuantity(1)
    }
  }, [product, isOpen])

  if (!product) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      industrial: "bg-neon-blue",
      utilidades: "bg-neon-pink",
      brinquedos: "bg-purple-500",
      articulados: "bg-neon-blue",
      decoracao: "bg-neon-pink",
      "cultura-pop": "bg-purple-500",
      letreiros: "bg-neon-blue",
      nfc: "bg-neon-pink",
      irrigacao: "bg-purple-500",
      alarmes: "bg-neon-blue",
      sensores: "bg-neon-pink",
      controle: "bg-purple-500",
    }
    return colors[category as keyof typeof colors] || "bg-neon-blue"
  }

  // cálculo de preços
  const unitPrice = parsePriceToNumber(product.price)
  const totalPrice = !isNaN(unitPrice) ? unitPrice * Math.max(1, quantity) : NaN
  const unitPriceLabel = isNaN(unitPrice) ? product.price : formatCurrencyBRL(unitPrice)
  const totalPriceLabel = isNaN(totalPrice) ? product.price : formatCurrencyBRL(totalPrice)

  // montar e abrir link do WhatsApp
  const handleBuy = () => {
    const lines = [
      `Olá! 👋`,
      `Quero fazer um pedido:`,
      ``,
      `*Produto:* ${product.name}`,
      `*Quantidade:* ${quantity}`,
      `*Valor unitário:* ${unitPriceLabel}`,
      `*Valor total:* ${totalPriceLabel}`,
      ``,
      `*Endereço para entrega:*`,
      ``,
      `*Observações:*`,
      ``
    ]
    const message = lines.join("\n")
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    // abre nova aba (funciona no navegador / aplicações web)
    window.open(waLink, "_blank", "noopener,noreferrer")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-neon">{product.name}</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Carrossel de Imagens */}
          <div className="relative">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
              <Image
                src={product.images[currentImageIndex] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
              />

              {product.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}
            </div>

            {/* Indicadores de imagem */}
            {product.images.length > 1 && (
              <div className="flex justify-center mt-4 space-x-2">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? "bg-neon-blue" : "bg-muted-foreground"}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Informações do Produto */}
          <div className="space-y-6">
            <div>
              <Badge className={`${getCategoryColor(product.category)} text-black font-semibold mb-4`}>
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </Badge>

              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-neon-pink fill-neon-pink" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground ml-2">({product.reviews} avaliações)</span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-neon-blue">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-neon-blue">Descrição</h3>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Quantidade */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">Quantidade:</span>
              <div className="flex items-center border border-neon-blue/30 rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:text-neon-pink"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-4 py-2 text-center min-w-[3rem]">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:text-neon-pink"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Resumo de preço (opcional, mostra total) */}
            <div>
              <span className="text-sm text-muted-foreground">Valor unitário: <strong>{unitPriceLabel}</strong></span>
              <div className="mt-1 text-lg font-semibold">Total: {totalPriceLabel}</div>
            </div>

            {/* Botão de Compra -> abre WhatsApp */}
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-neon-blue to-neon-pink text-black font-semibold hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 text-lg py-6"
              onClick={handleBuy}
            >
              Comprar Produto
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
  