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
        filter(state, items) {

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