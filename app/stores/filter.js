import filterProvider from '../providers/filter';

export default {
  state: {
    items: {},
    selectedCity: {name: 'не выбран'},
    page: 1,
    pageSize: 10
  },
  mutations: {
    changeSelectedCity(state, selected) {
      state.selectedCity = selected
    },
    changeFilter(state, items) {
      state.items = items;
    },
    changeItem(state, payload) {
      state.items[payload.key] = payload;
    },
    changePage(state, page) {
      state.page = page;
    },
    changePageSize(state, size) {
      state.page = 1;
      state.pageSize = size;
    }
  },
  actions: {
    async fetchFilter({commit, state}, params) {
      let filter = await filterProvider.fetch(params);
      commit('changeFilter', filter)
    },
    changeItem({commit}, item) {
      commit('changeItem', item);
    },
    changeSelectedCity({commit}, city) {
      commit('changeSelectedCity', city);
    },
    changePage({commit, state}, page) {
      commit('changePage', page);
    },
    changeSize({commit, state}, size) {
      commit('changePageSize', size);
    }
  },
  getters: {}
}