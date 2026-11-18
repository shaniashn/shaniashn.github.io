import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// shaniashn.github.io is a GitHub *user* site, so it is served from the domain root.
export default defineConfig({
  base: '/',
  plugins: [vue()],
})
