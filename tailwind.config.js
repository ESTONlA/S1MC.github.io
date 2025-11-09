/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#E7CC9F',
          500: '#E7CC9F',
          700: '#D4B887',
        },
        bg: {
          page: '#0B1921',
          surface1: '#1A2B30',
          surface2: '#2E474A',
        },
        text: {
          primary: '#E7CC9F',
          secondary: '#B8A078',
        },
        border: {
          default: '#2E474A',
          interactive: '#234D37',
        },
        semantic: {
          success: '#234D37',
          warning: '#E7CC9F',
          error: '#A0522D',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        xxl: '48px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
      },
      boxShadow: {
        'glow-interactive': '0 0 8px 0 rgba(231, 204, 159, 0.3)',
        'glow-hover': '0 0 12px 0 rgba(231, 204, 159, 0.15)',
      },
    },
  },
  plugins: [],
}
