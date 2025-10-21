"use client"

import { MessageCircle } from "lucide-react"

export default function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    // Número do WhatsApp da empresa (substitua pelo número real)
    const phoneNumber = "5565993272126" // Formato: código do país + DDD + número
    const message = "Olá! Gostaria de saber mais sobre os produtos da HUMBRIC."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="group flex items-center gap-3 bg-gradient-to-r from-neon-blue to-neon-pink text-black font-semibold px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="hidden sm:block text-sm">Clique aqui e fale conosco</span>
        <span className="sm:hidden text-xs">Fale conosco</span>
      </button>
    </div>
  )
}
