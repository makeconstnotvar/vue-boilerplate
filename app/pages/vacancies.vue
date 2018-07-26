<template>
    <div class="container container-fluid">
        <h1>Список вакансий</h1>
        <div class="row">
        <div class="filter-box">
            <SearchFilter/>
        </div>
        <div class="result-box">
            <div v-for="item in items">{{item.title}}</div>
        </div>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import SearchFilter from '../controls/search-filter';

    export default {
        name: 'Vacancies',
        components: {SearchFilter},
        mounted() {
            console.log('Vacancies mounted');
            this.$store.dispatch('search');
            this.$store.dispatch('getFilter');
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