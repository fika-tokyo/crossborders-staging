import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'

function FaqGroup({ group }) {
  const [open, setOpen] = useState(null)
  return (
    <div>
      <h3 className="text-lg font-semibold text-ink">{group.who}</h3>
      <div className="mt-4 flex flex-col gap-3">
        {group.items.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl border border-line bg-white transition hover:border-red"
          >
            <button
              className="flex w-full items-start justify-between gap-4 p-5 text-left"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span className="font-medium leading-relaxed text-ink">
                <span className="mr-2 font-bold text-red-dark">Q.</span>
                {item.q}
              </span>
              <span
                className={`mt-0.5 shrink-0 text-lg font-bold text-red-dark transition-transform ${
                  open === i ? 'rotate-45' : ''
                }`}
                aria-hidden="true"
              >
                ＋
              </span>
            </button>
            {open === i && (
              <p className="border-t border-line px-5 py-4 text-sm leading-relaxed text-ink-soft">
                {item.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

const VALUE_TOC = [
  { id: 'flow',      ja: '価値創造の流れ', zh: '价值创造流程', tw: '價值創造流程', en: 'How we create value' },
  { id: 'matrix',    ja: '私たちの差別化', zh: '我们的差别化', tw: '我們的差別化', en: 'How we differ' },
  { id: 'strengths', ja: '四つの強み',     zh: '四大强项',     tw: '四大強項',     en: 'Our strengths' },
  { id: 'faq',       ja: 'よくあるご質問', zh: '常见问题',     tw: '常見問題',     en: 'FAQ' },
]

export default function Value() {
  const { t, lang } = useLang()
  const { valueChain, matrix, strengths, faq, contactTopics, ui } = t
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <>
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-dark">{ui.valueEyebrow}</p>
          <h1 className="value-title mt-4 text-4xl font-bold tracking-tight text-ink md:text-5xl">
            {ui.valueTitle}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">{ui.valueIntro}</p>
        </div>
      </section>

      {/* Sticky table of contents */}
      <nav className="sticky top-16 z-30 border-y border-line bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 py-3.5">
          {VALUE_TOC.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="text-sm font-semibold text-ink-soft transition hover:text-red-dark"
            >
              {s[lang] || s.ja}
            </button>
          ))}
        </div>
      </nav>

      {/* Value chain — vertical flow with arrows */}
      <section id="flow" className="mx-auto max-w-5xl px-6 py-20 scroll-mt-32">
        <div className="flex flex-col">
          {valueChain.map((v, i) => (
            <Fragment key={v.en}>
              <div className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-7 transition hover:border-red hover:shadow-lg sm:flex-row sm:items-center">
                <div className="flex items-center gap-4 sm:w-52 sm:shrink-0">
                  <div>
                    <p className="text-sm font-bold tracking-widest text-red-dark">{v.en}</p>
                    {v.cn && <p className="text-xs text-ink-soft">{v.cn}</p>}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-ink">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{v.body}</p>
                </div>
              </div>
              {i < valueChain.length - 1 && (
                <div className="flex justify-center py-2">
                  <span className="text-2xl font-bold text-red/60">↓</span>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </section>

      {/* Differentiation matrix */}
      <section id="matrix" className="bg-mist py-20 scroll-mt-32">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">{ui.matrixTitle}</h2>
          <p className="mt-3 text-ink-soft">{ui.matrixSubtitle}</p>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-line bg-white">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-line">
                  <th className="p-4 text-left font-semibold text-ink">{ui.matrixCapHeader}</th>
                  {matrix.columns.map((c) => (
                    <th
                      key={c}
                      className={`p-4 text-center font-semibold ${
                        c === 'CROSSBORDERS' ? 'bg-navy text-white' : 'text-ink-soft'
                      }`}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrix.rows.map((r) => (
                  <tr key={r.cap} className="border-b border-line last:border-0">
                    <td className="p-4 font-medium text-ink">{r.cap}</td>
                    {r.vals.map((val, i) => (
                      <td
                        key={i}
                        className={`p-4 text-center text-lg ${
                          matrix.columns[i] === 'CROSSBORDERS'
                            ? 'bg-red/5 font-bold text-red-dark'
                            : 'text-ink-soft'
                        }`}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-ink-soft">{matrix.legend}</p>
        </div>
      </section>

      {/* Four core strengths */}
      <section id="strengths" className="mx-auto max-w-5xl px-6 py-20 scroll-mt-32">
        <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">{ui.strengthsTitle}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {strengths.map((s) => (
            <div key={s.n} className="rounded-2xl border border-line bg-white p-8 transition hover:border-red hover:shadow-lg">
              <span className="text-2xl font-bold text-red/40">{s.n}</span>
              <h3 className="mt-2 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="text-xs font-medium uppercase tracking-wider text-red-dark">{s.en}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ — real questions from each client type, answered with our actual practice */}
      <section id="faq" className="bg-mist py-20 scroll-mt-32">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-dark">{faq.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink md:text-4xl">{faq.title}</h2>
          <p className="mt-3 text-ink-soft">{faq.subtitle}</p>

          <div className="mt-10 flex flex-col gap-12">
            {faq.groups.map((g) => (
              <FaqGroup key={g.who} group={g} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="text-center">
          <Link
            to="/contact"
            state={{ topic: contactTopics[3] }}
            className="inline-block rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-red-dark"
          >
            {ui.valueCtaButton}
          </Link>
        </div>
      </section>
    </>
  )
}
