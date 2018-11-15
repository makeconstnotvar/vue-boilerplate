<template>
  <div class="search col center">
    <div class="container">
      <div class="row">
        <SelectBox :hints="hints" :isOpen="isHintsOpen" @changeHint="changeHint">
          <input @keyup.enter="search" @keyup="showHints" v-model="searchText" type="text" placeholder="Поисковый запрос">
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
    props: ['text'],
    components: {SelectBox},
    data() {
      return {
        isHintsOpen: false,
        currentPath: this.$route.fullPath,
        searchText: this.text || ''
      }
    },
    watch: {
      '$route'(to, from) {
        this.currentPath = to.fullPath;
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