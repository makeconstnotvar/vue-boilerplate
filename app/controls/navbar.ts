import Vue from "vue";

export default Vue.component('navbar', {
    template: `
<div>
    <ul>
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/info">Инфо</router-link></li>
        <li><router-link to="/login">Логин</router-link></li>
    </ul>
</div>
`
})