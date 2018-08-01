<template>
    <div class="container">
        <h1>Список вакансий</h1>
        <div class="row">
            <div class="side-box">
                <SearchFilter/>
            </div>
            <div class="grow">
                <div v-for="item in items">{{item.title}}</div>
            </div>
        </div>

    </div>
</template>
<style lang="scss">
    .side-box{
        width:250px;
    }
</style>
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