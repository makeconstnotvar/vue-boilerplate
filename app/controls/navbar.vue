<template>
    <nav>
        <div class="container">
            <div class="row">
                <router-link class="nav-item undecorate" to="/">Главная</router-link>
                <router-link class="nav-item undecorate" to="/info">Инфо</router-link>
                <router-link class="nav-item undecorate" to="/login">Логин</router-link>
                <router-link class="nav-item undecorate" to="/vacancies">Вакансии</router-link>
            </div>
        </div>
    </nav>
</template>
<script>
  export default {name: 'Navbar'}
</script>
