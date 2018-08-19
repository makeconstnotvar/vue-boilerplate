import citiesProvider from 'providers/cities'

export default {
  state: {
    selected: {name: 'не выбран'},
    items: [],
    drops: []
  },
  mutations: {
    setSelected(state, selected) {
      state.selected = selected
    },
    setItems(state, items) {
      state.items = items
    },
    setDrops(state, drops) {
      state.drops = drops
    },
  },
  actions: {
    async fetchCities({commit, state}, params) {
      let cities = await citiesProvider.fetch(params);
      commit('setItems', cities)
    },
    async searchCity({commit, state}, params) {
      let cities = await citiesProvider.search(params);
      commit('setDrops', cities)
    },
    setSelected({commit, state}, city) {
      commit('setSelected', city)
    }
  }
}