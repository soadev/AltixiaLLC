import { Hero } from '../components/Hero'
import { TrustBar } from '../components/TrustBar'
import { Problem } from '../components/Problem'
import { Services } from '../components/Services'
import { PackLLC } from '../components/PackLLC'
import { WhyAltixia } from '../components/WhyAltixia'
import { HowItWorks } from '../components/HowItWorks'
import { Stats } from '../components/Stats'
import { Objections } from '../components/Objections'
import { Testimonials } from '../components/Testimonials'

export function Home() {
  return (
    <div>
      <section id="accueil">
        <Hero />
      </section>
      <TrustBar />
      <section id="probleme" className="bg-white">
        <Problem />
      </section>
      <section id="services" className="bg-[#F8F9FA]">
        <Services />
      </section>
      <section id="pack" className="bg-[#EBF3FA]">
        <PackLLC />
      </section>
      <section id="pourquoi" className="bg-white">
        <WhyAltixia />
      </section>
      <section id="comment" className="bg-[#F8F9FA]">
        <HowItWorks />
      </section>
      <section className="bg-[#333A49]">
        <Stats />
      </section>
      <section id="objections" className="bg-white">
        <Objections />
      </section>
      <section className="bg-white">
        <Testimonials />
      </section>
    </div>
  )
}
