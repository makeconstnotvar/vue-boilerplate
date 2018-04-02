import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router'
import store from './store'
import router from './router'
import layout from './controls/layout';
Vue.use(VueRouter);
//Vue.use(Vuex);

new Vue({
    el: '#root',
    components:{layout},
    template:`<layout/>`,
    store,
    router
});