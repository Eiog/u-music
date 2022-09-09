import { RouteRecordRaw } from 'vue-router';
const SongSheet = () => import('~/views/songsheet/songsheet.vue');
const routes: RouteRecordRaw[] = [
  {
    path: '/songsheet/:id',
    name: SongSheet.name,
    component: SongSheet,
    meta: {
      title: '歌单',
    },
  },
];

export default routes;
