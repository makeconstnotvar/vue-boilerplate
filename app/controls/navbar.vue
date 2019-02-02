<template>
  <nav class="nav-bar shadow">
    <div class="container d-flex align-items-center">
      <router-link class="nav-brand mr-20" to="/">JOBRUM</router-link>
      <i class="fas fa-chevron-right mr-20"></i>
      <router-link v-for="item in items" class="nav-item mr-20" :to="item.link">{{item.name}}</router-link>
      <div class="d-flex ml-auto">
        <router-link class="nav-item" to="/login">Логин</router-link>
        <router-link class="nav-item" to="/registration">Регистрация</router-link>
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
    }
  }
</script>
