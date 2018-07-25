<template>
    <h1>Список вакансий</h1>
    <ul>
        <li>1</li>
        <li>2</li>
    </ul>
</template>
<script>
    import {mapState} from 'vuex';

    export default {
        name: 'Vacancies',
        mounted() {
            console.log('вакансии mounted');
            this.$store.dispatch('search');
        },
        updated(){
            console.log('вакансии updated');
        },
        computed: mapState([
            'vacancies.items'
        ])
    }
</script>