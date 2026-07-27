import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import footerBg from '../assets/cta-ocean.jpg'

export default function Footer() {
  const { t } = useLang()
  const { site, ui } = t
  const { pathname } = useLocation()
  // Don't repeat the "tell us your needs" CTA on the contact / thank-you pages.
  const hideCta = pathname === '/contact' || pathname === '/thank-you'

  return (
    <footer className="relative overflow-hidden text-white">
      {/* Single ocean background for the whole bottom block. */}
      <img
        src={footerBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/85 to-navy/95" />

      <div className="relative">
        {/* CTA banner (hidden on the contact / thank-you pages) */}
        {!hideCta && (
          <div className="mx-auto max-w-3xl px-6 pt-20 pb-14 text-center">
            <h2 className="text-3xl font-bold tracking-tight [text-shadow:0_2px_12px_rgba(11,20,30,0.5)] md:text-4xl">
              {ui.homeCtaTitle}
            </h2>
            <p className="cta-sub mx-auto mt-4 max-w-lg text-white/85 [text-shadow:0_1px_8px_rgba(11,20,30,0.5)]">
              {ui.homeCtaSubtitle}
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-block rounded-full bg-red px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-white hover:text-navy"
            >
              {ui.homeCtaButton}
            </Link>
          </div>
        )}

        {/* Tagline (left) + contact (right) */}
        <div className={`mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-10 md:flex-row md:items-center md:justify-between ${hideCta ? 'pt-16' : ''}`}>
          <div>
            <p className="whitespace-pre-line text-lg font-semibold leading-snug text-white">{site.tagline}</p>
            {site.taglineEn && (
              <p className="mt-1 text-sm text-white/70">{site.taglineEn}</p>
            )}
          </div>

          <ul className="space-y-1.5 text-sm text-white/80 md:text-right">
            <li><a href={`mailto:${site.email}`} className="transition hover:text-red">{site.email}</a></li>
            <li>{site.phone}</li>
            <li>{site.address}</li>
          </ul>
        </div>

        {/* Bottom legal bar — licenses + copyright, centered for balance */}
        <div className="mx-auto max-w-6xl border-t border-white/10 px-6 py-6 text-center text-xs leading-relaxed text-white/50">
          <p>宅地建物取引業登録　東京都知事（1）第111770号</p>
          <p>住宅宿泊管理業者登録　国土交通大臣（01）第F04198号</p>
          <p className="mt-3">© {new Date().getFullYear()} {site.brandFull} {ui.footerRights}</p>
        </div>
      </div>
    </footer>
  )
}
