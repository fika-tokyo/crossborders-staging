import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useLang } from './i18n.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Value from './pages/Value.jsx'
import Works from './pages/Works.jsx'
import WorkRegion from './pages/WorkRegion.jsx'
import Partnership from './pages/Partnership.jsx'
import Contact from './pages/Contact.jsx'
import ThankYou from './pages/ThankYou.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function PageTitle() {
  const { pathname } = useLocation()
  const { t } = useLang()
  useEffect(() => {
    const base = 'CROSSBORDERS'
    if (pathname === '/') {
      document.title = 'CROSSBORDERS — Cross Borders, Create Value.'
      return
    }
    const item = t.nav.find((n) => n.to !== '/' && pathname.startsWith(n.to))
    document.title = item ? `${item.label} | ${base}` : base
  }, [pathname, t])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <PageTitle />
      {/* Staging badge — rendered only when the build sets VITE_STAGING (preview repo). */}
      {import.meta.env.VITE_STAGING && (
        <div className="fixed bottom-4 left-4 z-[60] rounded-full bg-red px-4 py-1.5 text-xs font-bold text-white shadow-lg">
          プレビュー版(未公開)
        </div>
      )}
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/value" element={<Value />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:region" element={<WorkRegion />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
