import { Card, CardContent } from "@/components/ui/card"
import { Printer, Palette, Wrench, Cpu, Lightbulb, Package } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    name: "Engrenagens",
    description: "Transmissões e mecanismos",
    icon: Cpu,
    color: "text-neon-blue",
    href: "#",
  },
  {
    name: "Suportes",
    description: "Fixação e estruturas",
    icon: Package,
    color: "text-neon-pink",
    href: "#",
  },
  {
    name: "Protótipos",
    description: "Desenvolvimento e testes",
    icon: Lightbulb,
    color: "text-neon-blue",
    href: "#",
  },
  {
    name: "Automação",
    description: "Componentes industriais",
    icon: Printer,
    color: "text-neon-pink",
    href: "#",
  },
  {
    name: "Ferramentas",
    description: "Gabaritos e dispositivos",
    icon: Wrench,
    color: "text-neon-blue",
    href: "#",
  },
  {
    name: "Personalizados",
    description: "Projetos sob medida",
    icon: Palette,
    color: "text-neon-pink",
    href: "#",
  },
]

export default function CategoriesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-muted/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            <span className="gradient-neon">Tipos de Peças</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontre a peça perfeita para seu projeto ou solicite uma personalizada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Link key={category.name} href={category.href}>
                <Card className="group hover:shadow-lg hover:shadow-neon-blue/20 transition-all duration-300 border-border/50 hover:border-neon-blue/50 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className={`p-3 rounded-full bg-muted/50 group-hover:bg-muted transition-colors`}>
                        <IconComponent className={`h-8 w-8 ${category.color} group-hover:animate-pulse`} />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-neon-blue transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
