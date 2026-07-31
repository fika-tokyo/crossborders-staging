// Insights(市場レポート)— フロントエンド用の記事データ。
// メタデータは meta.js(プリレンダ脚本と共用)。ここでは Vite の ?raw / 画像 import で
// 正文と写真を挂載する。tw/zh/en 版は .tw.md 等を追加して CONTENT に足す。
import { ARTICLES_META } from './meta.js'
import jaShinjukuGyoen from './shinjuku-gyoen-2026-07.ja.md?raw'
import twShinjukuGyoen from './shinjuku-gyoen-2026-07.tw.md?raw'
import zhShinjukuGyoen from './shinjuku-gyoen-2026-07.zh.md?raw'
import enShinjukuGyoen from './shinjuku-gyoen-2026-07.en.md?raw'
import imgShinjukuRoom from './shinjuku-room.jpg'
import imgShinjukuBuilding from './shinjuku-building.jpg'

const CONTENT = {
  'shinjuku-gyoen-2026-07': {
    ja: jaShinjukuGyoen,
    tw: twShinjukuGyoen,
    zh: zhShinjukuGyoen,
    en: enShinjukuGyoen,
  },
}

const IMAGES = {
  'shinjuku-gyoen-2026-07': {
    image: imgShinjukuRoom,       // 一覧カード・最新レポートのサムネイル
    heroImage: imgShinjukuBuilding, // 記事冒頭のビル外観写真
  },
}

export const ARTICLES = ARTICLES_META.map((m) => ({
  ...m,
  content: CONTENT[m.slug] || {},
  ...(IMAGES[m.slug] || {}),
}))

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
