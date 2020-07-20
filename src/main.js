import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import httpRequest from '@/utils/httpRequest'

Vue.config.productionTip = false
Vue.prototype.$http = httpRequest
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
