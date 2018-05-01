<template>
  <Layout/>
</template>

<script>
import Vue from "vue";
import compiler from "vue-template-compiler";
import VueRouter from "vue-router";
import store from "./store";
import router from "./router";
import Layout from "./controls/layout";

export default {
  name: 'App',
  components: { Layout },
  store,
  router,
  compiler
};
</script>