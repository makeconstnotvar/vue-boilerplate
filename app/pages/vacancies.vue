<template>
    <div>
        <Search @onSearch="changeText"></Search>
        <div class="container">
            <h1>Список вакансий
                <Progress/>
            </h1>
        </div>
        <div class="container d-flex">
            <div class="side-box">
                <FilterList @onApply="refetch" @onChange="refetch"/>
            </div>
            <div class="grow">
                <Sorting/>
                <VacancyItem :key="vacancy.id" v-for="vacancy in vacancies" :vacancy="vacancy"/>
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
  import Progress from "../controls/progress";
  import Sorting from "../controls/sorting";


  export default {
    name: 'PageVacancies',
    components: {Progress, FilterList, Pager, Search, VacancyItem,Sorting},
    created() {
      let {query, params} = this.$route;
      this.fetch({...query, ...params});
    },
    methods: {
      fetch(params, resultsOnly = false) {
        this.$store.dispatch('fetchVacancies', params);
        if (!resultsOnly)
          this.$store.dispatch('fetchFilter', params);
      },
      refetch(resultsOnly = false) {
        this.$store.dispatch('getQuery').then(fetchParams => {
          let {city = '', ...query} = fetchParams;
          this.$router.replace({name: 'vacancies', params: {city: city}, query});
          this.fetch(fetchParams, resultsOnly)
        });
      },
      changeText(text) {
        this.$store.dispatch('changeSearchText', text);
        this.refetch();
      },
      changePage(page) {
        this.$store.dispatch('changePage', page);
        this.refetch(true);
      },
      changeSize(size) {
        this.$store.dispatch('changeSize', size);
        this.refetch(true);
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