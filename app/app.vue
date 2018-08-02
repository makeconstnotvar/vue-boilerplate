<template>
    <Layout/>
</template>

<script>

  import store from "./store";
  import router from "./router";
  import Layout from "./controls/layout";

  export default {
    name: 'App',
    el: '#root',
    components: {Layout},
    store,
    router
  };
</script>