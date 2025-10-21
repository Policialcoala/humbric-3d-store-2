import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-neon-blue/20 bg-muted/20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">              
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <svg width="40" height="40" viewBox="0 0 40 40" className="logo-glow">
                  <defs>
                    <linearGradient id="logoGradientFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00ffff" />
                      <stop offset="50%" stopColor="#8000ff" />
                      <stop offset="100%" stopColor="#ff00ff" />
                    </linearGradient>
                  </defs>
                  {/* Forma abstrata representando impressão 3D */}
                  <path d="M8 32 L20 8 L32 32 Z" fill="url(#logoGradientFooter)" opacity="0.8" />
                  <path d="M12 28 L20 16 L28 28 Z" fill="url(#logoGradientFooter)" opacity="0.6" />
                  <path d="M16 24 L20 20 L24 24 Z" fill="url(#logoGradientFooter)" />
                  <circle cx="20" cy="12" r="2" fill="#00ffff" />
                  <circle cx="14" cy="26" r="1.5" fill="#ff00ff" />
                  <circle cx="26" cy="26" r="1.5" fill="#ff00ff" />
                </svg>
              </div>
              <span className="text-2xl font-bold gradient-neon">HUMBRIC</span>
            </Link>
            <p className="text-muted-foreground">
              Especialistas em peças impressas em 3D. Qualidade profissional, precisão dimensional e entrega rápida para
              seus projetos.
            </p>
            <div className="flex space-x-4">
              <Link href="/" className="text-muted-foreground hover:text-neon-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="/" className="text-muted-foreground hover:text-neon-pink transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="/" className="text-muted-foreground hover:text-neon-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="/" className="text-muted-foreground hover:text-neon-pink transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-semibold text-neon-blue mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sob-medida" className="text-muted-foreground hover:text-white transition-colors">
                  Peças Sob Medida
                </Link>
              </li>
              <li>
                <Link href="/sob-medida" className="text-muted-foreground hover:text-white transition-colors">
                  Prototipagem
                </Link>
              </li>
              <li>
                <Link href="/automacao" className="text-muted-foreground hover:text-white transition-colors">
                  Automação Industrial
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/556593272126?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20consulta%20t%C3%A9cnica." className="text-muted-foreground hover:text-white transition-colors">
                  Consultoria Técnica
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/556593272126?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." className="text-muted-foreground hover:text-white transition-colors">
                  Orçamento Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="font-semibold text-neon-pink mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://wa.me/556593272126?text=Ol%C3%A1%2C%20gostaria%20de%20ajuda!" className="text-muted-foreground hover:text-white transition-colors">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/556593272126?text=Ol%C3%A1%2C%20gostaria%20de%20ajuda!" className="text-muted-foreground hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/556593272126?text=Ol%C3%A1%2C%20gostaria%20de%20ajuda!" className="text-muted-foreground hover:text-white transition-colors">
                  Garantia
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/556593272126?text=Ol%C3%A1%2C%20gostaria%20de%20ajuda!" className="text-muted-foreground hover:text-white transition-colors">
                  Devoluções
                </Link>
              </li>
              <li>
                <Link href="/" className="text-muted-foreground hover:text-white transition-colors">
                  Tutoriais
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-semibold text-neon-blue mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-muted-foreground hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-muted-foreground hover:text-white transition-colors">
                  Carreiras
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-muted-foreground hover:text-white transition-colors">
                  Imprensa
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-muted-foreground hover:text-white transition-colors">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-muted-foreground hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neon-blue/20 mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 HUMBRIC. Todos os direitos reservados. HUMBRIC 3D.
          </p>
        </div>
      </div>
    </footer>
  )
}
