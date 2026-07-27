// CROSSBORDERS official logo — exact vectors extracted from the brand .ai file.
import emblemUrl from '../assets/logo-emblem.svg'
import wordmarkUrl from '../assets/logo-wordmark.svg'

// Emblem: "CROSSBORDERS" arched over the top (CROSS red / BORDERS blue),
// "JAPAN", a red sun, and the striped blue sea below.
export function LogoEmblem({ className = '', title = 'CROSSBORDERS' }) {
  return <img src={emblemUrl} alt={title} className={className} draggable="false" />
}

// Horizontal wordmark: "CROSSBORDERS" in brand blue. onDark renders it white.
export function Wordmark({ className = '', onDark = false }) {
  return (
    <img
      src={wordmarkUrl}
      alt="CROSSBORDERS"
      className={className}
      draggable="false"
      style={onDark ? { filter: 'brightness(0) invert(1)' } : undefined}
    />
  )
}
