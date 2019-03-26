// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'
import vueResponsive from 'vue-responsive'
import 'vue-responsive/dist/Vue_Responsive.common'
Vue.config.productionTip = false

// enable vuetify
Vue.use(Vuetify)
// enable vue-responsive
// TODO: check if it's working and how to make it work
Vue.use(vueResponsive)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
