import { Link } from 'react-router-dom'
import { Languages, Globe, Layers, Clock, Building2 } from 'lucide-react'
import { useLang } from '../i18n.jsx'

const borderIcons = {
  language: Languages,
  nation: Globe,
  expertise: Layers,
  time: Clock,
  industry: Building2,
}

export default function About() {
  const { t } = useLang()
  const { borders, journey, metrics, partnership, ui } = t

  return (
    <>
      {/* Brand philosophy */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-dark">{ui.aboutEyebrow1}</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink md:text-5xl">
            {ui.aboutTitle1}
          </h1>
          <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-ink-soft">{ui.aboutIntro1}</p>
        </div>
      </section>

      {/* Five borders */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-px overflow-hidden rounded-2xl border border-line">
          {borders.map((b) => {
            const Icon = borderIcons[b.key]
            return (
              <div key={b.key} className="flex gap-6 bg-white p-7 transition hover:bg-mist">
                {Icon && <Icon className="h-7 w-7 shrink-0 text-red" strokeWidth={1.75} />}
                <div>
                  <h3 className="text-lg font-semibold uppercase text-ink">{b.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{b.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Journey: history timeline + metrics + photo strip */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-dark">{ui.aboutEyebrow2}</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            {ui.aboutTitle2}
          </h2>
          {journey.subEn && (
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-ink-soft">{journey.subEn}</p>
          )}
          <p className="mt-4 text-ink-soft">{journey.intro}</p>

          {/* Timeline — horizontal on desktop */}
          <div className="relative mt-12 hidden md:block">
            <div className="absolute left-0 right-0 top-[42px] h-0.5 bg-line" />
            <ol className="relative flex">
              {journey.milestones.map((m) => (
                <li key={m.year} className="flex-1 px-2 text-center">
                  <p className={`text-lg font-bold ${m.hot ? 'text-red-dark' : 'text-navy'}`}>{m.year}</p>
                  <span className={`mx-auto mt-2 block h-3.5 w-3.5 rounded-full ring-4 ring-mist ${m.hot ? 'bg-red' : 'bg-navy'}`} />
                  <p className="mt-3 whitespace-pre-line text-xs leading-relaxed text-ink-soft">{m.title}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Timeline — vertical on mobile */}
          <ol className="mt-10 space-y-5 border-l border-line pl-6 md:hidden">
            {journey.milestones.map((m) => (
              <li key={m.year} className="relative">
                <span className={`absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-mist ${m.hot ? 'bg-red' : 'bg-navy'}`} />
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-4">
                  <span className={`shrink-0 text-lg font-bold ${m.hot ? 'text-red-dark' : 'text-navy'}`}>{m.year}</span>
                  <span className="whitespace-pre-line text-ink-soft">{m.title}</span>
                </div>
              </li>
            ))}
          </ol>

          {/* Metrics */}
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line md:grid-cols-4">
            {metrics.items.map((s) => (
              <div key={s.label} className="bg-white p-6">
                <p className="whitespace-pre-line text-2xl font-bold tracking-tight text-ink">{s.value}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-ink-soft">{metrics.note}</p>

          {/* Closing statement */}
          <p className="journey-closing mx-auto mt-14 max-w-3xl whitespace-pre-line text-center text-lg font-medium leading-relaxed text-ink md:text-xl">
            {journey.closing}
          </p>
        </div>
      </section>

      {/* Partnership — 三つの協働のかたち(クリックで Contact へ・主題預選) */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-dark">{ui.aboutEyebrow3}</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink md:text-4xl">{ui.partnershipTitle}</h2>
        <p className="mt-3 text-ink-soft">{ui.partnershipSubtitle}</p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {partnership.types.map((type) => (
            <div key={type.title} className="flex flex-col rounded-2xl border border-line bg-white p-8 transition hover:border-red hover:shadow-lg">
              <h3 className="text-xl font-bold text-ink">{type.title}</h3>
              {type.en && <p className="text-xs font-semibold uppercase tracking-wider text-red-dark">{type.en}</p>}
              <p className="mt-4 inline-block self-start rounded-full bg-cloud px-3 py-1 text-xs font-medium text-ink-soft">
                {ui.targetLabel}{type.target}
              </p>
              <div className="mt-5 space-y-4 text-sm leading-relaxed">
                <div>
                  <p className="font-semibold text-ink">{ui.serviceLabel}</p>
                  <p className="mt-1 text-ink-soft">{type.service}</p>
                </div>
                <div>
                  <p className="font-semibold text-ink">{ui.valueLabel}</p>
                  <p className="mt-1 text-ink-soft">{type.value}</p>
                </div>
              </div>
              <Link
                to="/contact"
                state={{ topic: type.title }}
                className="mt-6 self-start text-sm font-semibold text-red-dark hover:underline"
              >
                {ui.discussThis}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
