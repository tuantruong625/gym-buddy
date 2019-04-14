import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Reset from '@/assets/css/resets.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faDumbbell, faUser, faCalendar, faBullseye } from '@fortawesome/free-solid-svg-icons'


library.add(faHome, faDumbbell, faUser, faCalendar, faBullseye)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  Reset,
  render: h => h(App)
}).$mount('#app')
