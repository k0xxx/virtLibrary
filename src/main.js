import Vue from 'vue';

import router from './router/index.js';
//import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

import Axios from 'axios';
Vue.prototype.$http = Axios;

import App from './App.vue';

//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap-vue/dist/bootstrap-vue.css';

//Vue.use(BootstrapVue);

const root = new Vue({
  router,
  render: h => h(App),
})

document.addEventListener('DOMContentLoaded', () => {
  root.$mount('#mainView');
})