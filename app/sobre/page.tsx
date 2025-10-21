import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, MapPin, Target, Shield, Zap } from "lucide-react"
import Image from "next/image"
import FloatingWhatsApp from "@/components/floating-whatsapp"

export default function SobrePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-neon">Sobre a HUMBRIC</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Inovação em impressão 3D e automação, direto do coração do Brasil
          </p>
        </div>

        {/* Nossa Equipe Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Texto à esquerda */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-8 w-8 text-neon-blue" />
              <h2 className="text-3xl font-bold text-neon-blue">Nossa Equipe</h2>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                A HUMBRIC nasceu em <strong className="text-neon-pink">Cuiabá, Mato Grosso</strong>, com a missão de
                democratizar o acesso à tecnologia de impressão 3D e automação no Brasil. Fundada por uma equipe
                apaixonada por inovação e tecnologia, nossa empresa representa o espírito empreendedor mato-grossense.
              </p>

              <p className="leading-relaxed">
                Localizada estrategicamente na capital do estado, a HUMBRIC atende clientes de{" "}
                <strong className="text-neon-blue">todo o território nacional</strong>, levando soluções personalizadas
                e de alta qualidade para projetos dos mais diversos segmentos.
              </p>

              <p className="leading-relaxed">
                Nossa equipe é formada por{" "}
                <strong className="text-white">engenheiros, designers e técnicos especializados</strong> em manufatura
                aditiva e automação, todos comprometidos em transformar ideias em realidade através da tecnologia mais
                avançada disponível no mercado.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-neon-pink" />
                  <span>Cuiabá - MT</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-neon-blue" />
                  <span>Atendimento Nacional</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-neon-pink" />
                  <span>Qualidade Garantida</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-neon-blue" />
                  <span>Entrega Rápida</span>
                </div>
              </div>
            </div>
          </div>

          {/* Imagem à direita */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Equipe HUMBRIC"
                width={400}
                height={500}
                className="rounded-lg border border-neon-blue/30"
              />
              <div className="absolute -top-4 -left-4 w-full h-full border border-neon-pink/30 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>

        {/* Nossos Valores */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-neon">Nossos Valores</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-neon-blue/30 hover:border-neon-blue/50 transition-colors">
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-neon-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-neon-blue">Precisão</h3>
                <p className="text-muted-foreground">
                  Cada peça é produzida com tolerâncias milimétricas, garantindo o encaixe perfeito em seus projetos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-neon-pink/30 hover:border-neon-pink/50 transition-colors">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-neon-pink mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-neon-pink">Agilidade</h3>
                <p className="text-muted-foreground">
                  Processos otimizados e tecnologia de ponta para entregas rápidas sem comprometer a qualidade.
                </p>
              </CardContent>
            </Card>

            <Card className="border-neon-blue/30 hover:border-neon-blue/50 transition-colors">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-neon-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-neon-blue">Confiabilidade</h3>
                <p className="text-muted-foreground">
                  Materiais certificados e processos validados para garantir a durabilidade de cada produto.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12">
            <span className="gradient-neon">Nossos Números</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-neon-blue mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Peças Produzidas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-neon-pink mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-neon-blue mb-2">27</div>
              <div className="text-sm text-muted-foreground">Estados Atendidos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-neon-pink mb-2">99%</div>
              <div className="text-sm text-muted-foreground">Precisão Dimensional</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
