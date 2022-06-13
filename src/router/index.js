import { createRouter, createWebHistory } from 'vue-router'
import { guardRoutes, guardAuthRoutes } from "./routeGuards";
import LoginForm from "../components/auth/LoginForm.vue";
import HomePage from "../components/HomePage.vue";
const routes = [
  {
    path: '/',
    beforeEnter: guardRoutes,
    name: 'home',
    component: HomePage
  },
  {
    path: '/login',
    beforeEnter: guardAuthRoutes,
    name: 'login',
    component: LoginForm
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
