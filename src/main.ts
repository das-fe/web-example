import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { dasWeb } from '@das-fe/web'
import '@das-fe/ui/dist/style.css'

const app = createApp(App)
app.use(dasWeb, {
  plugins: import.meta.glob('@/plugins/*/index.ts', { eager: true }),
  router: import.meta.glob('@/views/*/router.ts', { eager: true }),
  theme: import.meta.glob('@/views/*/theme/*.ts', { eager: true }),
  i18n: import.meta.glob('@/views/*/i18n/*.ts', { eager: true }),
})
app.mount('#app')
