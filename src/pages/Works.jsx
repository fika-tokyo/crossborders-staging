import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import { JAPAN_PATH } from '../assets/cases/japanPath.js'
import { TOKYO_VB, TOKYO_WARDS } from '../assets/cases/tokyoWards.js'

import saleChuo from '../assets/cases/sale-chuo.jpg'
import saleShibuya from '../assets/cases/sale-shibuya.jpg'
import saleShinagawa from '../assets/cases/sale-shinagawa.jpg'
import saleMeguro from '../assets/cases/sale-meguro.jpg'
import saleYokohama from '../assets/cases/sale-yokohama.jpg'
import saleKyoto from '../assets/cases/sale-kyoto.jpg'
import saleOsaka from '../assets/cases/sale-osaka.jpg'
import saleKamagaya from '../assets/cases/sale-kamagaya.jpg'
import rentShinjuku1 from '../assets/cases/rent-shinjuku1.jpg'
import rentShinjuku2 from '../assets/cases/rent-shinjuku2.jpg'
import rentNakano from '../assets/cases/rent-nakano.jpg'
import rentKawasaki from '../assets/cases/rent-kawasaki.jpg'
import rentChigasaki from '../assets/cases/rent-chigasaki.jpg'
import rentYachimata from '../assets/cases/rent-yachimata.jpg'
import landmarkBunkyo from '../assets/cases/landmark-bunkyo.jpg'
import landmarkKoto from '../assets/cases/landmark-koto.jpg'

/* ---------------------------------------------------------------------------
   成約事例。region: tokyo / kanagawa / chiba / kansai
--------------------------------------------------------------------------- */
export const CASES = [
  { id: 'chuo',      region: 'tokyo',    type: 'sale', img: saleChuo,      ja: '東京都中央区',   en: 'Chuo, Tokyo',        note: { ja: '区分マンション・価格1億円台', zh: '区分公寓・价格1亿日元级', tw: '區分公寓・價格1億日圓級', en: 'Condominium unit · ¥100M range' } },
  { id: 'shibuya',   region: 'tokyo',    type: 'sale', img: saleShibuya,   ja: '東京都渋谷区',   en: 'Shibuya, Tokyo',     note: { ja: '価格1億円台', zh: '价格1亿日元级', tw: '價格1億日圓級', en: '¥100M range' } },
  { id: 'shinagawa', region: 'tokyo',    type: 'sale', img: saleShinagawa, ja: '東京都品川区',   en: 'Shinagawa, Tokyo',   note: { ja: '価格1億円台', zh: '价格1亿日元级', tw: '價格1億日圓級', en: '¥100M range' } },
  { id: 'meguro',    region: 'tokyo',    type: 'sale', img: saleMeguro,    ja: '東京都目黒区',   en: 'Meguro, Tokyo',      note: { ja: '価格2千万円台', zh: '价格2千万日元级', tw: '價格2千萬日圓級', en: '¥20M range' } },
  { id: 'shinjuku1', region: 'tokyo',    type: 'rent', img: rentShinjuku1, ja: '東京都新宿区',   en: 'Shinjuku, Tokyo',    note: { ja: '賃貸仲介', zh: '租赁中介', tw: '租賃中介', en: 'Leasing' } },
  { id: 'shinjuku2', region: 'tokyo',    type: 'rent', img: rentShinjuku2, ja: '東京都新宿区',   en: 'Shinjuku, Tokyo',    note: { ja: '賃貸仲介', zh: '租赁中介', tw: '租賃中介', en: 'Leasing' } },
  { id: 'nakano',    region: 'tokyo',    type: 'rent', img: rentNakano,    ja: '東京都中野区',   en: 'Nakano, Tokyo',      note: { ja: '賃貸仲介', zh: '租赁中介', tw: '租賃中介', en: 'Leasing' } },
  { id: 'yokohama',  region: 'kanagawa', type: 'sale', img: saleYokohama,  ja: '神奈川県横浜市', en: 'Yokohama, Kanagawa', note: { ja: '区分マンション・価格2千万円台', zh: '区分公寓・价格2千万日元级', tw: '區分公寓・價格2千萬日圓級', en: 'Condominium unit · ¥20M range' } },
  { id: 'kawasaki',  region: 'kanagawa', type: 'rent', img: rentKawasaki,  ja: '神奈川県川崎市', en: 'Kawasaki, Kanagawa', note: { ja: '賃貸仲介', zh: '租赁中介', tw: '租賃中介', en: 'Leasing' } },
  { id: 'chigasaki', region: 'kanagawa', type: 'rent', img: rentChigasaki, ja: '神奈川県茅ヶ崎市', en: 'Chigasaki, Kanagawa', note: { ja: '賃貸仲介', zh: '租赁中介', tw: '租賃中介', en: 'Leasing' } },
  { id: 'kamagaya',  region: 'chiba',    type: 'sale', img: saleKamagaya,  ja: '千葉県鎌ケ谷市', en: 'Kamagaya, Chiba',    note: { ja: '価格2千万円台', zh: '价格2千万日元级', tw: '價格2千萬日圓級', en: '¥20M range' } },
  { id: 'yachimata', region: 'chiba',    type: 'rent', img: rentYachimata, ja: '千葉県八街市',   en: 'Yachimata, Chiba',   note: { ja: '古家付土地', zh: '附旧屋土地', tw: '附舊屋土地', en: 'Land with house' } },
  { id: 'kyoto',     region: 'kansai',   type: 'sale', img: saleKyoto,     ja: '京都府京都市',   en: 'Kyoto City',         note: { ja: '価格1千万円台', zh: '价格1千万日元级', tw: '價格1千萬日圓級', en: '¥10M range' } },
  { id: 'osaka',     region: 'kansai',   type: 'sale', img: saleOsaka,     ja: '大阪府大阪市',   en: 'Osaka City',         note: { ja: '価格4千万円台', zh: '价格4千万日元级', tw: '價格4千萬日圓級', en: '¥40M range' } },
]

