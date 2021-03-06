import Vue from 'vue'
import App from './App.vue'
import router from "./Router/index"
import VueResource from "vue-resource";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(VueResource)
new Vue({
  el:'#app',
  router,
  render: (h)=> h(App),
}).$mount('#app')
