import { AnimatedBackground } from './components/layout/AnimatedBackground'
import { Hero, Features, Quote, CTA, Footer } from './components/sections'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      <main className="relative z-10">
        <Hero />
        <Features />
        <Quote />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}
