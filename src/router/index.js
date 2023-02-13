import { createRouter, createWebHistory } from 'vue-router'
import { userAuthentication } from '@/stores/authentication';
import HomeView from '../views/HomeView.vue'

  const routes = [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      beforeEnter (to, from, next) {
        // need to save authentication inside beforeEach because beforeEach loads before variables outside
        const authentication = userAuthentication()
        if (authentication.authenticatedUser) {
          authentication.logout()
        }
          return next('/login');
      }
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/styleguide',
      name: 'styleguide',
      component: () => import('../views/Styleguide.vue')
    },
    {
      path: '/sandbox',
      name: 'sandbox',
      component: () => import('../views/Sandbox.vue')
    }
  ]

  const router = createRouter({ history: createWebHistory(), routes })

   /* Redirect all trafic to /login if if not logged in */
  /*
  router.beforeEach(async (to) => {
      // redirect to login page if not logged in and trying to access a restricted page
      const publicPages = ['/login'];
      const authRequired = !publicPages.includes(to.path);
      // need to save authentication inside beforeEach because beforeEach loads before variables outside
      const authentication = userAuthentication()

      if (authRequired && !authentication.authenticatedUser) {
          return '/login';
      }
  });
  */

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