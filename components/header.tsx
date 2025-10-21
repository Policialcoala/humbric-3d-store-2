"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neon-blue/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative">
            <svg width="40" height="40" viewBox="0 0 40 40" className="logo-glow">
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00ffff" />
                  <stop offset="50%" stopColor="#8000ff" />
                  <stop offset="100%" stopColor="#ff00ff" />
                </linearGradient>
              </defs>
              <path d="M8 32 L20 8 L32 32 Z" fill="url(#logoGradient)" opacity="0.8" />
              <path d="M12 28 L20 16 L28 28 Z" fill="url(#logoGradient)" opacity="0.6" />
              <path d="M16 24 L20 20 L24 24 Z" fill="url(#logoGradient)" />
              <circle cx="20" cy="12" r="2" fill="#00ffff" />
              <circle cx="14" cy="26" r="1.5" fill="#ff00ff" />
              <circle cx="26" cy="26" r="1.5" fill="#ff00ff" />
            </svg>
          </div>
          <span className="text-2xl font-bold gradient-neon">HUMBRIC</span>
        </Link>

        {/* Desktop Navigation - Centralizada */}
        <nav className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
          <Link href="/pecas" className="text-sm font-medium hover:text-neon-blue transition-colors">
            Peças 3D
          </Link>
          <Link href="/automacao" className="text-sm font-medium hover:text-neon-blue transition-colors">
            Automação
          </Link>
          <Link href="/sob-medida" className="text-sm font-medium hover:text-neon-blue transition-colors">
            Sob Medida
          </Link>
          <Link href="/sobre" className="text-sm font-medium hover:text-neon-blue transition-colors">
            Sobre
          </Link>
        </nav>

        {/* Soluções 3D - Canto direito */}
        <div className="hidden md:block">
          <span className="text-sm font-medium">
            <span className="text-neon-blue">Soluções</span> <span className="text-neon-blue">3D</span>
          </span>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="/pecas" className="text-lg font-medium hover:text-neon-blue transition-colors">
                  Peças 3D
                </Link>
                <Link href="/automacao" className="text-lg font-medium hover:text-neon-blue transition-colors">
                  Automação
                </Link>
                <Link href="/sob-medida" className="text-lg font-medium hover:text-neon-blue transition-colors">
                  Sob Medida
                </Link>
                <Link href="/sobre" className="text-lg font-medium hover:text-neon-blue transition-colors">
                  Sobre
                </Link>
                <div className="pt-4">
                  <span className="text-lg font-medium">
                    <span className="text-neon-blue">Soluções</span> <span className="text-neon-blue">3D</span>
                  </span>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
