/* 構築期プリレンダ:Insights を実 HTML として dist に出力する(SEO 対応)。
   - SPA のままだと GitHub Pages の深層 URL は 404 + 空 HTML で、クローラが本文を読めない。
   - vite build 後に実行し、/insights と /insights/<slug> の index.html を生成。
   - sitemap.xml / robots.txt も生成(※ staging ビルドでは上書きしない)。
   - メタデータは src/insights/meta.js を共用。md は本脚本が直接読む(?raw 非依存)。 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { marked } from 'marked'
import { ARTICLES_META, SOLD_JA } from '../src/insights/meta.js'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const SITE = 'https://crossborders.tokyo'
const IS_STAGING = !!process.env.VITE_STAGING

const template = readFileSync(join(ROOT, 'dist/index.html'), 'utf8')

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;')

function renderPage({ path, title, description, bodyHtml }) {
  let html = template
  // 1) タイトル
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
  // 2) head メタ情報:description / og / canonical を当該ページ専用に差し替え
  const head = [
    `<meta name="description" content="${esc(description)}">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:url" content="${SITE}${path}">`,
    `<link rel="canonical" href="${SITE}${path}">`,
  ].join('\n')
  html = html
    .replace(/<meta name="description"[^>]*>/, '')
    .replace(/<meta property="og:(title|description|url)"[^>]*>/g, '')
    .replace(/<link rel="canonical"[^>]*>/, '')
    .replace('</head>', head + '\n</head>')
  // 3) 本文を root に注入(React マウント時に置き換わる)
  html = html.replace(
    /(<div id="root">)([\s\S]*?)(<\/div>)/,
    `$1<main class="mx-auto max-w-3xl px-6 py-16">${bodyHtml}</main>$3`
  )
  const dir = join(ROOT, `dist${path}`)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), html)
  console.log('prerendered', `dist${path}/index.html`)
}

// ---- 記事詳細(現状は日文版のみ) ----
for (const a of ARTICLES_META) {
  let md = readFileSync(join(ROOT, 'src/insights', a.contentFiles.ja), 'utf8')
  let prefix = ''
  if (a.status === 'sold') {
    // 前端と同じ成約表示:価格セル差し替え+冒頭バナー
    md = md.replace(/\|(\s*価格\s*)\|[^|\n]*\|/, '|$1| ' + SOLD_JA.price + ' |')
    prefix = `<div class="mb-8 rounded-xl bg-blush px-5 py-4 text-sm font-medium leading-relaxed text-ink">${esc(SOLD_JA.banner)}</div>`
  }
  renderPage({
    path: `/insights/${a.slug}`,
    title: `${a.title.ja} | CROSSBORDERS`,
    description: a.excerpt.ja,
    bodyHtml: prefix + marked.parse(md),
  })
}

// ---- 一覧ページ ----
renderPage({
  path: '/insights',
  title: 'レポート | CROSSBORDERS',
  description: '株式会社クロスボーダーズによる物件分析・市場レポート。',
  bodyHtml:
    '<h1 class="text-3xl font-bold">レポート</h1><ul class="mt-6 list-disc pl-6">' +
    ARTICLES_META.map(
      (a) => `<li><a href="/insights/${a.slug}/">${esc(a.title.ja)}</a>(${a.date})</li>`
    ).join('') +
    '</ul>',
})

// ---- sitemap.xml / robots.txt(staging では既存の Disallow を保持するため生成しない) ----
if (!IS_STAGING) {
  const routes = [
    '/', '/about', '/value', '/works',
    '/works/tokyo', '/works/kanagawa', '/works/chiba', '/works/kansai',
    '/contact', '/insights',
    ...ARTICLES_META.map((a) => `/insights/${a.slug}`),
  ]
  writeFileSync(
    join(ROOT, 'dist/sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
      routes.map((r) => `  <url><loc>${SITE}${r}</loc></url>`).join('\n') +
      `\n</urlset>\n`
  )
  writeFileSync(join(ROOT, 'dist/robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`)
  console.log('sitemap.xml + robots.txt written (', routes.length, 'routes )')
} else {
  console.log('staging build — sitemap/robots left untouched')
}
