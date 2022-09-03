import { Router } from 'vue-router'
import { checkLogin } from './helps'
export function useGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    checkLogin()
    next()
  })
  router.afterEach((to, from) => { })
}
