"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("featured-products")
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative overflow-hidden py-12 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-transparent to-neon-pink/10" />

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 ring-neon-blue/20 hover:ring-neon-blue/30 transition-all">
              🚀 Novidades em impressão 3D chegando!{" "}
              <button
                onClick={scrollToProducts}
                className="font-semibold text-neon-blue hover:text-neon-pink transition-colors"
              >
                Ver mais <ArrowRight className="inline h-4 w-4" />
              </button>
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            <span className="gradient-neon">HUMBRIC</span>
            <br />
            <span className="text-white">Impressão 3D</span>
            <br />
            <span className="text-neon-blue glowing-underline">e Automações</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Peças impressas em 3D sob medida para seus projetos. Protótipos, componentes industriais e soluções
            personalizadas com qualidade profissional e entrega rápida.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/pecas">
              <Button
                size="lg"
                className="bg-gradient-to-r from-neon-blue to-neon-pink text-black font-semibold hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 neon-border"
              >
                <Zap className="mr-2 h-5 w-5" />
                Ver Peças Disponíveis
              </Button>
            </Link>
            <Link href="/sob-medida">
              <Button variant="outline" size="lg" className="border-neon-pink text-neon-pink hover:bg-neon-pink/10">
                Crie Sua Peça!
              </Button>
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-blue">1000+</div>
              <div className="text-sm text-muted-foreground">Peças Produzidas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-pink">48h</div>
              <div className="text-sm text-muted-foreground">Produção Expressa</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-blue">99%</div>
              <div className="text-sm text-muted-foreground">Precisão Dimensional</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
