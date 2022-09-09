import { RouteRecordRaw } from 'vue-router';
import findRoutes from './find.routes';
import videoRooutes from './video.routes';
import fmRooutes from './fm.routes';
import searchRoutes from './search.routes';
import settingRoutes from './setting.routes';
import songSheet from './sangsheet.routes';
const _routes = [
  ...findRoutes,
  ...videoRooutes,
  ...fmRooutes,
  ...searchRoutes,
  ...settingRoutes,
  ...songSheet,
];
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/find',
  },
  ..._routes,
  {
    path: '/not-found',
    name: 'not-found',
    component: () => import('~/views/not-found/not-found.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/not-found',
  },
];
export default routes;
