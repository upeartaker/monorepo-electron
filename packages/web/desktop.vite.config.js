/* eslint-env node */

const { join } = require('path')
const { builtinModules } = require('module')
const vue = require('@vitejs/plugin-vue')

const PACKAGE_ROOT = __dirname

/**
 * @type {import('vite').UserConfig}
 * @see https://vitejs.dev/config/
 */
const config = {
  mode: process.env.MODE,
  root: PACKAGE_ROOT,
  resolve: {
    alias: {
      '/@/': join(PACKAGE_ROOT, 'src') + '/'
    }
  },
  plugins: [vue()],
  base: '',
  server: {
    fs: {
      strict: true
    }
  },
  build: {
    sourcemap: true,
    target: `chrome58`,
    outDir: 'dist',
    assetsDir: '.',
    rollupOptions: {
      input: 'index.html',
      external: [...builtinModules.flatMap((p) => [p, `node:${p}`])]
    },
    emptyOutDir: true,
    brotliSize: false
  },
  test: {
    environment: 'happy-dom'
  }
}

module.exports = config
