<template>
  <div class="container d-flex align-self-center align-items-center">
    <div class="w-60 pr-20">
      <div>Ключевые слова</div>
      <SelectBox :hints="hints" :isOpen="isHintsOpen">
        <template slot="textbox">
          <input class="form-control" @keyup.enter="search" @keyup="showHints" v-model="searchText" type="text" placeholder="Поисковый запрос">
        </template>
        <template slot="dropitem">
          <div class="select-box-item" v-for="hint in hints" @click="changeHint(hint)" v-text="hint"></div>
        </template>
      </SelectBox>
      <div>Примеры: <span class="dashed">курьер</span>,<span class="dashed">охранник</span>,<span class="dashed">тестировщик</span></div>
    </div>
    <div class="d-flex w-40 align-items-center">
      <div class="flex-grow-1 pr-20">
        <div>Город</div>
        <input class="form-control" v-model="selectedCity.name" @click="showModalCity" type="text" placeholder="Название города">
        <div>Выбрать: <span @click="showModalCity" class="dashed">город</span></div>
      </div>
      <div>
        <button class="btn btn-primary" @click="search">Поиск</button>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex';
  import SelectBox from './select-box';
  import _ from 'lodash';

  export default {
    name: 'Search',
    props: ['text', 'page'],
    components: {SelectBox},
    data() {
      return {
        isHintsOpen: false,
        currentPath: this.$route.name,
        searchText: this.text || ''
      }
    },
    watch: {
      '$route'(to, from) {
        this.currentPath = to.name;
      }
    },
    methods: {
      search(e) {
        this.$emit('onSearch', this.searchText);
      },
      showHints: _.debounce(function () {
        this.isHintsOpen = true;
        this.$store.dispatch('fetchHits', this.searchText)
      }, 300),
      changeHint(hint) {
        this.isHintsOpen = false;
        this.searchText = hint;
      },
      showModalCity() {
        console.log('модал города')
      }
    },
    computed: {
      ...mapState({
        selectedCity: state => state.filter.selectedCity,
        hints: state => state.vacancies.hints
      })
    }
  };
</script>