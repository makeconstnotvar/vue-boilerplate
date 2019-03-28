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
        instance.$mount();
      }
      let root = document.getElementById('modal-root');
      if (root.firstElementChild !== instance.$el) {
        root.innerHTML = '';
        root.appendChild(instance.$el);
      }
      store.commit("showModal");
    };
  
    Vue.prototype.$hideModal = function () {
      store.commit("hideModal");
    };
  
    Vue.prototype.$removeModal = function (componentObj) {
      let instance = Modals.instances[componentObj.name];
      if (instance) {
        let root = document.getElementById('modal-root');
        if (root.firstElementChild === instance.$el) {
          store.commit("hideModal");
          root.innerHTML = '';
        }
        instance.$destroy();
      }
    }
  }
};
export {Modals}
