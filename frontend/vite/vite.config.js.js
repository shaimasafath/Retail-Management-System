import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 👇 this is critical for GitHub Pages
  base: '/Retail-Management-System/',
})

