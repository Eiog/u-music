import { RouteRecordRaw } from 'vue-router'
import Video from '@@/views/video/video.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/video',
    name: Video.name,
    component: Video,
    meta: {
      title: '视频'
    }
  }
]

export default routes
