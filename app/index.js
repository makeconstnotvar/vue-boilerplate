import App from './app'
import Vue from 'vue'
import { createStore } from './store'
import { createRouter } from './router'
import { sync } from 'vuex-router-sync'
import '../public/styles/styles.scss'

export function createApp () {

  const router = createRouter();
  const store = createStore();
  sync(store, router);

  const app = new Vue({
    store,
    router,
    render: h => h(App)
  });

  return { app, router, store }
}