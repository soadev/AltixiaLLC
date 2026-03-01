import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { WhatsAppButton } from '../components/WhatsAppButton'

export function RootLayout() {
  return (
    <div className="min-h-screen font-sans text-dark">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
