

export const theme = {
  color: {
    bg: '#0A0A0F',
    bgElevated: '#101016',
    surface: '#131318',
    surfaceHover: '#1A1A22',
    border: '#232330',
    borderStrong: '#33333F',

    text: '#F5F5F7',
    textMuted: '#8A8A94',
    textFaint: '#55555F',

    accent: '#7C5CFF', // brand purple
    accentDim: '#6247CC',
    accentGlow: 'rgba(124, 92, 255, 0.35)',

    success: '#00FF9C', // terminal green — used sparingly
    successDim: 'rgba(0, 255, 156, 0.12)',

    warn: '#FFB84D',
  },

  gradient: {
    hero: 'radial-gradient(120% 120% at 50% -10%, rgba(124,92,255,0.25) 0%, rgba(10,10,15,0) 60%)',
    card: 'linear-gradient(180deg, rgba(124,92,255,0.08) 0%, rgba(124,92,255,0) 100%)',
    text: 'linear-gradient(90deg, #F5F5F7 0%, #B8AEFF 100%)',
  },

  font: {
    display: "'Bricolage Grotesque', 'Space Grotesk', sans-serif",
    body: "'Inter', -apple-system, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },

  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 800,
  },

  radius: {
    sm: '8px',
    md: '14px',
    lg: '24px',
    pill: '999px',
  },

  space: (n: number) => `${n * 4}px`,

  breakpoint: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1200px',
  },

  shadow: {
    card: '0 8px 30px rgba(0,0,0,0.35)',
    glow: '0 0 40px rgba(124,92,255,0.25)',
  },

  transition: {
    fast: '0.15s ease',
    base: '0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    slow: '0.6s cubic-bezier(0.16, 1, 0.3, 1)',
  },
} as const;

export type Theme = typeof theme;
