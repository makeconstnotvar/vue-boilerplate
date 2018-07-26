<template>
    <Layout/>
</template>

<script>

  import store from "./store";
  import router from "./router";
  import Layout from "./controls/layout";
  import Filter from "./controls/search-filter";

  export default {
    name: 'App',
    el: '#root',
    components: {Layout},
    store,
    router
  };
</script>