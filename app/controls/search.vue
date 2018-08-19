<template>
    <div class="search col center">
        <div class="container">
            <div class="row">
                <input class="w-50" @keyup.enter="search" v-model="searchText" type="text" placeholder="Поисковый запрос">
                <button @click="search">Поиск</button>
            </div>
            <div class="row">
                Ваш город: <span :text="currentCity.name"></span>
                <router-link to="/modal/city">изменить</router-link>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'Search',
    props: ['text', 'city'],
    data() {
      return {
        searchText: this.text || '',
        currentCity: this.city || {name: 'не выбран'}
      }
    },
    methods: {
      search(e) {
        this.$emit('onSearch', this.searchText);
      }
    }
  };
</script>