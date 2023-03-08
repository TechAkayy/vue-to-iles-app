import { defineApp } from 'iles'
import { createPinia } from 'pinia'

import '@/assets/main.css'

export default defineApp({
  enhanceApp({ app, head, router }) {
    const pinia = createPinia()
    app.use(pinia)
  }
})
