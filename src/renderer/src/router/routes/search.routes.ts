import { RouteRecordRaw } from 'vue-router'
import Search from '@@/views/search/search.vue'
const homeRoutes: RouteRecordRaw = {
  path: '/search/:value',
  name: Search.name,
  component: Search,
  meta: {
    title: '搜索'
  }
}

export default homeRoutes
