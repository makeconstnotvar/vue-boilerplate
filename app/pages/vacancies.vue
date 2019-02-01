<template>
  <div>
    <Search @onSearch="changeText" :text="searchText"></Search>
    <div class="container list-header mb-10">
      <h1>Поиск вакансий
        <Progress :visible="isProgress"/>
      </h1>
    </div>
    <div class="container d-flex">
      <div class="side-box">
        <FilterList @onApply="refetch" @onChange="refetch" @onClear="clear"/>
      </div>
      <div class="grow">
        <div class="unselect mb-10">
          <Sorting :activeSort="activeSort" @changeSort="changeSort"/>
          <Period :activePeriod="activePeriod" @changePeriod="changePeriod"/>
        </div>
        <VacancyItem :key="vacancy.id" v-for="vacancy in vacancies" :vacancy="vacancy"/>
        <Pager :total="total" @changePage="changePage" @changeSize="changeSize" :current="page" :size="pageSize"/>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex';
  import FilterList from '../controls/filter';
  import Pager from '../controls/pager';
  import Search from '../controls/search';
  import VacancyItem from '../controls/vacancy-item';
  import Progress from "../controls/progress";
  import Sorting from "../controls/sorting";
  import Period from "../controls/period";

  export default {
    name: 'PageVacancies',
    components: {Period, Progress, FilterList, Pager, Search, VacancyItem, Sorting},
    created() {
      let {query, params} = this.$route;
      this.updateStoreFromUrl(query, params);
      this.$store.dispatch('getQuery').then(fetchParams => {
        this.fetch({...fetchParams, ...query, ...params});
      });
    },
    methods: {
      updateStoreFromUrl(query, params) {
        let {sort, searchText, pr} = query;
        if (sort)
          this.$store.commit('changeSort', sort);
        if (searchText)
          this.$store.commit('changeSearchText', searchText);
        if (pr)
          this.$store.commit('changePeriod', pr);
      },
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
      clear() {
        this.$store.commit('reset');
        this.refetch();
      },
      changeText(text) {
        this.$store.commit('changeSearchText', text);
        this.refetch();
      },
      changePage(page) {
        this.$store.commit('changePage', page);
        this.refetch(true);
      },
      changeSort(sort) {
        console.log(sort);
        this.$store.commit('changeSort', sort);
        this.refetch(true);
      },
      changePeriod(period) {
        console.log(period);
        this.$store.commit('changePeriod', period);
        this.refetch(true);
      },
      changeSize(size) {
        this.$store.commit('changeSize', size);
        this.refetch(true);
      }
    },
    computed: {
      ...mapState({
        vacancies: state => state.vacancies.items,
        total: state => state.vacancies.count,
        page: state => state.filter.page,
        pageSize: state => state.filter.pageSize,
        activePeriod: state => state.filter.period,
        activeSort: state => state.filter.sort,
        searchText: state => state.filter.searchText,
        isProgress: state => state.resultsProgress,
      })

    }
  }
</script>