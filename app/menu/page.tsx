import { MenuHero } from '@/components/menu-hero'
import { MenuProducts } from '@/components/menu-products'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Menu - TeaTalk',
  description: 'Khám phá toàn bộ menu của TeaTalk với các loại trà trái cây, trà sữa, và các đặc sản khác.',
}

export default function MenuPage() {
  return (
    <main className="pt-16">
      <MenuHero />
      <MenuProducts />
      <Footer />
    </main>
  )
}
