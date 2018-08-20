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
    async fetchVacancies({commit}, params) {
      let data = await vacanciesProvider.fetch(params);
      commit('changeVacancies', data.vacancies);
      commit('changeCount', data.count);
    },
  }
}