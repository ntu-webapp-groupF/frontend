import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import process from 'process'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/v1': {
        target: "http://localhost:8000",
        changeOrigin: true,
      }
    }
  }
})
