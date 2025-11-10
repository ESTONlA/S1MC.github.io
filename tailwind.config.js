/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        's1-ink': '#0B1921',
        's1-deep': '#243D37',
        's1-forest': '#2E474A',
        's1-sand': '#E7CC9F',
        's1-sand-dark': '#d1b480',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        xs: '6px',
        sm: '10px',
        md: '14px',
        lg: '20px',
        xl: '24px',
      },
      boxShadow: {
        card: '0 25px 50px rgba(11, 25, 33, 0.45)',
        'card-strong': '0 35px 65px rgba(11, 25, 33, 0.55)',
      },
      maxWidth: {
        prose: '74ch',
      },
      transitionTimingFunction: {
        's1-ease': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
