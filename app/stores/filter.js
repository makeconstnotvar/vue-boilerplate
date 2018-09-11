import filterProvider from '../providers/filter';
import {cleanObject} from "./utils";

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
      state.selectedCity = selected;
      state.city = selected.code;
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
    changeCity(state, code) {
      state.city = code;
    },
    changeSize(state, size) {
      state.page = 1;
      state.pageSize = size;
    },
    setFromQuery(state, query) {
      state.items = query;
      state.city = query.city
    },
  },
  actions: {
    async fetchFilter({commit, state}, params) {
      let filter = await filterProvider.fetch(params);
      commit('changeFilter', filter)
    },
    async fetchCity({commit}, id) {
      let city = await filterProvider.fetchCity(id);
      commit('changeSelectedCity', city);
    },
    getQuery({state}) {
      let items = Object.values(state.items);
      let checked = items.filter(item => Array.isArray(item.selected) ? !!item.selected.length : !!item.selected);
      let queries = checked.map(({key, selected}) => {
        return {[key]: Array.isArray(selected) ? selected.join('+') : selected}
      });
      queries.push({searchText: state.searchText});
      queries.push({page: state.page});
      queries.push({size: state.size});
      let query = queries.reduce((accumulator, query) => Object.assign(accumulator, query), {});
      query.city = query.city || state.selectedCity.code;

      return cleanObject(query);
    }
  }
}
