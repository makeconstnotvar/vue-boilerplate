import homeProvider from 'providers/home';

export default {
  state: {
    statistic: {},
    seekerQueries: [],
    seekerRegions: [],
    employerQueries: [],
    employerRegions: [],
    specs: []
  },
  mutations: {
    changeStatistic(state, statistic) {
      state.statistic = statistic
    },
    changeSeekerQueries(state, queries) {
      state.seekerQueries = queries;
    },
    changeSeekerRegions(state, regions) {
      state.seekerRegions = regions;
    },
    changeEmployerQueries(state, queries) {
      state.employerQueries = queries;
    },
    changeEmployerRegions(state, regions) {
      state.employerRegions = regions;
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
      commit('changeSeekerQueries', queries);
      commit('changeSeekerRegions', regions);
    },
    async fetchEmployerQueries({commit}) {
      let {queries, regions} = await homeProvider.topEmployerQueries();
      commit('changeEmployerQueries', queries);
      commit('changeEmployerRegions', regions);
    },
    async fetchStatistic({commit}) {
      let statistic = await homeProvider.statistic();
      commit('changeStatistic', statistic)
    }
  }
}