import { LanguageProvider } from './contexts/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <h1 className="text-3xl font-bold text-gray-900 p-8">Altixia LLC</h1>
      </div>
    </LanguageProvider>
  )
}

export default App
