import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/Order.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import('../views/Categories.vue')
  },
  {
    path: '/likes',
    name: 'Likes',
    component: () => import('../views/Likes.vue')
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('../views/Info.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router