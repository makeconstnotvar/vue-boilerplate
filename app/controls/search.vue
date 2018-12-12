<template>
  <div class="search col center">
    <div class="container">
      <div class="row">
        <SelectBox :hints="hints" :isOpen="isHintsOpen">
          <template slot="textbox">
            <input @keyup.enter="search" @keyup="showHints" v-model="searchText" type="text" placeholder="Поисковый запрос">
          </template>
          <template slot="dropitem">
            <div class="select-box-item" v-for="hint in hints" @click="changeHint(hint)" v-text="hint"></div>
          </template>
        </SelectBox>
        <button @click="search">Поиск</button>
      </div>
      <div class="row">
        Ваш город: "{{selectedCity.name}}"
        <router-link :to="`/modal/city?from=${currentPath}`">изменить</router-link>
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