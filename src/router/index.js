import { createRouter, createWebHistory } from 'vue-router'
// ... other imports ...

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ... your routes ...
  ]
})

export default router 