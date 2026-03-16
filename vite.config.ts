import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Critical for GitHub Pages
  build: {
    outDir: 'docs',
    emptyOutDir: true, // Ensure the folder is cleaned before build
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
