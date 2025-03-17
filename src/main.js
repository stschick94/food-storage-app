console.log('Environment Variables Check:', {
  hasApiKey: !!import.meta.env.VITE_FIREBASE_API_KEY,
  envMode: import.meta.env.MODE,
  baseUrl: import.meta.env.BASE_URL
});

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
