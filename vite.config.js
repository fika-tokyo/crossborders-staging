import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Base path: '/' locally & on Netlify; '/<repo>/' on GitHub Pages
  // (the deploy workflow sets VITE_BASE).
  base: process.env.VITE_BASE || '/',
  // Allow access through a Cloudflare tunnel / other public hosts when sharing.
  server: { host: true, allowedHosts: true },
  preview: { host: true, allowedHosts: true },
})
