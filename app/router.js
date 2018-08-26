import VueRouter from "vue-router";
import PageLogin from './pages/login';
import PageHome from './pages/home';
import PageVacancies from './pages/vacancies';
import ModalCity from './modals/city';
import Vue from 'vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {name: 'home', path: '/', component: PageHome},
    {name: 'login', path: '/login', component: PageLogin},
    {name: 'vacancies', path: '/vacancies/:city?', component: PageVacancies},
    {name: 'modal-city', path: '/modal/city', component: ModalCity}
  ]
})