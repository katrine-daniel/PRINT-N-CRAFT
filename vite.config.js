import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/PRINT-N-CRAFT/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name]-[hash]-v33.js`,
        chunkFileNames: `assets/[name]-[hash]-v33.js`,
        assetFileNames: `assets/[name]-[hash]-v33[extname]`
      }
    }
  }
})
