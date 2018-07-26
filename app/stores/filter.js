import filterProvider from '../providers/filter';

export default {
    state: {
        items: {}
    },
    mutations: {
        progress(state, status) {
            state.progress = status;
        },
        error(state, status) {
            state.error = status;
        },
        filter(state, filter) {
            let items = [];
            for (let key in filter) {
                items.push({key: key, possibleValues: filter[key]})
            }
            state.items = items;
        },
    },
    actions: {
        async getFilter({commit, state}, params) {
            let filter = await filterProvider.getFilter(params);
            commit('filter', filter)
        }
    },
    getters: {}
}