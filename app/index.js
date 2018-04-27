import Vue from 'vue'
import compiler from 'vue-template-compiler'
import VueRouter from 'vue-router'
import store from './store'
import router from './router'
import layout from './controls/layout'

Vue.use(VueRouter);


new Vue({
    el: '#root',
    components:{layout},
    template:'<layout/>',
    store,
    router,
    compiler
});