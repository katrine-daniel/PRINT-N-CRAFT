import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves the site from /PRINT-N-CRAFT/, Vercel serves it from the domain root.
// Vercel sets VERCEL=1 during its build, so the same repo deploys correctly to both.
export default defineConfig({
  plugins: [react()],
  base: process.env.VERCEL ? '/' : '/PRINT-N-CRAFT/',
  server: {
    port: 3000,
    open: true,
  },
})