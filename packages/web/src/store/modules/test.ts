import { Module } from 'vuex'

const testModule: Module<any, any> = {
  namespaced: true,
  state() {
    return {
      a: 10
    }
  }
}

export { testModule }
