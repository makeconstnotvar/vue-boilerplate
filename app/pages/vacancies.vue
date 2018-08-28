<template>
    <div>
        <Search @onSearch="changeText"></Search>
        <div class="container">
            <h1>Список вакансий</h1>
        </div>
        <div class="container d-flex">
            <div class="side-box">
                <FilterList @onApply="fetch" @onChange="fetch"/>
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
      let {query, params} = this.$route;
      this.$store.commit('setFromQuery', {...query, ...params});
      this.fetch();
    },
    methods: {
      fetch(resultsOnly = false) {
        this.$store.dispatch('getQuery').then(fetchParams => {
          let {city = '', ...query} = fetchParams;
          this.$router.replace({name: 'vacancies', params: {city:'msk'},query});
          this.$store.dispatch('fetchVacancies', fetchParams);
          if (!resultsOnly)
            this.$store.dispatch('fetchFilter', fetchParams);
        });
      },
      changeText(text) {
        this.$store.dispatch('changeSearchText', text);
        this.fetch();
      },
      changePage(page) {
        this.$store.dispatch('changePage', page);
        this.fetch(true);
      },
      changeSize(size) {
        this.$store.dispatch('changeSize', size);
        this.fetch(true);
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