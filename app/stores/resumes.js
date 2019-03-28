import resumesProvider from "../providers/resumes";

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
    async fetchResumes({dispatch, commit}, params) {
      dispatch('resultsProgressOn');
      let data = await resumesProvider.fetch(params);
      dispatch('resultsProgressOff');
      commit('changeVacancies', data.vacancies);
      commit('changeCount', data.count);
    }
  }
}
