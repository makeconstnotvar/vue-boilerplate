import VueRouter from "vue-router";
import Info from './pages/info';
import Login from './pages/login';
import Vue from 'vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: '/info', component: Info },
        { path: '/login', component: Login }
    ]
})