/* 地域(マップのマーカー座標 + 各言語名)。x,y は japanPath.js と同じ投影。 */
export const REGIONS = [
  { key: 'tokyo',    ja: '東京都',   zh: '东京都',   tw: '東京都',   en: 'Tokyo',    x: 190, y: 216, side: 'R', ly: 118, big: true },
  { key: 'chiba',    ja: '千葉県',   zh: '千叶县',   tw: '千葉縣',   en: 'Chiba',    x: 198, y: 214, side: 'R', ly: 196 },
  { key: 'kanagawa', ja: '神奈川県', zh: '神奈川县', tw: '神奈川縣', en: 'Kanagawa', x: 188, y: 222, side: 'R', ly: 274 },
  { key: 'kansai',   ja: '関西 京都・大阪', zh: '关西 京都・大阪', tw: '關西 京都・大阪', en: 'Kansai (Kyoto·Osaka)', x: 123, y: 233, side: 'L', ly: 330 },
]

export const countByRegion = CASES.reduce((m, c) => ((m[c.region] = (m[c.region] || 0) + 1), m), {})

export const UI = {
  details:   { ja: '詳細を見る →', zh: '查看详情 →', tw: '查看詳情 →', en: 'View details →' },
  back:      { ja: '← 実績マップへ戻る', zh: '← 返回实绩地图', tw: '← 返回實績地圖', en: '← Back to map' },
  tabEstate: { ja: '不動産成約事例', zh: '不动产成约事例', tw: '不動產成交案例', en: 'Real-estate deals' },
  tabHotel:  { ja: 'ホテル運営実績', zh: '酒店运营实绩', tw: '酒店運營實績', en: 'Hotels operated' },
  hotelTitle:{ ja: '運営中のホテル', zh: '运营中的酒店', tw: '營運中的酒店', en: 'Hotels in operation' },
  hotelSub:  { ja: '東京・文京区／江東区で運営中', zh: '东京・文京区／江东区运营中', tw: '東京・文京區／江東區營運中', en: 'Operating in Bunkyo & Koto, Tokyo' },
  photoTBD:  { ja: '写真準備中', zh: '照片准备中', tw: '照片準備中', en: 'Photo coming' },
}
export const tr = (obj, lang) => obj[lang] || obj.ja
export const regionName = (r, lang) => tr({ ja: r.ja, zh: r.zh, tw: r.tw, en: r.en }, lang)

/* 東京の区(コード → 代表写真 + 件数) */
const TOKYO_WARD_CASES = {
  '13114': { img: rentNakano,    count: 1 },
  '13104': { img: rentShinjuku1, count: 2 },
  '13102': { img: saleChuo,      count: 1 },
  '13113': { img: saleShibuya,   count: 1 },
  '13110': { img: saleMeguro,    count: 1 },
  '13109': { img: saleShinagawa, count: 1 },
}

