import Vuex from 'vuex';
import Vue from 'vue';
import vacancies from './stores/vacancies';
import filter from './stores/filter';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        vacancies,
        filter
    }
});
export default store;