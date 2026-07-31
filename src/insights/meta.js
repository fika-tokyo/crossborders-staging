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
    contentFiles: {
      ja: 'shinjuku-gyoen-2026-07.ja.md',
      tw: 'shinjuku-gyoen-2026-07.tw.md',
      zh: 'shinjuku-gyoen-2026-07.zh.md',
      en: 'shinjuku-gyoen-2026-07.en.md',
    },
    title: {
      ja: '民泊許可だけを持つ新宿の一棟ビルと、封印されたもう半分の収益',
      tw: '一棟只有民泊許可的新宿樓，和它被封印的另一半收益',
      zh: '一栋只有民泊许可的新宿楼，和它被封印的另一半收益',
      en: 'A Shinjuku building with only a minpaku license — and the other half of its income, sealed away',
    },
    excerpt: {
      ja: '新宿三丁目駅徒歩4分・RC造6階建ての一棟ビル。同じ建物で、民泊180日営業と旅館業365日営業では収益率が約2倍違う——その理由を、供給・制度・需要の3つのデータから読み解きます。',
      tw: '新宿三丁目站步行4分、RC造6層的一棟整樓。同一棟建築，民泊180天營業與旅館業365天營業，收益率相差近一倍——本文用供給、制度、需求三組數據解讀原因。',
      zh: '新宿三丁目站步行4分、RC造6层的一栋整楼。同一栋建筑，民泊180天营业与旅馆业365天营业，收益率相差近一倍——本文用供给、制度、需求三组数据解读原因。',
      en: 'A six-storey RC building four minutes\' walk from Shinjuku-sanchome Station. In the same building, 180-day minpaku operation and 365-day hotel-license operation differ in yield by nearly 2x — we unpack why, through data on supply, regulation and demand.',
    },
  },
]

/* 記事が status: 'sold' になったときの表示(前端・プリレンダ共用) */
export const SOLD_JA = {
  banner: '本物件は成約いたしました。本記事は市場分析として引き続き公開しています。',
  price: '成約済み',
}
