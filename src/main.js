import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//引入vue-resource
import VueResource from 'vue-resource'
//使用VueResource 
Vue.use(VueResource)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//重置样式
import './assets/css/reset.css'
//全局样式
import './assets/css/global.css'
//网页样式
import './assets/css/site.min.css'

//引入axios
import axios from "axios"
//使用axios
Vue.prototype.axios = axios

// import 'lib-flexible/flexible'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
