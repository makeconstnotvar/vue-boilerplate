import filterProvider from '../providers/filter';
export default {
    state: {
        filter: {}
        },
    mutations: {
        progress(state, status) {
            state.progress = status;
        },
        error(state, status) {
            state.error = status;
        },
        filter(state, filter) {
            state.filter = filter;
        },
    },
    actions: {
        async getFilter(){
            let data =
        }
    },
    getters: {}
}