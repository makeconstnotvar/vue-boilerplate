import vacanciesProvider from '../providers/vacancies';

export default {
  state: {
    items: [],
    count: 0
  },
  mutations: {

    changeVacancies(state, vacancies) {
      state.items = vacancies;
    },
    changeCount(state, count) {
      state.count = count;
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
  }
}