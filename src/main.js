// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueResource)
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
