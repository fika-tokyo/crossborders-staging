import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useLang } from '../i18n.jsx'

// Web3Forms access key. Get one (free) at https://web3forms.com using the email
// that should receive inquiries, then paste it here. Safe to keep in the repo —
// the key only allows sending to that pre-registered address.
const WEB3FORMS_ACCESS_KEY = '33a56d2e-4b44-4782-839b-f239dd9e1363'

export default function Contact() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { t } = useLang()
  const { site, contactTopics, partnership, ui } = t

  // Preselect the topic when the visitor arrived from a specific CTA.
  const initialTopic = contactTopics.includes(state?.topic) ? state.topic : contactTopics[0]
  const [form, setForm] = useState({ name: '', email: '', company: '', topic: initialTopic, message: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
    setErrors((e) => ({ ...e, [field]: undefined }))
  }

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = ui.errName
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = ui.errEmail
    if (!form.message.trim()) next.message = ui.errMessage
    return next
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const next = validate()
    if (Object.keys(next).length) {
      setErrors(next)
      return
    }

    // Not configured yet — keep the old behavior so the live form never errors.
    if (WEB3FORMS_ACCESS_KEY === 'YOUR_ACCESS_KEY_HERE') {
      navigate('/thank-you', { state: { name: form.name } })
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New inquiry from ${form.name} — CROSSBORDERS`,
          from_name: 'CROSSBORDERS Website',
          replyto: form.email,
          name: form.name,
          email: form.email,
          company: form.company,
          topic: form.topic,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        navigate('/thank-you', { state: { name: form.name } })
      } else {
        setErrors({ submit: ui.formError })
      }
    } catch {
      setErrors({ submit: ui.formError })
    } finally {
      setSubmitting(false)
    }
  }

  /* 協働カード:クリックで主題を預選し、フォームへスクロール(旧 Partnership の機構を流用) */
  function pickTopic(topic) {
    update('topic', topic)
    // setState 直後の再レンダーで smooth スクロールが中断されるため、1フレーム遅らせる
    setTimeout(() => {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 60)
  }

  const fieldClass = (field) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-red ${
      errors[field] ? 'border-red-400' : 'border-line'
    }`

  return (
    <section className="bg-mist py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <h1 className="text-4xl font-bold tracking-tight text-ink md:text-5xl">{ui.contactTitle}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{ui.contactIntro}</p>

        {/* Partnership cards(旧 /partnership から統合) */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">{ui.partnershipTitle}</h2>
          <p className="mt-2 text-ink-soft">{ui.partnershipSubtitle}</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
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
                <button
                  type="button"
                  onClick={() => pickTopic(type.title)}
                  className="mt-6 self-start text-sm font-semibold text-red-dark hover:underline"
                >
                  {ui.discussThis}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Info + form */}
        <div className="mt-16 grid gap-12 md:grid-cols-2">
        <div>
          <ul className="mt-2 space-y-3 text-sm text-ink-soft">
            <li>
              <span className="font-semibold text-ink">{ui.emailLabel}</span>
              <a href={`mailto:${site.email}`} className="text-red-dark hover:underline">{site.email}</a>
            </li>
            <li><span className="font-semibold text-ink">{ui.phoneLabel}</span>{site.phone}</li>
            <li><span className="font-semibold text-ink">{ui.addressLabel}</span>{site.address}</li>
          </ul>
        </div>

        {/* Right: form */}
        <form id="contact-form" onSubmit={handleSubmit} noValidate className="scroll-mt-24 rounded-2xl bg-white p-8 shadow-sm">
          <div className="space-y-5">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink">{ui.formName}</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                className={fieldClass('name')}
                placeholder={ui.formNamePh}
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink">{ui.formEmail}</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                className={fieldClass('email')}
                placeholder={ui.formEmailPh}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink">{ui.formCompany}</label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => update('company', e.target.value)}
                className={fieldClass('company')}
                placeholder={ui.formCompanyPh}
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink">{ui.formTopic}</label>
              <select
                value={form.topic}
                onChange={(e) => update('topic', e.target.value)}
                className={fieldClass('topic')}
              >
                {contactTopics.map((topic) => (
                  <option key={topic}>{topic}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink">{ui.formMessage}</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                className={fieldClass('message')}
                placeholder={ui.formMessagePh}
              />
              {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
            </div>

            {errors.submit && <p className="text-sm text-red-500">{errors.submit}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-navy py-3 text-sm font-semibold text-white transition-colors hover:bg-red-dark disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? ui.formSending : ui.formSubmit}
            </button>
          </div>
        </form>
        </div>
      </div>
    </section>
  )
}
