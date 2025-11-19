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
        'layer-0': '#0B1921', // Base ink
        'layer-1': '#132229', // Slightly lighter ink
        'layer-2': '#1C2C33', // Elevated surface
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
        'highlight': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
        'elevation': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
        'glow': '0 0 15px rgba(231, 204, 159, 0.15)',
      },
      maxWidth: {
        prose: '74ch',
      },
      transitionTimingFunction: {
        's1-ease': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
