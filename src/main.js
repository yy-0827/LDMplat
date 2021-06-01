// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './public/router'
import store from './public/store'
import './public/assets/css/main.css'
import API from './public/api'
import axios from 'axios'

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$api = API
Vue.prototype.$axios = axios

/* eslint-disable no-new */

/* 引入模块/文件router、store、App */
/* Vue实例的声明及挂载 */
new Vue({
  el: '#app',//挂载元素
  router,//vue-router
  store,//vuex状态管理
  components: { App },//页面组件
  template: '<App/>'//页面模板
})
