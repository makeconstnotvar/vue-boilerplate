<template>
    <div>
        <Search @onSearch="changeText"></Search>
        <div class="container">
            <h1>Список вакансий</h1>
            <router-link to="/vacancies?test=1">переход</router-link>
        </div>
        <div class="container d-flex">
            <div class="side-box">
                <FilterList @onApply="changeFilter"/>
            </div>
            <div class="grow">
                <VacancyItem v-for="vacancy in vacancies" :vacancy="vacancy"/>
                <Pager :total="total" @changePage="changePage" @changeSize="changeSize" :current="page" :size="pageSize"/>
            </div>
        </div>
    </div>
</template>
<script>
  import {mapState} from 'vuex';
  import FilterList from '../controls/filter-list';
  import Pager from '../controls/pager';
  import Search from '../controls/search';
  import VacancyItem from '../controls/vacancy-item';


  export default {
    name: 'PageVacancies',
    components: {FilterList, Pager, Search, VacancyItem},
    created() {
      this.$store.dispatch('fetchVacancies');
      this.$store.dispatch('fetchFilter');
    },
    methods: {
      changeText(text) {
        this.$store.dispatch('changeSearchText', text);
      },
      changeFilter() {
        this.$store.dispatch('applyFilter').then(({query, params}) => {
          this.$router.push({name: 'vacancies', query, params})
        });

      },
      changePage(page) {
        this.$store.dispatch('changePage', page);
      },
      changeSize(size) {
        this.$store.dispatch('changeSize', size);
      }
    },
    computed: {
      ...mapState({
        vacancies: state => state.vacancies.items,
        total: state => state.vacancies.count,
        page: state => state.filter.page,
        pageSize: state => state.filter.pageSize,
      })

    }
  }
</script>