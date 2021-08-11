import { createRouter, createWebHistory } from 'vue-router'

import store from '@/store'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Billing from '../views/Billing.vue'

import middlewarePipeline from './middlewarePipeline'

import auth from '@/middleware/auth'
import subscribed from '@/middleware/subscribed'
import guest from '@/middleware/guest'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      middleware: [guest]
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      middleware: [auth]
    }
  },
  {
    path: '/billing',
    name: 'Billing',
    component: Billing,
    meta: {
      middleware: [auth, subscribed]
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {

  const middleware = to.meta.middleware

  const context = {to, from, store, next}

  if (! middleware) {
    return next()
  }

  return middleware[0]({ 
    ...context, 
    next: middlewarePipeline(context, middleware, 1)
  })

})

export default router
