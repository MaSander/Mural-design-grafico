import Vue from 'vue';
import App from './App.vue';

//Modulo para fazer requisições
import VueResource from 'vue-resource';
Vue.use(VueResource);

import VueRouter from 'vue-router';
Vue.use(VueRouter)
import { routes } from './routes';

const router = new VueRouter({ 
  routes,
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
