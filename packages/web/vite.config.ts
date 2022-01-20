import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    commonjsOptions: {
      include: [/node_modules/]
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    ViteComponents({
      customComponentResolvers: [AntDesignVueResolver()]
    })
  ],
  resolve: {
    alias: [
      {
        find: /^\/@\//,
        replacement: resolve(__dirname, './src') + '/'
      }
    ]
  },
  css: {
    // css 预处理
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/assets/styles/_variable.scss';`
      }
    }
  },
  optimizeDeps: {
    include: []
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
