import ModalTest from '../modals/test.vue'
import Vue from 'vue'

const modals = {
  items: [
    ModalTest
  ],
  instances: {},
  connect(store) {
    this.items.forEach(item => {
      item.store = store;
      let Component = Vue.extend(item);
      let instance = new Component();
      this.instances[item.name] = instance;
    })
  },
  mount(name) {
    this.instances[name].$mount('#modal-root');
  }
};
export {modals}
