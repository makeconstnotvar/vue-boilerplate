<template>
    <div>
        <navbar/>
        <h1>Главный шаблон</h1>
        <router-view/>
    </div>
</template>
<script>
    import Vue from "vue";
    import navbar from './navbar';

    export default Vue.component('layout', {
        components: {navbar},

    })
</script>