import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

export function RootLayout() {
  return (
    <div className="min-h-screen font-sans text-dark">
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* WhatsApp button will be added in Plan 02-03 */}
      {/* Footer will be added in Phase 4 */}
    </div>
  )
}
