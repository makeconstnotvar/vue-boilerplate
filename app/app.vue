<template>
  <div id="root" data-server-rendered="true" class="root">
    <main>
      <Navbar/>
      <router-view/>
    </main>
    <Footer/>
    <Modal/>
  </div>
</template>
<script>

  import Navbar from "./controls/navbar";
  import Footer from "./controls/footer";
  import Modal from "./modals/modal";


  export default {
    name: 'App',
    components: {Navbar, Footer, Modal}
  };
</script>