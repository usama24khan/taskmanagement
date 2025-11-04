import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
   server: {
    allowedHosts: ['5szwyq-5173.csb.app']
  }
  ,
  plugins: [tailwindcss(),react()],
})
