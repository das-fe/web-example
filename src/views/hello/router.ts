import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/',
  component: () => import('./app.vue'),
} as RouteRecordRaw
