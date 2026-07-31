import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import { ARTICLES, articleField } from '../insights/index.js'

export default function Insights() {
  const { t, lang } = useLang()
  const ins = t.insights
  const articles = [...ARTICLES].sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <>
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-dark">{ins.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink md:text-5xl">{ins.listTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{ins.listSubtitle}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="space-y-6">
          {articles.map((a) => {
            const isSold = a.status === 'sold'
            return (
              <Link
                key={a.slug}
                to={`/insights/${a.slug}`}
                className="group block overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-0.5 hover:border-red hover:shadow-md md:flex"
              >
                {a.image && (
                  <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:w-72 md:shrink-0">
                    <img
                      src={a.image}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-7">
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="text-ink-soft">{a.date}</span>
                    <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${isSold ? 'bg-cloud text-ink-soft' : 'bg-red/10 text-red-dark'}`}>
                      {isSold ? ins.statusSold : ins.statusAvailable}
                    </span>
                  </div>
                  <h2 className="mt-3 text-xl font-bold leading-snug text-ink md:text-2xl">
                    {articleField(a, 'title', lang)}
                  </h2>
                  <p className="mt-3 leading-relaxed text-ink-soft">{articleField(a, 'excerpt', lang)}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-red-dark">{ins.readMore}</span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  )
}
