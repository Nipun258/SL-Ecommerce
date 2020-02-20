/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import { Form, HasError, AlertError } from 'vform';

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/dashboard', component: require('./components/dashboard.vue').default },
    { path: '/users', component: require('./components/users.vue').default },
    { path: '/profile', component: require('./components/profile.vue').default }

  ]

  const router = new VueRouter({//create router object
    mode: 'history',//adding remove /home/dashborad replace /dashborad
    routes
  })

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});
