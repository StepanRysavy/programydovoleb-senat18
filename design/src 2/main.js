// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import store from './store/store';
import router from './router';
import App from './layout/app/app';
import './assets/my-style.scss';

/* eslint-disable no-unused-vars */
var URLSearchParams = require('url-search-params');

Vue.config.productionTip = false;

/* eslint-disable no-unused-vars */
const unsync = sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
