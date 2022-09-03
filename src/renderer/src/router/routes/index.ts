import { RouteRecordRaw } from 'vue-router'
import homeRoutes from './home.routes'
import searchRoutes from './search.routes'
const _routes = [
  homeRoutes,
  searchRoutes
]
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  ..._routes,
  {
    path: '/:pathMatch(.*)*',
    redirect: '/not-found'
  }
]
export default routes
