import { createApp } from 'vue'
import App from './App.vue'
// css
import './assets/styles/main.scss'
// plugin
import setupUtils from './plugin/utils'
import setupAntd from './plugin/ant-design'

// router
import { setupRouter } from './router/router'
import { setupVuex } from '/@/store'

const app = createApp(App)

setupRouter(app)
setupVuex(app)
setupUtils(app)
setupAntd(app)

app.mount('#app')
