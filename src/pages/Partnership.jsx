import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'

export default function Partnership() {
  const { t } = useLang()
  const { partnership, ui } = t

  return (
    <>
      {/* Philosophy */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-dark">{ui.partnershipEyebrow}</p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-ink md:text-5xl">
            {partnership.philosophy.title}
          </h1>
          <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-ink-soft">
            {partnership.philosophy.body}
          </p>
        </div>
      </section>

      {/* Three partnership types */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">{ui.partnershipTitle}</h2>
        <p className="mt-3 text-ink-soft">{ui.partnershipSubtitle}</p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
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
                className="mt-6 inline-block text-sm font-semibold text-red-dark hover:underline"
              >
                {ui.discussThis}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/contact"
            className="inline-block rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-red-dark"
          >
            {ui.partnershipCtaButton}
          </Link>
        </div>
      </section>
    </>
  )
}
