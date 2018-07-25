<template>
    <nav>
        <div class="container container-fluid">
            <div class="row">
                <router-link class="nav-item undecorate" to="/">Главная</router-link>
                <router-link class="nav-item undecorate" to="/info">Инфо</router-link>
                <router-link class="nav-item undecorate" to="/login">Логин</router-link>
                <router-link class="nav-item undecorate" to="/vacancies">Вакансии</router-link>
            </div>
        </div>
    </nav>
</template>
<style lang="scss">
    nav {
        background-color: grey;
    }

    .nav-item {
        line-height: 40px;
        padding: 0 10px;
        color: white;
        transition: background-color 300ms;
        &:hover{
            background-color: darkgray;
            transition: background-color 300ms;
        }
    }
</style>
<script>


  export default {name: 'Navbar'}
</script>
