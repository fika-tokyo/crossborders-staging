import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'

export default function NotFound() {
  const { t } = useLang()
  const { ui } = t

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 py-20">
      <div className="text-center">
        <p className="text-6xl font-bold text-red/30">404</p>
        <h1 className="mt-4 text-2xl font-bold text-ink">{ui.notFoundTitle}</h1>
        <p className="mt-2 text-ink-soft">{ui.notFoundBody}</p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-navy px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-dark"
        >
          {ui.backHome}
        </Link>
      </div>
    </section>
  )
}
