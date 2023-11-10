import type { RouteRecordRaw } from 'vue-router'

export default {
  path: '/demo',
  component: () => import('./app.vue'),
} as RouteRecordRaw