/* 運営中のホテル */
const HOTELS = [
  {
    code: '13105', img: landmarkBunkyo,
    name: { ja: '文京区', zh: '文京区', tw: '文京區', en: 'Bunkyo' },
    type: { ja: 'デザイナーズホテル', zh: '设计师酒店', tw: '設計師酒店', en: 'Designer hotel' },
    desc: {
      ja: '1階のレストランと連動した、4階建て・築古ビルのリノベーション。',
      zh: '与一楼餐厅联动，四层老建筑的翻新改造。',
      tw: '與一樓餐廳聯動，四層老建築的翻新改造。',
      en: 'A renovated four-storey older building, linked with a restaurant on the ground floor.',
    },
  },
  {
    code: '13108', img: landmarkKoto,
    name: { ja: '江東区', zh: '江东区', tw: '江東區', en: 'Koto' },
    type: { ja: 'アパートメントホテル（無人運営）', zh: '公寓式酒店（无人运营）', tw: '公寓式酒店（無人營運）', en: 'Apartment hotel (self-service)' },
    desc: {
      ja: 'スタッフ常駐なしで運営する、一棟まるごとのアパートメント型ホテル。',
      zh: '一整栋的公寓式酒店，无人值守、自助运营。',
      tw: '一整棟的公寓式酒店，無人值守、自助營運。',
      en: 'A whole-building apartment-style hotel, run fully self-service with no on-site staff.',
    },
  },
]
const HOTEL_WARDS = Object.fromEntries(HOTELS.map((h) => [h.code, { img: h.img }]))

/* 東京23区:中心から写真へ発散する図(東京の詳細ページで使用) */
export function TokyoRadial({ lang, w, wardCases = TOKYO_WARD_CASES }) {
  const name = (wd) => (lang === 'en' ? wd.en : wd.name)
  const VB_W = 760
  const VB_H = 380
  const offX = (VB_W - TOKYO_VB.w) / 2
  const offY = (VB_H - TOKYO_VB.h) / 2
  const TW = 146
  const TH = 98
  const cases = TOKYO_WARDS.filter((wd) => wardCases[wd.code])
  const sorted = [...cases].sort((a, b) => a.cx - b.cx)
  const half = Math.ceil(sorted.length / 2)
  const left = sorted.slice(0, half).sort((a, b) => a.cy - b.cy)
  const right = sorted.slice(half).sort((a, b) => a.cy - b.cy)
  const slotY = (n, i) => (n <= 1 ? (VB_H - TH) / 2 : 10 + i * ((VB_H - 20 - TH) / (n - 1)))
  const items = [
    ...left.map((wd, i) => ({ wd, tx: 8, ty: slotY(left.length, i), side: 'L' })),
    ...right.map((wd, i) => ({ wd, tx: VB_W - 8 - TW, ty: slotY(right.length, i), side: 'R' })),
  ]
  return (
    <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="w-full" role="img" aria-label={w.tokyoTitle}>
      {TOKYO_WARDS.map((wd, i) => (
        <path key={wd.code} d={wd.d} transform={`translate(${offX} ${offY})`}
          className={`cb-map-el cb-ward ${wardCases[wd.code] ? 'cb-ward-on' : ''}`}
          style={{ animationDelay: `${i * 16}ms` }}>
          <title>{name(wd)}</title>
        </path>
      ))}
      {items.map((it, i) => {
        const cx = offX + it.wd.cx
        const cy = offY + it.wd.cy
        const ax = it.side === 'L' ? it.tx + TW : it.tx
        const ay = it.ty + TH / 2
        const len = Math.hypot(cx - ax, cy - ay)
        const delay = 260 + i * 90
        const c = wardCases[it.wd.code]
        return (
          <g key={it.wd.code}>
            <line x1={ax} y1={ay} x2={cx} y2={cy} stroke="#B9C2CE" strokeWidth="1"
              style={{ strokeDasharray: len, strokeDashoffset: len, animation: `cbDraw .75s ease ${delay}ms forwards` }} />
            <circle cx={cx} cy={cy} r="4" fill="#E94F5B" stroke="#fff" strokeWidth="1.4" />
            <clipPath id={`cthumb-${it.wd.code}`}><rect x={it.tx} y={it.ty} width={TW} height={TH} rx="10" /></clipPath>
            <g className="cb-map-el" style={{ animationDelay: `${delay + 120}ms` }}>
              {c.img ? (
                <image href={c.img} x={it.tx} y={it.ty} width={TW} height={TH} preserveAspectRatio="xMidYMid slice" clipPath={`url(#cthumb-${it.wd.code})`} />
              ) : (
                <>
                  <rect x={it.tx} y={it.ty} width={TW} height={TH} rx="10" fill="#EDEFF3" />
                  <text x={it.tx + TW / 2} y={it.ty + TH / 2 + 4} textAnchor="middle" fontSize="11" fill="#96959A">{tr(UI.photoTBD, lang)}</text>
                </>
              )}
              <rect x={it.tx} y={it.ty + TH - 24} width={TW} height="24" fill="#0009" clipPath={`url(#cthumb-${it.wd.code})`} />
              <rect x={it.tx} y={it.ty} width={TW} height={TH} rx="10" fill="none" stroke="#E3E7EC" strokeWidth="1.5" />
              <text x={it.tx + 8} y={it.ty + TH - 8} fontSize="11" fontWeight="700" fill="#fff">
                {name(it.wd)}{c.count != null && <tspan fill="#FFC9C2"> {c.count}{w.countUnit}</tspan>}
              </text>
            </g>
          </g>
        )
      })}
    </svg>
  )
}

