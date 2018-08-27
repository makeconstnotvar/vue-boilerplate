import homeProvider from 'providers/home';

export default {
  state: {
    statistic: {},
    regions: [],
    queries: [],
    specs: []
  },
  mutations: {
    changeStatistic(state, statistic) {
      state.statistic = statistic
    },
    changeQueries(state, queries) {
      state.queries = queries;
    },
    changeRegions(state, regions) {
      state.regions = regions;
    },
    changeSpecs(state, specs) {
      state.specs = specs
    }
  },
  actions: {
    async fetchSeekerSpecs({commit}) {
      let specs = await homeProvider.topSeekerSpecs();
      commit('changeSpecs', specs)
    },
    async fetchEmployerSpecs({commit}) {
      let specs = await homeProvider.topEmployerSpecs();
      commit('changeSpecs', specs)
    },
    async fetchSeekerQueries({commit}) {
      let {queries, regions} = await homeProvider.topSeekerQueries();
      commit('changeQueries', queries);
      commit('changeRegions', regions);
    },
    async fetchEmployerQueries({commit}) {
      let {queries, regions} = await homeProvider.topEmployerQueries();
      commit('changeQueries', queries);
      commit('changeRegions', regions);
    },
    async fetchStatistic({commit}) {
      let statistic = await homeProvider.statistic();
      commit('changeStatistic', statistic)
    }
  }
}