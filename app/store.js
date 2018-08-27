import Vuex from 'vuex';
import Vue from 'vue';
import vacancies from './stores/vacancies';
import filter from './stores/filter';
import cities from './stores/cities';
import home from './stores/home';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    vacancies,
    filter,
    cities,
    home
  }
});
export default store;