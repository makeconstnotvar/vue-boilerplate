import VueRouter from "vue-router";
import PageHome from './pages/home';
import PageResumes from './pages/resumes';
import PageVacancies from './pages/vacancies';
import ModalCity from './modals/city';
import Vue from 'vue';

Vue.use(VueRouter);

export function createRouter () {
  return new VueRouter({
    mode: 'history',
    routes: [
      {name: 'home', path: '/', component: PageHome},
      {name: 'resumes', path: '/resumes/:city?', component: PageResumes},
      {name: 'vacancies', path: '/vacancies/:city?', component: PageVacancies},
      {name: 'modal-city', path: '/modal/city', component: ModalCity}
    ]
  })
}
