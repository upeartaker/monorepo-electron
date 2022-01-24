import { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { normalRoutes } from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: normalRoutes,
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition
    } else {
      return { top: 0 }
    }
  }
})

router.afterEach((to) => {
  if (to.meta.isLoading) {
    //  process loading
  }
})

const setupRouter = (app: App) => {
  app.use(router)
}

export { setupRouter }
