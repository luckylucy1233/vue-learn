import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import router from './components/router'
/* eslint-disable no-new */
Vue.use(Router)

new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
