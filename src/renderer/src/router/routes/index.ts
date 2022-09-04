import { RouteRecordRaw } from 'vue-router'
import findRoutes from './find.routes'
import searchRoutes from './search.routes'
import settingRoutes from './setting.routes'
const _routes = [
  ...findRoutes,
  ...searchRoutes,
  ...settingRoutes
]
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/find'
  },
  ..._routes,
  {
    path: '/:pathMatch(.*)*',
    redirect: '/not-found'
  }
]
export default routes
