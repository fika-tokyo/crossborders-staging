import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useLang } from './i18n.jsx'
import { getArticle, articleField } from './insights/index.js'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Value from './pages/Value.jsx'
import Works from './pages/Works.jsx'
import WorkRegion from './pages/WorkRegion.jsx'
import Insights from './pages/Insights.jsx'
import InsightArticle from './pages/InsightArticle.jsx'
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
  const { t, lang } = useLang()
  useEffect(() => {
    const base = 'CROSSBORDERS'
    if (pathname === '/') {
      document.title = 'CROSSBORDERS — Cross Borders, Create Value.'
      return
    }
    // 記事詳細は記事タイトルを使う
    const m = pathname.match(/^\/insights\/([^/]+)/)
    if (m) {
      const a = getArticle(m[1])
      if (a) {
        document.title = `${articleField(a, 'title', lang)} | ${base}`
        return
      }
    }
    const item = t.nav.find((n) => n.to !== '/' && pathname.startsWith(n.to))
    document.title = item ? `${item.label} | ${base}` : base
  }, [pathname, t, lang])
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
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightArticle />} />
          {/* Partnership は Contact に統合。既に配布済みのリンクのためリダイレクトを残す */}
          <Route path="/partnership" element={<Navigate to="/contact" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
