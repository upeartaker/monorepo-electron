import { createStore, Store, StoreOptions, useStore } from 'vuex'
import { App, InjectionKey } from 'vue'
import { testModule } from '/@/store/modules/test'
import { RootState } from '/@/store/vuex'

const opts: StoreOptions<RootState> = {
  state() {
    return {
      count: 1
    }
  },
  modules: {
    test: testModule
  },
  plugins: []
}

if (window.desktop) {
  // electron vuex
  opts.plugins!.push()
}

const store = createStore<RootState>(opts)

const key: InjectionKey<Store<RootState>> = Symbol()

const setupVuex = (app: App) => [app.use(store, key)]

const useRootStore = () => {
  return useStore(key)
}

export { setupVuex, useRootStore }
