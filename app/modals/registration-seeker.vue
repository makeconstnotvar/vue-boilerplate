<template>
  <div class="modal-content">
    <div class="modal-header">
      <h2>Регистрация <span>компании</span> | <span class="dashed" @click="showRegistrationEmployer">соискателя</span></h2>
      <a class="close" @click="hide">
        <i class="fas fa-times"></i>
      </a>
    </div>
    <div class="modal-body">
      <div class="mb-3">
        <input class="form-control" type="text" placeholder="Имя" v-model="firstName">
      </div>
      <div class="mb-3">
        <input class="form-control" type="text" placeholder="Фамилия" v-model="lastName">
      </div>
      <div class="mb-3">
        <input class="form-control" type="email" placeholder="Электронная почта" v-model="email">
      </div>
      <div class="mb-3">
        <input class="form-control" type="password" placeholder="Пароль" v-model="password1">
      </div>
      <div class="mb-3">
        <input class="form-control" type="password" placeholder="Повторите пароль" v-model="password2">
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" @click="doRegistration">Регистрация</button>
      <button type="button" class="btn btn-secondary" @click="showLogin">Логин</button>
    </div>
    <div class="reg-info text-mini">
      Нажимая «Регистрация», вы подтверждаете, что ознакомлены, полностью согласны и принимаете условия «Соглашения об оказании услуг (оферты)» и «Соглашения на обработку персональных
      данных».
    </div>
  </div>
</template>

<script>
  import ModalLogin from "../modals/login";
  import ModalRegistrationEmployer from "../modals/registration-employer";

  export default {
    name: 'ModalRegistrationSeeker',
    data: function () {
      return {
        firstName: '',
        lastName: '',
        email: '',
        password1: '',
        password2: ''
      }
    },
    methods: {
      hide() {
        this.$hideModal();
      },
      showLogin() {
        this.$showModal(ModalLogin);
      },
      showRegistrationEmployer() {
        this.$showModal(ModalRegistrationEmployer);
      },
      doRegistration() {
        let {firstName, lastName, email, password1, password2} = this;
        this.$store.dispatch('registration', {firstName, lastName, email, password1, password2});
      }
    }
  }
</script>
