<template>
    <div class="container">
        <h1>Список вакансий</h1>
        <div class="row">
            <div class="side-box">
                <FilterList/>
            </div>
            <div class="grow">
                <div v-for="vacancy in vacancies">{{vacancy.title}}</div>
                <Pager :total="total" @changePage="changePage" @changeSize="changeSize" :current="page" :size="pageSize"/>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .side-box {
        width: 250px;
        margin-right: 15px;
    }
</style>
<script>
  import {mapState} from 'vuex';
  import FilterList from '../controls/filter-list';
  import Pager from '../controls/pager';


  export default {
    name: 'Vacancies',
    components: {FilterList, Pager},
    mounted() {
      this.$store.dispatch('search');
      this.$store.dispatch('getFilter');
    },
    updated() {
    },
    methods: {
      changePage(page) {
        this.$store.dispatch('changePage', page);
      },
      changeSize(page) {
        this.$store.dispatch('changeSize', pageSize);
      }
    },
    computed: {
      ...mapState({
        vacancies: state => state.vacancies.items,
        total: state => state.vacancies.count,
        page: state => state.filter.page,
        pageSize: state => state.filter.pageSize
      })
    }
  }
</script>