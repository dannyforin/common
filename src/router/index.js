import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home')
  },
  {
    path: '/mall',
    name: 'mall',
    component: () => import('../views/BookMall')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('../views/Category')
  },
  {
    path: '/setting',
    name: 'set',
    component: () => import('../views/Set')
  }
]

const router = new VueRouter({
  routes
})

export default router
