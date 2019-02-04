<template>
  <div id="root" data-server-rendered="true" class="root">
    <main>
      <Navbar/>
      <router-view/>
    </main>
    <Footer/>
    <Modals/>
  </div>
</template>
<script>

  import Navbar from "./controls/navbar";
  import Footer from "./controls/footer";
  import Modals from "./modals/placeholder";

  export default {
    name: 'App',
    components: {Navbar, Footer, Modals}
  };
</script>