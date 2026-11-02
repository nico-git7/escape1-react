import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    // El build de servidor (src/entry-server.jsx) solo genera HTML: no necesita
    // copiar las fotos y videos de /public
    copyPublicDir: !isSsrBuild,
  },
}))
