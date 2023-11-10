import type { Plugin } from 'vue'
export default {
  install: (app) => {
    console.log(app.version)
  },
} as Plugin
