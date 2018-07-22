import vacanciesProvider from '../providers/vacancies';
export default {
    state: {
        vacancies: [],
        count: 0,
        progress: false,
        error: false
    },
    mutations: {
        progress(state, status) {
            state.progress = status;
        },
        error(state, status) {
            state.error = status;
        },
        vacancies(state, vacancies) {
            state.vacancies = vacancies;
        },
        count(state, count) {
            state.count = count;
        },
    },
    actions: {
        async search({commit, state}, params){
            let data = await vacanciesProvider.getVacancies(params);
            commit('vacancies', data.vacancies);
            commit('count', data.vacanciesCount);
        }
    },
    getters: {}
}