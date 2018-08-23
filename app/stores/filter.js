import filterProvider from '../providers/filter';

export default {
  state: {
    items: {},
    selectedCity: {name: 'не выбран'},
    searchText: '',
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
    changeSearchText(state, searchText) {
      state.searchText = searchText;
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
    changeSearchText({commit}, searchText) {
      commit('changeSearchText', searchText);
    },
    changePage({commit, state}, page) {
      commit('changePage', page);
    },
    changeSize({commit, state}, size) {
      commit('changePageSize', size);
    },
    applyFilter({state}) {
      let items = Object.values(state.items);
      let checked = items.filter(item => Array.isArray(item.selected) ? !!item.selected.length : !!item.selected);
      let queries = checked.map(({key, selected}) => {
        return {[key]: Array.isArray(selected) ? selected.join('+') : selected}
      });
      queries.push({searchText: state.searchText});
      queries.push({page: state.page});
      queries.push({size: state.size});
      let query = queries.reduce((accumulator, query) => Object.assign(accumulator, query), {});
      let params = {city: query.city || state.selectedCity.code};
      delete query.city;
      return {query, params}
    }
  }
}