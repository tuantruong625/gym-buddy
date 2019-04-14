import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Reset from '@/assets/css/resets.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  Reset,
  render: h => h(App)
}).$mount('#app')
