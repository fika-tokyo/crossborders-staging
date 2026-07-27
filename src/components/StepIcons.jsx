// Line-art icons for the home value-chain steps.
// Ink line work with a small brand-red accent.
const RED = '#E94F5B'

const icons = {
  DISCOVER: (
    <>
      <path d="M9 40V15h13v25" />
      <path d="M12 21h7M12 27h7M12 33h7" />
      <path d="M5 40h38" />
      <circle cx="31" cy="21" r="8" stroke={RED} />
      <path d="M37 27l6 6" stroke={RED} />
    </>
  ),
  ACQUIRE: (
    <>
      <path d="M13 7h13l7 7v25a2 2 0 0 1-2 2H15a2 2 0 0 1-2-2z" />
      <path d="M26 7v7h7" />
      <path d="M18 22h9M18 27h11M18 32h7" />
      <path d="M23 34l3 3 7-7" stroke={RED} />
    </>
  ),
  ELEVATE: (
    <>
      <path d="M11 8h17v18H11z" />
      <path d="M11 15h17M20 8v18" />
      <path d="M23 41l1.5-5L36 24.5l3.5 3.5L28 39.5z" stroke={RED} />
      <path d="M34.5 26l3.5 3.5" />
    </>
  ),
  OPERATE: (
    <>
      <path d="M11 19h20v5a10 10 0 0 1-20 0z" />
      <path d="M31 21a5 5 0 0 1 0 8" />
      <path d="M13 40h20" />
      <path d="M17 9v4M24 8v5M31 9v4" stroke={RED} />
    </>
  ),
  EXIT: (
    <>
      <path d="M10 40V8M10 40h32" />
      <path d="M14 34l8-6 6 3 12-16" />
      <path d="M40 15h-7M40 15v7" stroke={RED} />
    </>
  ),
}

export function StepIcon({ name, className = '' }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name] || null}
    </svg>
  )
}
