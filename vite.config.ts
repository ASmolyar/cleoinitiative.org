import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Check if we're building for GitHub Pages
const isGitHubPages = process.env.GITHUB_PAGES === 'true'
const base = isGitHubPages ? '/cleoinitiative.org/' : '/'

export default defineConfig({
  plugins: [react()],
  base: base,
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true,
  },
}) 