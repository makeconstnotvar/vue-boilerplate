import {modals} from "../modals";

export default {
  state: {
    isVisible: false
  },
  mutations: {
    showTestModal(state) {
      modals.mount('ModalTest');
      state.isVisible = true;
    },
    hideModal(state) {
      state.isVisible = false;
    }
  }
}
