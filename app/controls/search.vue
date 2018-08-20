<template>
    <div class="search col center">
        <div class="container">
            <div class="row">
                <input class="w-50" @keyup.enter="search" v-model="searchText" type="text" placeholder="Поисковый запрос">
                <button @click="search">Поиск</button>
            </div>
            <div class="row">
                Ваш город: "{{selectedCity.name}}" <router-link :to="`/modal/city?from=${currentPath}`">изменить</router-link>
            </div>
        </div>
    </div>
</template>
<script>
  import {mapState} from 'vuex';

  export default {
    name: 'Search',
    props: ['text', 'city'],
    data() {
      return {
        currentPath:  this.$route.fullPath,
        searchText: this.text || ''
      }
    },
    watch:{
      '$route' (to, from) {
        this.currentPath = to.fullPath;
      }
    },
    methods: {
      search(e) {
        this.$emit('onSearch', this.searchText);
      }
    },
    computed: {
      ...mapState({
        selectedCity: state => state.filter.selectedCity
      })
    }
  };
</script>