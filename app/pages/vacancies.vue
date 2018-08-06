<template>
  <div class="container">
    <h1>Список вакансий</h1>
    <div class="row">
      <div class="side-box">
        <FilterList/>
      </div>
      <div class="grow">
        <div v-for="vacancy in vacancies">{{vacancy.title}}</div>
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
  
  
  export default {
    name: 'Vacancies',
    components: {FilterList},
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
        vacancies: state => state.vacancies.items
      })
    }
  }
</script>