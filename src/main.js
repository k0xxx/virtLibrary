import Vue from 'vue';

import router from './router/index.js';
//import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

import Axios from 'axios';
Vue.prototype.$http = Axios;

import App from './App.vue';

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue';
Vue.component('icon', Icon)

const root = new Vue({
  router,
  render: h => h(App),
})

document.addEventListener('DOMContentLoaded', () => {
  root.$mount('#mainView');
})