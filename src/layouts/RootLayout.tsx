import { Outlet } from 'react-router-dom'

export function RootLayout() {
  return (
    <div className="min-h-screen font-sans text-dark">
      {/* Navbar will be added in Phase 2 */}
      <main>
        <Outlet />
      </main>
      {/* Footer will be added in Phase 4 */}
    </div>
  )
}
