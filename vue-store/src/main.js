// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import {routes} from './router/index'
import Vuex from 'vuex'
import {storage} from './store/index'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

window.$ = window.jQuery = require('jquery')

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

Vue.use(Vuex)

// eslint-disable-next-line new-cap
const store = new Vuex.Store(storage)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
