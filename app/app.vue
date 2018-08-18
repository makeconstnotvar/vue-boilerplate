<template>
    <div class="root">
        <main>
            <Navbar/>
            <router-view/>
        </main>
        <Footer/>
    </div>
</template>
<script>

  import store from "./store";
  import router from "./router";
  import Navbar from "./controls/navbar";
  import Footer from "./controls/footer";

  export default {
    name: 'App',
    el: '#root',
    components: {Navbar, Footer},
    store,
    router
  };
</script>