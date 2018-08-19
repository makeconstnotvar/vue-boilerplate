<template>
    <div class="container">
        <h2>Выбор города</h2>
        <input @input="search" v-model="searchText" type="text" placeholder="введите первый буквы названия города">
        <button @click="apply"> Выбрать</button>
        <div v-for="city in cities">
            {{city.name}} ({{city.count}})
        </div>
    </div>
</template>
<script>
  import {mapState} from 'vuex';

  export default {
    name: 'ModalCity',
    props: ['city'],
    data() {
      return {}
    },
    created() {
      this.$store.dispatch('fetchCities');
    },
    computed: {
      ...mapState({
        cities: state => state.cities.items,
        drops: state => state.cities.drops,
        currentCity: state => state.cities.selected
      })
    },
    methods: {
      apply() {
        console.log('apply')
      },
      search() {

        this.$store.dispatch('searchCity',this.searchText);
      }
    }
  }
</script>