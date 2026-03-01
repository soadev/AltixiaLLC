import { Hero } from '../components/Hero'
import { TrustBar } from '../components/TrustBar'

export function Home() {
  return (
    <div>
      <section id="accueil">
        <Hero />
      </section>
      <TrustBar />
      {/* More sections added in Phase 3+ */}
    </div>
  )
}
