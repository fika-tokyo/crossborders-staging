import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LogoEmblem, Wordmark } from './Logo.jsx'
import { useLang } from '../i18n.jsx'

function LangSwitcher({ className = '' }) {
  const { lang, setLang, langs } = useLang()
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {langs.map((l, i) => (
        <span key={l.code} className="flex items-center">
          {i > 0 && <span className="mx-1 text-line">|</span>}
          <button
            onClick={() => setLang(l.code)}
            className={`text-sm font-medium transition-colors ${
              lang === l.code ? 'text-red-dark' : 'text-ink-soft hover:text-ink'
            }`}
            aria-pressed={lang === l.code}
          >
            {l.short}
          </button>
        </span>
      ))}
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t } = useLang()

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <LogoEmblem className="h-11 w-auto shrink-0" />
          <Wordmark className="h-[15px] w-auto" />
        </Link>

        {/* Desktop nav — omit the Contact text link (the button below covers it) */}
        <nav className="hidden items-center gap-8 md:flex">
          {t.nav.filter((item) => item.to !== '/contact').map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-ink' : 'text-ink-soft hover:text-ink'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <LangSwitcher className="border-l border-line pl-6" />
          <Link
            to="/contact"
            className="rounded-full bg-navy px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-dark"
          >
            {t.ui.navCta}
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          aria-label={t.ui.menu}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-navy transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-navy transition ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-navy transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-line bg-white px-6 py-4 md:hidden">
          {t.nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-2 text-base font-medium ${isActive ? 'text-ink' : 'text-ink-soft'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <LangSwitcher className="mt-3 border-t border-line pt-3" />
        </nav>
      )}
    </header>
  )
}
