import { createSSRApp } from 'vue'
import pinia from './store'
import './styles/main.scss'

import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)

  app.use(pinia)
  return {
    app
  }
}
