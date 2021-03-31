window.Vue = require('vue').default;

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import Vue from 'vue';
window.Fire = new Vue();

import VueRouter from 'vue-router'
Vue.use(VueRouter);

// Vue.component('homex', require('./components/Home.vue').default);
import homex from './components/Home.vue'

const AllMans = resolve => {
    require.ensure([], require => resolve(require('./components/AllMans.vue')), 'AllMans');
};
const Customers = resolve => {
    require.ensure([], require => resolve(require('./components/Customers.vue')), 'Customers');
};
const Vendors = resolve => {
    require.ensure([], require => resolve(require('./components/Vendors.vue')), 'Vendors');
};
const UserRole = resolve => {
    require.ensure([], require => resolve(require('./components/UserRole.vue')), 'UserRole');
};


const routes = [
    { path: '/allmans', component: AllMans },
    { path: '/customers', component: Customers },
    { path: '/vendors', component: Vendors },
    { path: '/userrole', component: UserRole },
];

const router = new VueRouter({
      mode:'history',
    routes 
  });

const home= new Vue({
    el : '#home',
    router,
    render: h=>h(homex)
});