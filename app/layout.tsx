import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/lib/cart-context'
import { Navbar } from '@/components/navbar'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'TeaTalk - Cửa Hàng Trà & Cà Phê Chất Lượng',
  description: 'TeaTalk - Khám phá những trà trái cây tươi ngon, trà sữa hoa, nước ép tự nhiên và các đặc sản từ khắp nơi. Coffee & Tea chất lượng cao.',
  generator: 'v0.app',
  openGraph: {
    title: 'TeaTalk - Cửa Hàng Trà & Cà Phê Chất Lượng',
    description: 'Khám phá những thức uống tuyệt vời từ TeaTalk',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <CartProvider>
          <Navbar />
          {children}
          <Analytics />
        </CartProvider>
      </body>
    </html>
  )
}
