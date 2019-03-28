import authProvider from '../providers/auth';

export default {
  state: {
    info: {}
  },
  mutations: {
    changeInfo(state, info) {
      state.info = info;
    },
  },
  actions: {
    async login({dispatch, commit}, data) {
      let response = await authProvider.login(data);
      commit('changeInfo', response.data.data)
    }
  }
}
