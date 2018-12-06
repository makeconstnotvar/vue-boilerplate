<template>
    <div class="container">
        <h1>Выбор города</h1>
        <div>Текущий: {{selectedCity.name}}</div>
        <input @input="search" v-model="searchText" type="text" placeholder="введите первый буквы названия города">
        <div class="search-dropdown-box" ref="searchdropdownbox">
            <div class="search-dropdown" :class="{opened:isOpen}">
                <div class="search-dropdown-item"  v-for="drop in drops" @click="apply(drop)">{{drop.name}}</div>
            </div>
        </div>

        <button @click="apply">Выбрать</button>
      <div class="cities">
        <span class="cities-item" v-for="city in cities" @click="apply(city)">{{city.name}} ({{city.count}})</span>
      </div>
    </div>
</template>
<script>
  import {mapState} from 'vuex';


  export default {
    name: 'ModalCity',
    data() {
      return {
        searchText: '',
        isOpen: false,
        from: this.$route.query.from || '/vacancies'
      }
    },
    created() {
      this.$store.dispatch('fetchCities');
    },
    computed: {
      ...mapState({
        cities: state => state.cities.items,
        drops: state => state.cities.drops,
        selectedCity: state => state.filter.selectedCity
      })
    },
    methods: {
      clickOutside(event) {
        //закрывает dropdown при клике за пределом dropdown
        let el = this.$refs.searchdropdownbox;
        if (el == event.target || el.contains(event.target)) {
          this.apply();
        } else {
          this.close();
        }
      },
      apply(drop) {
        this.$store.commit('changeSelectedCity', drop);
        this.close();
        this.$store.dispatch('getQuery').then(fetchParams => {
          let {city = '', ...query} = fetchParams;
          this.$router.push({name: this.from, params: {city: drop.code}, query});
        });
      },
      search() {
        this.open();
        this.$store.dispatch('searchCity', this.searchText);
      },
      open() {
        this.$store.commit('clearSearch');
        document.body.addEventListener('click', this.clickOutside);
        this.isOpen = true;
      },
      close() {
        document.body.removeEventListener('click', this.clickOutside);
        this.isOpen = false;
      }
    }
  }
</script>