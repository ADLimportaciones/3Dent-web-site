import { createRouter, createWebHistory } from 'vue-router'
import ViewHome from "../component/HomeView.vue"
import ViewUs from "../component/UsView.vue"
import ViewServices from "../component/ServiceView.vue"
import ViewSedes from "../component/SedesView.vue"

const routes = [
  {path: '/', name: 'Home', component: ViewHome},
  {path: '/us', name: 'Us', component: ViewUs},
  {path: '/Services', name: 'Services', component: ViewServices},
  {path: '/Sedes', name: 'Sedes', component: ViewSedes},
  { path: '/contact', name: 'Contact' }
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth' 
      }
    }
    return { top: 0 }
  }
})

export default router
