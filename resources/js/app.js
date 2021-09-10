
require('./bootstrap');

import router from "./routes";
import VueRouter from "vue-router";
import Vue from "vue";

window.Vue = require('vue').default;


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('directory', require('./components/Directory.vue').default);
Vue.component('register', require('./components/Register.vue').default);
Vue.component('login', require('./components/Login.vue').default);
Vue.component('dashboard', require('./components/Dashboard.vue').default);

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router,
});
