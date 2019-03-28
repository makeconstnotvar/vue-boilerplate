

export default {
  state: {
    isVisible: false
  },
  mutations: {
    showModal(state) {
      state.isVisible = true;
    },
    hideModal(state) {
      state.isVisible = false;
    }
  }
}
