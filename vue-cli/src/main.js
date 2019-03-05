import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible';
// import 'postcss-pxtorem';
import store from './store/index';
import router from './router/index';
// import './assets/js/rem.js';
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
