import { useParams, Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import { CASES, REGIONS, TokyoRadial, UI, tr, regionName } from './Works.jsx'

export default function WorkRegion() {
  const { region } = useParams()
  const { t, lang } = useLang()
  const w = t.works
  const meta = REGIONS.find((r) => r.key === region)
  const cases = CASES.filter((c) => c.region === region)

  const badge = (type) => (type === 'sale' ? 'bg-red/10 text-red-dark' : 'bg-navy/10 text-navy')

  if (!meta) {
    return (
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="text-ink-soft">{w.notFound || '—'}</p>
        <Link to="/works" className="mt-4 inline-block font-semibold text-red-dark hover:underline">
          {tr(UI.back, lang)}
        </Link>
      </section>
    )
  }

  return (
    <>
      {/* Header */}
      <section className="bg-mist py-16">
        <div className="mx-auto max-w-5xl px-6">
          <Link to="/works" className="text-sm font-semibold text-red-dark hover:underline">
            {tr(UI.back, lang)}
          </Link>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink md:text-5xl">
            {regionName(meta, lang)}
          </h1>
          <p className="mt-3 text-ink-soft">
            {cases.length}{w.countUnit}
          </p>
        </div>
      </section>

      {/* Tokyo: 23区マップ */}
      {region === 'tokyo' && (
        <section className="mx-auto max-w-5xl px-6 pt-12">
          <div className="rounded-2xl border border-line bg-white p-6">
            <h2 className="text-lg font-bold text-ink">{w.tokyoTitle}</h2>
            <p className="mt-1 text-xs text-ink-soft">{w.tokyoSub}</p>
            <div className="mt-4">
              <TokyoRadial lang={lang} w={w} />
            </div>
          </div>
        </section>
      )}

      {/* 事例カード */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <div key={c.id} className="overflow-hidden rounded-2xl border border-line bg-white transition hover:border-red hover:shadow-lg">
              <div className="aspect-[4/3] overflow-hidden bg-cloud">
                <img src={c.img} alt={lang === 'en' ? c.en : c.ja} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold ${badge(c.type)}`}>
                  {c.type === 'sale' ? w.saleBadge : w.rentBadge}
                </span>
                <h3 className="mt-2 font-semibold text-ink">{lang === 'en' ? c.en : c.ja}</h3>
                <p className="mt-0.5 text-sm text-ink-soft">{c.note[lang] || c.note.ja}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/works" className="inline-block rounded-full border border-line px-6 py-2.5 text-sm font-semibold text-ink transition hover:border-red hover:text-red-dark">
            {tr(UI.back, lang)}
          </Link>
        </div>
      </section>
    </>
  )
}
