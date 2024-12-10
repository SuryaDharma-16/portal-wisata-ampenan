import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/portal-wisata-ampenan/portal-wisata/src/main.jsx',
  plugins: [react()],
})
