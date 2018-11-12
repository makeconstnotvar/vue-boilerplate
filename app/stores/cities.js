import citiesProvider from 'providers/cities'

export default {
  state: {
    items: [],
    drops: []
  },
  mutations: {
    changeItems(state, items) {
      state.items = items
    },
    changeDrops(state, drops) {
      state.drops = drops
    },
    clearSearch({commit}) {
      commit('changeDrops', [])
    }
  },
  actions: {
    async fetchCities({commit}, params) {
      let cities = await citiesProvider.fetch(params);
      commit('changeItems', cities)
    },
    async searchCity({commit}, params) {
      let cities = await citiesProvider.search(params);
      commit('changeDrops', cities)
    }
  }
}