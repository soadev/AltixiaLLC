import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import { RootLayout } from './layouts/RootLayout'
import { Home } from './pages/Home'
import { LLCPage } from './pages/LLCPage'
import { MentionsLegales } from './pages/MentionsLegales'
import { PolitiqueConfidentialite } from './pages/PolitiqueConfidentialite'
import { ScrollToTop } from './components/ScrollToTop'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/llc" element={<LLCPage />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/confidentialite" element={<PolitiqueConfidentialite />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
