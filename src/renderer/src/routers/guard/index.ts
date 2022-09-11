import { Router } from 'vue-router';
import { refreshStatus, useNProgress, useChangeTitle } from './helps';
const { start, done } = useNProgress();
export function useGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    start();
    refreshStatus();
    useChangeTitle(to);
    next();
  });
  router.afterEach((to, from) => {
    done();
  });
}
