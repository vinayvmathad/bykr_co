import HeroVideo from '../components/HeroVideo'
import ProductGrid from '../components/ProductGrid'
import { bikes } from '../data/bikes'

export default function Home() {
  return (
    <main>
      <HeroVideo />
      <section className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-4">Compatible Bikes</h2>
        <ProductGrid />
      </section>
    </main>
  )
}
