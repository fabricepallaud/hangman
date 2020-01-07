import Vue from 'vue'
import App from './App.vue'

import VueSimpleSVG from 'vue-simple-svg'

import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.use(VueSimpleSVG)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
