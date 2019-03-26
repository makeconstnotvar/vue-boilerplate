import App from './app'
import Vue from 'vue'

import {createStore} from './store'
import {createRouter} from './router'
import {Modals} from './modals'
import {sync} from 'vuex-router-sync'
import 'filters/date'

export function createApp() {


  const router = createRouter();
  const store = createStore();
  sync(store, router);

  Vue.use(Modals, {store});

  const app = new Vue({
    store,
    router,
    render: h => h(App)
  });

  return {app, router, store}
}
