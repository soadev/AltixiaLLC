import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { WhatsAppButton } from '../components/WhatsAppButton'

export function RootLayout() {
  return (
    <div className="min-h-screen font-sans text-dark">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <WhatsAppButton />
      {/* Footer will be added in Phase 4 */}
    </div>
  )
}
