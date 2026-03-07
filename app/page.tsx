import { HomeHero } from '@/components/home-hero'
import { FeaturedProducts } from '@/components/featured-products'
import { BrandStory } from '@/components/brand-story'
import { HomeCTA } from '@/components/home-cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="pt-16">
      <HomeHero />
      <FeaturedProducts />
      <BrandStory />
      <HomeCTA />
      <Footer />
    </main>
  )
}
