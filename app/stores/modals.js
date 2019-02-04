export default {
  state: {
    isVisible: false
  },
  mutations: {
    show(state) {
      state.isVisible = true;
    },
    hide(state) {
      state.isVisible = false;
    }
  }
}
