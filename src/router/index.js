import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'Menu',
        component: () => import('../views/MenuList.vue')
      },
      {
        path: '/menu/:id',
        name: 'MenuDetail',
        meta: {
          navbar: false,
          header: false
        },
        component: () => import('../views/MenuDetail.vue')
      }
    ]
  },
  {
    path: '/order',
    name: 'Order',
    meta: {
      search: false,
      title: 'Заказ'
    },
    component: () => import('../views/Order.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: {
      title: 'Категории'
    },
    component: () => import('../views/Categories.vue')
  },
  {
    path: '/likes',
    name: 'Likes',
    meta: {
      title: 'Избранное'
    },
    component: () => import('../views/Likes.vue')
  },
  {
    path: '/info',
    name: 'Info',
    meta: {
      header: false
    },
    component: () => import('../views/Info.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
