<template>
    <div class="container">
        <h1>Выбор города</h1>
        <div>Текущий: <span :text="currentCity.name"></span></div>
        <input @input="search" v-model="searchText" type="text" placeholder="введите первый буквы названия города">
        <div class="search-dropdown-box" ref="searchdropdownbox">
            <div class="search-dropdown" :class="{opened:isOpen}">
                <div class="search-dropdown-item"  v-for="drop in drops" @click="apply(drop)">{{drop.name}}</div>
            </div>
        </div>

        <button @click="apply">Выбрать</button>
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
      return {
        searchText: '',
        isOpen: false
      }
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
      clickOutside(event) {
        let el = this.$refs.searchdropdownbox;
        if (el == event.target || el.contains(event.target)) {
          this.apply();
        } else {
          this.close();
        }
      },
      apply(drop) {
        console.log('apply');
        this.$store.dispatch('setSelected', drop);
        this.close();
      },
      search() {
        this.open();
        this.$store.dispatch('searchCity', this.searchText);
      },
      open() {
        this.$store.dispatch('clearDrops');
        this.isOpen = true;
        document.body.addEventListener('click', this.clickOutside)
      },
      close() {
        this.isOpen = false;
        document.body.removeEventListener('click', this.clickOutside)
      }

    }
  }
</script>