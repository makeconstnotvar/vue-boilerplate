import Vuex from 'vuex';
import Vue from 'vue';
import vacancies from './stores/vacancies';
import filter from './stores/filter';
import cities from './stores/cities';
import home from './stores/home';

Vue.use(Vuex);

export function createStore () {
  let store =  new Vuex.Store({
    state: {
      resultsProgress: false,
      resultsProgressPending: false,
      filterProgress: false,
      filterProgressPending: false
    },
    mutations: {
      resultsProgress(state, status) {
        state.resultsProgress = status;
      },
      resultsProgressPending(state, status) {
        state.resultsProgressPending = status;
      },
      filterProgress(state, status) {
        state.filterProgress = status;
      },
      filterProgressPending(state, status) {
        state.filterProgressPending = status;
      },
    },
    actions: {
      async resultsProgressOn({commit, state}) {
        commit('resultsProgressPending', true);
        setTimeout(() => {
          state.resultsProgressPending && commit('resultsProgress', true);
        }, 200)
      },
      resultsProgressOff({commit}) {
        console.log('pending false');
        commit('resultsProgressPending', false);
        commit('resultsProgress', false);

      },
      async filterProgressOn({commit, state}) {
        commit('filterProgressPending', true);
        setTimeout(() => {
          state.filterProgressPending && commit('filterProgress', true);
        }, 200)
      },
      filterProgressOff({commit}) {
        commit('filterProgress', false);
        commit('filterProgressPending', false);
      }
    },
    modules: {
      vacancies,
      filter,
      cities,
      home
    }
  });
  return store;
}
