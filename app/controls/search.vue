<template>
  <div class="container d-flex align-self-center align-items-center">
    <div class="w-60 pr-20">
      <div class="search-label white mb-1">Ключевые слова</div>
      <SelectBox class="mb-1" :hints="hints" :isOpen="isHintsOpen" @onClose="hideHints">
        <template slot="textbox">
          <input class="form-control" @keyup.enter="search" @keyup="showHints" v-model="searchText" type="text" placeholder="Поисковый запрос">
        </template>
        <template slot="dropitem">
          <div class="select-box-item" v-for="hint in hints" @click="changeHint(hint)" v-text="hint"></div>
        </template>
      </SelectBox>
      <div class="white">Примеры:
        <template v-for="(sample,idx) in samples">
          <span class="dashed hover-dark" @click="setSample(sample)">{{sample}}</span>
          <Comma :index="idx" :total="samples.length"></Comma>
        </template>
      </div>
    </div>
    <div class="d-flex w-40 align-items-center">
      <div class="flex-grow-1 pr-20">
        <div class="search-label white mb-1">Город</div>
        <input class="form-control mb-1" v-model="selectedCity.name" @click="showModalCity" type="text" placeholder="Название города">
        <div class="white ">Выбрать: <span @click="showModalCity" class="dashed hover-dark">город</span></div>
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
  import Comma from './comma';
  import _ from 'lodash';

  export default {
    name: 'Search',
    props: ['text', 'page'],
    components: {SelectBox, Comma},
    data() {
      return {
        isHintsOpen: false,
        currentPath: this.$route.name,
        searchText: this.text || '',
        samples: ['курьер', 'охранник', 'тестировщик']
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
        this.$store.dispatch('fetchHits', this.searchText).then(() => {
          this.isHintsOpen = true;
        })
      }, 300),
      hideHints() {
        this.isHintsOpen = false;
      },
      changeHint(hint) {
        this.isHintsOpen = false;
        this.searchText = hint;
      },
      showModalCity() {
        console.log('модал города')
      },
      setSample(text) {
        this.searchText = text;
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