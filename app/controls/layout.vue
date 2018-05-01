<template>
    <div>
        <Navbar/>
        <h1>Главный шаблон</h1>
        <router-view/>
    </div>
</template>
<script>
import Navbar from "./navbar";

export default {
  name: "Layout",
  components: { Navbar }
};
</script>