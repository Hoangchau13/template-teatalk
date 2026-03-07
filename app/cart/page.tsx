import { CartContent } from '@/components/cart-content'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Giỏ Hàng - TeaTalk',
  description: 'Xem giỏ hàng và đặt hàng tại TeaTalk',
}

export default function CartPage() {
  return (
    <main className="pt-16">
      <CartContent />
      <Footer />
    </main>
  )
}
