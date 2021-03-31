
require('./bootstrap');

window.Vue = require('vue').default;
import Vue from 'vue';

window.Fire = new Vue();

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

const About = resolve => {
    require.ensure([], require => resolve(require('./components/About.vue')), 'About');
};
const Contact = resolve => {
    require.ensure([], require => resolve(require('./components/Contact.vue')), 'Contact');
};
const Login = resolve => {
  require.ensure([], require => resolve(require('./components/Login.vue')), 'Login');
};
const Register = resolve => {
  require.ensure([], require => resolve(require('./components/Register.vue')), 'Register');
};
const Users = resolve => {
  require.ensure([], require => resolve(require('./components/Users.vue')), 'Users');
};
import Home from './components/Home.vue'
const routes = [
    {path:'/about', component: About },
    {path:'/contact', component: Contact },
    {path:'/login', component: Login},
    {path:'/register', component: Register},
    {path:'/users', component: Users},
  ];

  const router = new VueRouter({
      mode:'history',
    routes 
  });
    
  const app = new Vue({
    el: '#app',
    router,
    render: r=>r(Home)
  });