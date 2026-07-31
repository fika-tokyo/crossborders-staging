// Insights 記事のメタデータ(唯一のソース)。
// フロントエンド(index.js)と構築期プリレンダ(scripts/prerender-insights.mjs)が共用する。
// ここには Vite 専用構文(?raw import・画像 import)を置かない — Node からも読むため。
export const ARTICLES_META = [
  {
    slug: 'shinjuku-gyoen-2026-07',
    date: '2026-07-31',                  // 情報公開日(列表排序用)
    status: 'available',                 // 'available' | 'sold'
    contactTopic: 'Investment inquiry',  // contactTopics 対応キー
    contactTopicIndex: 3,                // contactTopics[3] = 投資のご相談(CTA 預選用)
    contentFiles: { ja: 'shinjuku-gyoen-2026-07.ja.md' }, // 言語 → 同ディレクトリの md
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
  },
]

/* 記事が status: 'sold' になったときの表示(前端・プリレンダ共用) */
export const SOLD_JA = {
  banner: '本物件は成約いたしました。本記事は市場分析として引き続き公開しています。',
  price: '成約済み',
}
