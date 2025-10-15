import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest:{
        name:"StudyNotes",
        short_name:"Notes",
        description:"App de anotações para estudantes",
        icons:[{
          src: '/studynotes-192.png',
          sizes:'192x192',
          type:'image/png',
          purpose:'any'
        },
        {
          src:'/studynotes-512.png',
          sizes:'512x512',
          type:'image/png',
          purpose:'any'
        },
      ],
      display:"standalone",
      scope:'/',
      start_url:"/",
      orientation:'portrait'
      }
    }),
  ],
})
