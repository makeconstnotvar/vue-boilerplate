import Vue from "vue";

export default Vue.component('login', {
    template: `
<div>
<h2>Логин</h2>
<label for="user"></label>
<input id="user" type="text" placeholder="Логин" >
<label for="pass"></label>
<input id="pass" type="text" placeholder="Пароль">
<button>Вход</button>
</div>
`
})