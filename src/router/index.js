import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../Layout/Layout.vue';
import Login from '@/views/Login/Login.vue';
import Home from '@/views/Home/index.vue';
import Category from '@/views/Category/index.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children:[
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          path: 'category/:id',
          name: 'Category',
          component: Category
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})

export default router
