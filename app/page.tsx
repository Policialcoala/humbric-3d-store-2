import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturedProducts from "@/components/featured-products"
import CategoriesSection from "@/components/categories-section"
import Footer from "@/components/footer"
import FloatingWhatsApp from "@/components/floating-whatsapp"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <CategoriesSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
