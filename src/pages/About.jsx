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
  const { borders, journey, metrics, ui } = t

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
          <p className="mt-4 text-ink-soft">{journey.intro}</p>

          {/* Timeline */}
          <ol className="mt-10 space-y-5 border-l border-line pl-6">
            {journey.milestones.map((m) => (
              <li key={m.year} className="relative">
                <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-red ring-4 ring-mist" />
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-4">
                  <span className="shrink-0 text-lg font-bold text-red-dark">{m.year}</span>
                  <span className="text-ink-soft">{m.title}</span>
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
    </>
  )
}
