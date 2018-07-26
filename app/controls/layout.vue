<template>
    <div class="root">
        <main>
            <Navbar/>
            <div class="container">
                <h1>Главный шаблон</h1>
            </div>
            <hr/>
            <router-view/>
        </main>
        <Footer/>
    </div>
</template>
<script>
  import Navbar from "./navbar";
  import Footer from "./footer";

  export default {
    name: "Layout",
    components: {Navbar, Footer}
  };
</script>