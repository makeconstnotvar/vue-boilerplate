import vacanciesProvider from '../providers/vacancies';

export default {
  state: {
    items: [],
    hints: [],
    count: 0
  },
  mutations: {
    changeVacancies(state, vacancies) {
      state.items = vacancies;
    },
    changeCount(state, count) {
      state.count = count;
    },
    changeHints(state, hints) {
      state.hints = hints;
    },
  },
  actions: {
    async fetchVacancies({dispatch,commit}, params) {
      dispatch('resultsProgressOn');
      let data = await vacanciesProvider.fetch(params);
      dispatch('resultsProgressOff');
      commit('changeVacancies', data.vacancies);
      commit('changeCount', data.count);
    },
    async fetchHits({dispatch, commit}, searchText) {
      let hints = await vacanciesProvider.ferchHits(searchText);
      commit('changeHints', hints.result);
    }
  }
}