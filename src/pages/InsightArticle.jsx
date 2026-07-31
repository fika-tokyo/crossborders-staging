import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { useLang } from '../i18n.jsx'
import { getArticle, articleField } from '../insights/index.js'

/* 記事本文の見た目(全站トーン:紺×赤×グレー、text-ink / border-line トークン) */
const mdComponents = {
  h1: (props) => <h1 className="mt-2 text-3xl font-bold leading-snug tracking-tight text-ink md:text-4xl" {...props} />,
  h2: (props) => (
    <h2 className="mt-16 border-l-4 border-red pl-4 text-xl font-bold leading-snug text-ink md:text-2xl" {...props} />
  ),
  p: (props) => <p className="mt-5 leading-8 text-ink" {...props} />,
  ul: (props) => <ul className="mt-5 list-disc space-y-2 pl-6 leading-8 text-ink" {...props} />,
  li: (props) => <li {...props} />,
  strong: (props) => <strong className="font-bold text-ink" {...props} />,
  /* 末尾の免責事項(斜体段落)は小さめ・次級グレー */
  em: (props) => <em className="text-[13px] leading-relaxed text-ink-soft" {...props} />,
  table: (props) => (
    <div className="mt-6 overflow-x-auto rounded-xl border border-line">
      <table className="w-full min-w-[560px] border-collapse text-sm" {...props} />
    </div>
  ),
  thead: (props) => <thead className="bg-mist" {...props} />,
  th: (props) => <th className="border-b border-line p-3 text-left font-semibold text-ink" {...props} />,
  td: (props) => <td className="border-b border-line p-3 align-top leading-relaxed text-ink" {...props} />,
}

export default function InsightArticle() {
  const { slug } = useParams()
  const { t, lang } = useLang()
  const ins = t.insights
  const article = getArticle(slug)

  /* slug 不存在 → WorkRegion と同スタイルの未找到 */
  if (!article) {
    return (
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="text-ink-soft">{ins.notFound}</p>
        <Link to="/insights" className="mt-4 inline-block font-semibold text-red-dark hover:underline">
          {ins.back}
        </Link>
      </section>
    )
  }

  const isSold = article.status === 'sold'
  const hasOwnLang = !!(article.content && article.content[lang])
  let content = (article.content && (article.content[lang] || article.content.ja)) || ''
  if (isSold) {
    /* 物件概要表の「価格」セルを成約提示に差し替え */
    content = content.replace(/\|(\s*価格\s*)\|[^|\n]*\|/, '|$1| ' + ins.soldPrice + ' |')
  }

  return (
    <>
      <section className="bg-mist py-12">
        <div className="mx-auto max-w-3xl px-6">
          <Link to="/insights" className="text-sm font-semibold text-red-dark hover:underline">
            {ins.back}
          </Link>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
            <span className="text-ink-soft">{article.date}</span>
            <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${isSold ? 'bg-cloud text-ink-soft' : 'bg-red/10 text-red-dark'}`}>
              {isSold ? ins.statusSold : ins.statusAvailable}
            </span>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 pb-20 pt-10">
        {isSold && (
          <div className="mb-8 rounded-xl bg-blush px-5 py-4 text-sm font-medium leading-relaxed text-ink">
            {ins.soldBanner}
          </div>
        )}
        {!hasOwnLang && lang !== 'ja' && (
          <p className="mb-8 rounded-xl bg-mist px-5 py-3 text-sm text-ink-soft">{ins.jaOnlyNote}</p>
        )}

        {/* ビル外観写真 */}
        {article.heroImage && (
          <img
            src={article.heroImage}
            alt=""
            className="mb-10 max-h-[520px] w-full rounded-2xl object-cover object-center"
          />
        )}

        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={mdComponents}>
          {content}
        </ReactMarkdown>

        {/* CTA:Contact へ(主題預選は Partnership カードと同じ state 機構を共用) */}
        <div className="mt-16 rounded-2xl border border-line bg-mist p-8 text-center">
          <p className="mx-auto max-w-xl leading-relaxed text-ink">{ins.ctaLead}</p>
          <Link
            to="/contact"
            state={{ topic: t.contactTopics[article.contactTopicIndex ?? 3] }}
            className="mt-6 inline-block rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-red-dark"
          >
            {ins.ctaButton}
          </Link>
        </div>
      </article>
    </>
  )
}
