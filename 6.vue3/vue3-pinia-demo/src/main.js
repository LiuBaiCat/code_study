import { createApp } from 'vue'

import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

import App from './App.vue'

const pinia = createPinia()

createApp(App).use(pinia.use(persist)).mount('#app')
