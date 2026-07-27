import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../i18n.jsx'

export default function ThankYou() {
  const { state } = useLocation()
  const name = state?.name
  const { t } = useLang()
  const { ui } = t

  const title = name ? ui.thankName.replace('{name}', name) : ui.thankNoName

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-mist px-6 py-20">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red/15">
          <svg viewBox="0 0 24 24" className="h-8 w-8 text-red-dark" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-ink">{title}</h1>
        <p className="mt-4 text-ink-soft">{ui.thankBody}</p>
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
