<template>
  <nav class="nav-bar shadow">
    <div class="container d-flex align-items-center">
      <router-link class="nav-brand hover-high mr-20" to="/">JOBRUM</router-link>
      <i class="fas fa-chevron-right mr-20"></i>
      <router-link :key="idx" v-for="(item,idx) in items" class="nav-item hover-high mr-20" :to="item.link">{{item.name}}</router-link>
      <div class="d-flex ml-auto">
        <span class="nav-item hover-high mr-20" @click="showLogin">Логин</span>
        <router-link class="nav-item hover-high" to="/registration">Регистрация</router-link>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        items: [
          {name: 'Вакансии', link: '/vacancies'},
          {name: 'Кандидаты', link: '/resumes'},
          {name: 'Фрилансеры', link: '/resumes'},
          {name: 'Проекты', link: '/resumes'},
          {name: 'Компании', link: '/resumes'},
        ]
      }
    },
    methods: {
      showLogin() {
        this.$store.commit('showModal');
      }
    }
  }
</script>
