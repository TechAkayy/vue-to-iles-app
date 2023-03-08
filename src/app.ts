import { defineApp } from 'iles'
import { createPinia } from 'pinia'

import '@/assets/main.css'

export default defineApp({
  enhanceApp({ app }) {
    const pinia = createPinia()
    app.use(pinia)
  }
})
