import { Router } from 'vue-router'
import { checkLogin, useNProgress, useChangeTitle } from './helps'

export function useGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    checkLogin()
    useNProgress().start()
    useChangeTitle(to)
    next()
  })
  router.afterEach((to, from) => { })
}
