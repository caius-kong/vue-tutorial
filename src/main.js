// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'

Vue.prototype.$axios = axios // axios 和 vue-resource 不太一样，并不能 use。此处选择"改写原型链"，在其他组件中使用this.$ajax.get()就相当于axios.get()
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', // 入口div，index.html
  router, // 组件路由
  store,
  ...App
  // template: '<App/>', // 独立构建<App></App>
  // components: { App } // 上面这个template所指的组件
})
