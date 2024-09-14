import { createSSRApp } from 'vue'
import pinia from './store'
import App from './App.vue'

import './styles/index.scss'

export function createApp() {
  const app = createSSRApp(App)

  app.use(pinia)
  return {
    app
  }
}
