import VueRouter from "vue-router";
import PageInfo from './pages/info';
import PageLogin from './pages/login';
import PageVacancies from './pages/vacancies';
import ModalCity from './modals/city';
import Vue from 'vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/info', component: PageInfo },
        { path: '/login', component: PageLogin },
        { path: '/vacancies', component: PageVacancies },
        { path: '/modal/city', component: ModalCity }
    ]
})