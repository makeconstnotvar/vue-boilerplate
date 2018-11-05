<template>
    <div id="app" data-server-rendered="true" class="root">
        <main>
            <Navbar/>
            <router-view/>
        </main>
        <Footer/>
    </div>
</template>
<script>

  import Navbar from "./controls/navbar";
  import Footer from "./controls/footer";

  export default {
    name: 'App',

    components: {Navbar, Footer}
  };
</script>