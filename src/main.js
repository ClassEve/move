import Vue from 'vue'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
import FastClick from 'fastclick'

FastClick.attach(document.body)

Vue.use(MintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
