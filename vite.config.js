import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/CODE-PEN/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          codemirror: ['@codemirror/lang-html', '@codemirror/lang-css', '@codemirror/lang-javascript'],
          fontawesome: ['@fortawesome/react-fontawesome', '@fortawesome/free-solid-svg-icons'],
        }
      }
    }
  }
})
