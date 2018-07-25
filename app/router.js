import VueRouter from "vue-router";
import Info from './pages/info';
import Login from './pages/login';
import Vacancies from './pages/vacancies';
import Vue from 'vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/info', component: Info },
        { path: '/login', component: Login },
        { path: '/vacancies', component: Vacancies }
    ]
})