<template>
    <div class="container container-fluid">
        <h1>Список вакансий</h1>
        <ul>
            <li v-for="item in items">{{item.title}}</li>
        </ul>
    </div>
</template>
<script>
    import {mapState} from 'vuex';

    export default {
        name: 'Vacancies',
        mounted() {
            console.log('вакансии mounted');
            this.$store.dispatch('search');
        },
        updated() {
            console.log('вакансии updated');
        },
        computed: {
            ...mapState({
                items: state => state.vacancies.items,
            })
        }
    }
</script>