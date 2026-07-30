import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative asset loading for GitHub Pages and all static deployment platforms
  server: {
    port: 3000,
    open: true
  }
})
