import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Ensures correct base path for deployment
  build: {
    outDir: 'dist'  // Output directory for Netlify
  }
})

