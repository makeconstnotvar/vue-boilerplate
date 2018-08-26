<template>
    <nav>
        <div class="container">
            <div class="d-flex">
                <router-link class="nav-item" to="/">Главная</router-link>
                <router-link class="nav-item" to="/vacancies">Вакансии</router-link>
                <div class="d-flex ml-auto">
                    <router-link class="nav-item" to="/login">Логин</router-link>
                    <router-link class="nav-item" to="/registration">Регистрация</router-link>
                </div>
            </div>

        </div>
    </nav>
</template>
<script>
  export default {name: 'Navbar'}
</script>
