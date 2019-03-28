<template>
  <div class="modal-content">
    <div class="modal-header">
      <h2 class="modal-title">Введите логин и пароль</h2>
      <a class="close" @click="hide">
        <i class="fas fa-times"></i>
      </a>
    </div>
    <div class="modal-body">
      <div class="row">
        <div class="grow">
          <div class="mb-3">
            <input class="form-control" type="text" placeholder="Логин" v-model="login">
          </div>
          <div class="mb-3">
            <input class="form-control" type="text" placeholder="Пароль" v-model="password">
          </div>
          <div class="form-checkox">
            <label><input type="checkbox" v-model="remember">Запомнить меня</label>
          </div>
        </div>
        <div class="login-social">
          <h5>Вход через соцсети</h5>
          <div>
      
          </div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" @click="doLogin">Вход</button>
      <button type="button" class="btn btn-secondary" @click="showRegistration">Регистрация</button>
    </div>
  </div>
</template>

<script>
  import ModalRegistration from "../modals/registration";
  
  export default {
    name: 'ModalLogin',
    data: function () {
      return {
        login: '',
        password: '',
        remember: false
      }
    },
    methods: {
      doLogin() {
        let {login, password, remember} = this;
        this.$store.dispatch('login', {login, password, remember});
      },
      hide() {
        this.$hideModal();
      },
      showRegistration() {
        this.$showModal(ModalRegistration);
      }
    }
  }
</script>
