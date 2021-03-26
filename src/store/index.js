import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inTiezi: false,
    isLogin: false,
    user: ''
  },
  mutations: {
    changeStatus (state) {
      state.isLogin = !state.isLogin
    },
    changeTieziStatus (state, newval) {
      state.inTiezi = newval
    },
    changeUser (state, userinfo) {
      state.user = userinfo
    },
    changeName (state, newName) {
      state.user.username = newName
    },
    changeGender (state, newval) {
      state.user.gender = newval
    },
    changeIntroduction (state, newval) {
      state.user.introduction = newval
    }
  },
  actions: {
  },
  modules: {
  }
})
