<template>
    <div>
        <Search @onSearch="toSearch"></Search>
        <div class="container">
            <a @click="toEnter">Создать резюме</a>
            <a @click="toLoad">Загрузить резюме</a>
            <div v-if="showEnter">
                <input class="w-50" v-model="email" type="text" placeholder="email">
                <input class="w-50" v-model="password" type="text" placeholder="password">
                <button @click="enter">Создать</button>
            </div>
            <div v-if="showLoad">
                <label for="resumeUrl">Ссылка на ваше резюме</label>
                <input id="resumeUrl" class="w-50" v-model="email" type="text" placeholder="url">
                <span class="dashed">Например: https://www.superjob.ru/resume/massazhistka-39163216.html</span>
                <input class="w-50" v-model="password" type="text" placeholder="email">
                <button @click="load">Загрузить</button>
            </div>
        </div>
        <div class="container">
            <h2>Профобласти</h2>
            <div v-for></div>
        </div>
    </div>
</template>
<script>
  import Search from 'controls/search'

  export default {
    name: 'PageHome',
    components: {Search},
    data: function () {
      return {
        showEnter: true,
        showLoad: false,
        email: '',
        password: ''
      }
    },
    methods: {
      toSearch() {

      },
      enter() {

      },
      load() {

      },
      toEnter(text) {
        this.showLoad = false;
        this.showEnter = true;
      },
      toLoad(text) {
        this.showEnter = false;
        this.showLoad = true;
      }
    }
  };
</script>