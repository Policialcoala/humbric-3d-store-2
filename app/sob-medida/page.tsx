"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Lightbulb, Zap, Clock, Shield, Upload, X } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingWhatsApp from "@/components/floating-whatsapp"

export default function SobMedidaPage() {
  // troque se quiser outro número (DDI + DDD + número, sem sinais)
  const WHATSAPP_NUMBER = "5565993272126"

  const [name, setName] = useState("")
  const [contactPhone, setContactPhone] = useState("")
  const [quantity, setQuantity] = useState<number>(1)
  const [description, setDescription] = useState("")
  const [files, setFiles] = useState<File[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // montar mensagem
    const fileNames = files.length ? files.map((f) => f.name).join(", ") : "Nenhum arquivo anexado (anexe no chat)"
    const lines = [
      `Olá! 👋`,
      `Gostaria de solicitar uma peça sob medida:`,
      ``,
      `*Nome:* ${name || "-"}`,
      `*Telefone de contato:* ${contactPhone || "-"}`,
      `*Quantidade:* ${quantity}`,
      `*Descrição:*`,
      `${description || "-"}`,
      ``,
      `*Arquivos:* ${fileNames}`,
      ``,
      `Por favor, me informem prazo e orçamento.`,
      ``,
      `Obrigado!`
    ]

    const message = encodeURIComponent(lines.join("\n"))
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`

    // abre WhatsApp em nova aba
    window.open(waLink, "_blank", "noopener,noreferrer")

    // limpar formulário (opcional)
    setName("")
    setContactPhone("")
    setQuantity(1)
    setDescription("")
    setFiles([])
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFiles((prev) => [...prev, ...newFiles])
      // reset input value to permitir re-envio do mesmo arquivo se desejado
      e.currentTarget.value = ""
    }
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container py-12">
        {/* Título principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-neon">Transforme Sua Ideia</span>
            <br />
            <span className="text-white">Em Realidade</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conte-nos sobre seu projeto e criaremos a peça perfeita para você
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulário de descrição */}
          <div>
            <Card className="border-neon-blue/30">
              <CardHeader>
                <CardTitle className="text-2xl text-neon-blue flex items-center gap-2">
                  <Lightbulb className="h-6 w-6" />
                  Descreva Seu Projeto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Seu nome (opcional)
                      </label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: João Silva"
                        className="border-neon-blue/30 focus:border-neon-blue"
                      />
                    </div>

                    <div>
                      <label htmlFor="contactPhone" className="block text-sm font-medium mb-2">
                        Telefone para contato (opcional)
                      </label>
                      <Input
                        id="contactPhone"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        placeholder="Ex: (65) 9 9999-9999"
                        className="border-neon-blue/30 focus:border-neon-blue"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium mb-2">
                      Quantidade desejada
                    </label>
                    <div className="max-w-xs">
                      <Input
                        id="quantity"
                        type="number"
                        min={1}
                        value={quantity}
                        onChange={(e) => {
                          const v = parseInt(e.target.value || "1", 10)
                          setQuantity(Number.isNaN(v) ? 1 : Math.max(1, v))
                        }}
                        className="border-neon-blue/30 focus:border-neon-blue"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium mb-2">
                      Conte-nos todos os detalhes sobre a peça que você precisa:
                    </label>
                    <Textarea
                      id="description"
                      placeholder="Ex: Preciso de uma engrenagem com 24 dentes, diâmetro de 50mm, para usar em um projeto de robótica..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="min-h-[200px] border-neon-blue/30 focus:border-neon-blue resize-none"
                      required
                    />
                  </div>

                  {/* Upload de Arquivos */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Anexar arquivos (opcional)</label>
                    <div className="relative border-2 border-dashed border-neon-blue/30 rounded-lg p-6 text-center hover:border-neon-blue/50 transition-colors">
                      <Upload className="h-8 w-8 text-neon-blue mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">
                        Clique para selecionar arquivos ou arraste e solte aqui
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Suporta: JPG, PNG, PDF, DWG, STL, STEP (máx. 10MB cada). *Arquivos devem ser anexados manualmente no WhatsApp após abrir o chat.*
                      </p>
                      <input
                        type="file"
                        multiple
                        accept=".jpg,.jpeg,.png,.pdf,.dwg,.stl,.step,.stp"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                    </div>

                    {/* Lista de arquivos */}
                    {files.length > 0 && (
                      <div className="mt-4 space-y-2">
                        <p className="text-sm font-medium">Arquivos selecionados:</p>
                        {files.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-muted/20 p-2 rounded">
                            <span className="text-sm truncate">{file.name}</span>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 text-red-400 hover:text-red-300"
                              onClick={() => removeFile(index)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-neon-blue to-neon-pink text-black font-semibold hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300"
                  >
                    <Zap className="mr-2 h-5 w-5" />
                    Solicitar Orçamento Gratuito (via WhatsApp)
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Especificações e guia */}
          <div className="space-y-6">
            <Card className="border-neon-pink/30">
              <CardHeader>
                <CardTitle className="text-xl text-neon-pink">Como Funciona</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Badge className="bg-neon-blue text-black font-semibold">1</Badge>
                  <div>
                    <h4 className="font-semibold">Descreva sua ideia</h4>
                    <p className="text-sm text-muted-foreground">
                      Conte-nos sobre a peça que você precisa, suas dimensões, função e requisitos especiais.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Badge className="bg-neon-pink text-black font-semibold">2</Badge>
                  <div>
                    <h4 className="font-semibold">Análise técnica</h4>
                    <p className="text-sm text-muted-foreground">
                      Nossa equipe analisa sua solicitação e desenvolve o projeto 3D personalizado.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Badge className="bg-neon-blue text-black font-semibold">3</Badge>
                  <div>
                    <h4 className="font-semibold">Aprovação e produção</h4>
                    <p className="text-sm text-muted-foreground">
                      Você aprova o projeto e iniciamos a impressão com materiais de alta qualidade.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-neon-blue/30">
              <CardHeader>
                <CardTitle className="text-xl text-neon-blue">O Que Incluir na Descrição</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-neon-pink" />
                  <span className="text-sm">Dimensões aproximadas (comprimento, largura, altura)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-neon-pink" />
                  <span className="text-sm">Função da peça e onde será usada</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-neon-pink" />
                  <span className="text-sm">Material preferido (PLA, ABS, PETG, etc.)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-neon-pink" />
                  <span className="text-sm">Cor desejada</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-neon-pink" />
                  <span className="text-sm">Quantidade necessária</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-neon-pink" />
                  <span className="text-sm">Prazo desejado</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-neon-pink/30">
              <CardHeader>
                <CardTitle className="text-xl text-neon-pink">Nossos Diferenciais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-neon-blue" />
                  <span className="text-sm">Projeto 100% personalizado e exclusivo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-neon-blue" />
                  <span className="text-sm">Entrega em até 7 dias úteis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-neon-blue" />
                  <span className="text-sm">Garantia de qualidade e precisão</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-neon-blue" />
                  <span className="text-sm">Suporte técnico especializado</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
