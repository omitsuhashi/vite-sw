import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        sw: 'public/service-worker.js',
      }
    }
  }
})
