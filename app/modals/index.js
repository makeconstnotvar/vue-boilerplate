const Modals = {
  instances: {},
  install(Vue, {store}) {
    if (!store) {
      throw new Error("Please provide vuex store.");
    }
    Vue.prototype.$showModal = function (componentObj) {
      componentObj.store = store;
      let name = componentObj.name;
      let instance = Modals.instances[name];
      if (!instance) {
        let Component = Vue.extend(componentObj);
        instance = new Component();
        Modals.instances[name] = instance;
      }
      let ref = instance.$mount("#modal-root");
      ref.$el.id = "modal-root";
      store.commit("showModal");
    };

    Vue.prototype.$hideModal = function () {
      store.commit("hideModal");
    };

    Vue.prototype.$removeModal = function (componentObj) {
      let instance = Modals.instances[componentObj.name];
      store.commit("hideModal");
      instance.$destroy();
    }
  }
};
export {Modals}
