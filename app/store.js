import Vuex from 'vuex';
import Vue from 'vue';
import vacancies from './stores/vacancies';
import filter from './stores/filter';
import cities from './stores/cities';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    vacancies,
    filter,
    cities
  }
});
export default store;