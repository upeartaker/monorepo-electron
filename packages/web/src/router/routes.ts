import { RouteRecordRaw } from 'vue-router'
import BaseLayout from '/@/layout/BaseLayout.vue'

declare module 'vue-router' {
  interface RouteMeta {
    isLoading?: boolean
  }
}

const normalRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: BaseLayout,
    name: 'root',
    redirect: '/message',
    children: [
      {
        path: 'message',
        component: import('/@/views/message/index.vue'),
        name: 'MessageView'
      }
    ]
  }
]

export { normalRoutes }
