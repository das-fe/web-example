import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { dasFeMobileVitePlugin } from '@das-fe/cli'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dasFeMobileVitePlugin()],
  resolve: { alias: { '@': resolve(__dirname, 'src') } },
})
