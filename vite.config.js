import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => {
  // Dynamic base path for GitHub Pages
  const base = process.env.NODE_ENV === 'production' 
    ? '/S1MC.github.io/' 
    : '/'

  return {
    plugins: [react()],
    base: base,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