/* 全国マップ:地域マーカー(クリックで詳細へ) */
function JapanRegions({ lang, w, go }) {
  const VB_W = 760
  const VB_H = 430
  const S = 1.14
  const mapOffX = (VB_W - 380 * S) / 2
  const mapOffY = (VB_H - 320 * S) / 2
  const P = (x, y) => [mapOffX + x * S, mapOffY + y * S]
  return (
    <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="w-full" role="img" aria-label={w.mapTitle}>
      <path d={JAPAN_PATH} transform={`translate(${mapOffX} ${mapOffY}) scale(${S})`}
        fill="#E4E9F0" stroke="#CBD5E1" strokeWidth="0.6" strokeLinejoin="round" className="cb-map-el" />
      {REGIONS.map((r) => {
        const [mx, my] = P(r.x, r.y)
        const lx = r.side === 'R' ? 548 : 24
        const lineX = r.side === 'R' ? lx - 10 : lx + 150
        return (
          <g key={r.key} className="cb-clickable" role="button" tabIndex={0}
            onClick={() => go(r.key)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(r.key) } }}>
            <line x1={mx} y1={my} x2={lineX} y2={r.ly - 5} stroke="#96959A" strokeWidth="0.8" />
            {r.big && (
              <circle className="cb-ping" cx={mx} cy={my} r="6" fill="none" stroke="#385988" strokeWidth="1.5">
                <animate attributeName="r" values="6;16" dur="2.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.55;0" dur="2.2s" repeatCount="indefinite" />
              </circle>
            )}
            <circle cx={mx} cy={my} r={r.big ? 6 : 4.5} fill={r.big ? '#385988' : '#E94F5B'} stroke="#fff" strokeWidth="1.6" />
            <text x={lx} y={r.ly} fontSize="16" fontWeight="800" fill="#3E3A39">
              {regionName(r, lang)}<tspan fill="#D83F4B" fontWeight="700"> {countByRegion[r.key]}{w.countUnit}</tspan>
            </text>
            <text x={lx} y={r.ly + 17} fontSize="10.5" fontWeight="700" fill="#385988">{tr(UI.details, lang)}</text>
          </g>
        )
      })}
    </svg>
  )
}

export default function Works() {
  const { t, lang } = useLang()
  const w = t.works
  const navigate = useNavigate()
  const go = (key) => navigate(`/works/${key}`)
  const [cat, setCat] = useState('estate')

  const tabCls = (on) =>
    `rounded-full px-4 py-1.5 text-sm font-semibold transition ${on ? 'bg-white text-ink shadow-sm' : 'text-ink-soft hover:text-ink'}`

  return (
    <>
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-dark">{w.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink md:text-5xl">{w.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{w.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        {/* カテゴリ切替:不動産 / ホテル */}
        <div className="mb-6 inline-flex rounded-full bg-mist p-1">
          <button className={tabCls(cat === 'estate')} onClick={() => setCat('estate')}>{tr(UI.tabEstate, lang)}</button>
          <button className={tabCls(cat === 'hotel')} onClick={() => setCat('hotel')}>{tr(UI.tabHotel, lang)}</button>
        </div>

        <div className="rounded-2xl border border-line bg-white p-6">
          {cat === 'estate' ? (
            <>
              <h2 className="text-lg font-bold text-ink">{w.mapTitle}</h2>
              <p className="mt-1 text-xs text-ink-soft">{w.mapSub}</p>
              <div className="mt-4">
                <JapanRegions lang={lang} w={w} go={go} />
              </div>
            </>
          ) : (
            <>
              <h2 className="text-lg font-bold text-ink">{tr(UI.hotelTitle, lang)}</h2>
              <p className="mt-1 text-xs text-ink-soft">{tr(UI.hotelSub, lang)}</p>
              <div className="mt-4">
                <TokyoRadial lang={lang} w={w} wardCases={HOTEL_WARDS} />
              </div>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {HOTELS.map((h) => (
                  <div key={h.code} className="flex gap-4 rounded-2xl border border-line bg-mist p-4">
                    <img src={h.img} alt="" className="h-24 w-32 shrink-0 rounded-xl object-cover" />
                    <div>
                      <h3 className="font-semibold text-ink">{tr(h.name, lang)}</h3>
                      <span className="mt-1 inline-block rounded-full bg-navy/10 px-2.5 py-0.5 text-[11px] font-bold text-navy">
                        {tr(h.type, lang)}
                      </span>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{tr(h.desc, lang)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}
