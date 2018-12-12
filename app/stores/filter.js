import filterProvider from '../providers/filter';
import {cleanObject} from "./utils";

let defaultState = {
  items: {},
  selectedCity: {name: 'не выбран'},
  searchText: '',
  page: 1,
  pageSize: 10,
  sort: 'ddate',
  period: 'all'
}
export default {
  state: {...defaultState},
  mutations: {
    changeSelectedCity(state, selected) {
      state.selectedCity = selected;
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
    changeSort(state, sort) {
      state.sort = sort;
    },
    changePeriod(state, period) {
      state.period = period;
    },
    changeSize(state, size) {
      state.page = 1;
      state.pageSize = size;
    },
    reset(state) {
      Object.assign(state, defaultState, {selectedCity: state.selectedCity})
    },
    chageRegionHints(state, hints) {
      state.items.city.extender.hints = hints;
    }
  },
  actions: {
    async fetchFilter({commit, state}, params) {
      let {selectedCity, items} = await filterProvider.fetch(params);
      commit('changeSelectedCity', selectedCity);
      commit('changeFilter', items);
    },
    async fetchHints({commit, state}, {fetch, params}) {
      let hints = await fetch(params);
      commit('chageRegionHints', hints);
    },
    getQuery({state}) {
      let items = Object.values(state.items);
      let checked = items.filter(item => Array.isArray(item.selected) ? !!item.selected.length : !!item.selected);
      let queries = checked.map(({key, selected}) => {
        if (key === 'sch')
          return {[key]: selected.reduce((a, b) => a + b, 0)};
        else if (Array.isArray(selected))
          return {[key]: selected.join('+')};
        else
          return {[key]: selected}
      });
      queries.push({searchText: state.searchText});
      queries.push({page: state.page});
      queries.push({size: state.size});
      queries.push({pr: state.period});
      queries.push({sort: state.sort});
      let query = queries.reduce((accumulator, query) => Object.assign(accumulator, query), {});
      query.city = query.city || state.selectedCity.code;
  
      return cleanObject(query);
    }
  }
}
