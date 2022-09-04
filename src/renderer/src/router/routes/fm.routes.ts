import { RouteRecordRaw } from 'vue-router'
import Fm from '@@/views/fm/fm.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/fm',
    name: Fm.name,
    component: Fm,
    meta: {
      title: '私人FM'
    }
  }
]

export default routes
