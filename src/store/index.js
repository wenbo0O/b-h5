import Vue from 'vue'
import Vuex from 'vuex'
// huwenbo
import Login from './modules/Login' // 登录页面


Vue.use(Vuex)
const state = {
  loading: false
}
// 全局loading
const mutations = {
  SETLOADING(state, payload) {
    // 变更状态
    state.loading = payload
  }
}
const store = new Vuex.Store({
  modules: {
    Login,

  },
  state,
  mutations
})

export default store
