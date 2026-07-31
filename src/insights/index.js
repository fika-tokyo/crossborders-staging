// Insights(市場レポート)記事のメタデータ。
// 正文は同ディレクトリの markdown を raw import。tw/zh/en 版は
// shinjuku-gyoen-2026-07.zh.md 等を追加して content に挂載する。
import jaShinjukuGyoen from './shinjuku-gyoen-2026-07.ja.md?raw'

export const ARTICLES = [
  {
    slug: 'shinjuku-gyoen-2026-07',
    date: '2026-07-31',                  // 情報公開日(列表排序用)
    status: 'available',                 // 'available' | 'sold'
    contactTopic: 'Investment inquiry',  // contactTopics 対応キー(CTA 預選用)
    title: {
      ja: '民泊許可だけを持つ新宿の一棟ビルと、封印されたもう半分の収益',
      tw: '',
      zh: '',
      en: '',
    },
    excerpt: {
      ja: '新宿三丁目駅徒歩4分・RC造6階建ての一棟ビル。同じ建物で、民泊180日営業と旅館業365日営業では収益率が約2倍違う——その理由を、供給・制度・需要の3つのデータから読み解きます。',
      tw: '',
      zh: '',
      en: '',
    },
    content: { ja: jaShinjukuGyoen },
  },
]

export function getArticle(slug) {
  return ARTICLES.find((a) => a.slug === slug) || null
}

export function latestArticle() {
  return ARTICLES.length
    ? [...ARTICLES].sort((a, b) => (a.date < b.date ? 1 : -1))[0]
    : null
}

/* 現在言語 → 記事フィールドの取り出し(空なら ja へ回退) */
export function articleField(article, field, lang) {
  const v = article[field] || {}
  return v[lang] || v.ja || ''
}
