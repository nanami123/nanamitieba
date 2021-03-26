import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vueAxios from 'vue-axios';
import axios from "axios"

axios.defaults.baseURL = "http://120.26.184.194:3000/"

Vue.use(ElementUI)
Vue.use(vueAxios, axios)

import '@/assets/css/iconfont.css'

Vue.config.productionTip = false

Vue.directive('focus', {
  inserted: function (el) {
    el.children[0].focus()
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
