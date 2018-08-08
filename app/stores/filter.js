import filterProvider from '../providers/filter';

export default {
  state: {
    items: {},
    page: 1,
  },
  mutations: {
    progress(state, status) {
      state.progress = status;
    },
    error(state, status) {
      state.error = status;
    },
    filter(state, items) {
      state.items = items;
    },
    changeItem(state, payload) {
      state.items[payload.key] = payload;
    },
    page(state, page) {
      state.page = page;
    }
  },
  actions: {
    async getFilter({commit, state}, params) {
      let filter = await filterProvider.getFilter(params);
      commit('filter', filter)
    },
    changeItem({commit}, item) {
      commit('changeItem', item);
    },
    changePage({commit, state},page){
      commit('page', page);
    }
  },
  getters: {}
}