import { createRouter, createWebHistory } from 'vue-router'
import { generalStore } from '@/stores/general';
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

  const routes = [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]

  const router = createRouter({ history: createWebHistory(), routes })

  router.beforeEach(async (to) => {
      // redirect to login page if not logged in and trying to access a restricted page
      const publicPages = ['/login'];
      const authRequired = !publicPages.includes(to.path);
      const authentication = generalStore()
      console.log(authentication.AuthStore)

      if (authRequired && !authentication.AuthStore) {
          return '/login';
      }
  });
export default router

/*  CAN USE IT LIKE THIS AND HAVE: 
    history: createWebHistory(import.meta.env.BASE_URL)
    INSIDE FUNCTION
*/

/* const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})
*/