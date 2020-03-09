import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
// import './node_modules/amfe-flexible/index.js'
// import Vant from 'vant';
import '@vant/touch-emulator';
import 'vant/lib/index.css';
import './libs/rem.js';
import initVantComponent from '@/vant-ui/vant-ui';//按需引入减少代码体积
// 导入vant组件
initVantComponent();

Vue.config.productionTip = false
// Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
