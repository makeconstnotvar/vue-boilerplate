<template>
  <div class="modal-content">
    <div class="modal-header">
      <h2>Регистрация <span class="dashed" @click="showRegistrationSeeker">соискателя</span> | <span>компании</span></h2>
      <a class="close" @click="hide">
        <i class="fas fa-times"></i>
      </a>
    </div>
    <div class="modal-body">
      <div class="mb-3">
        <input class="form-control" type="text" placeholder="Как к вам обратиться?" v-model="name">
      </div>
      <div class="mb-3">
        <input class="form-control" type="text" placeholder="+7 (495) 123-45-67" v-model="phone">
      </div>
      <div class="mb-3">
        <input class="form-control" type="email" placeholder="Электронная почта" v-model="email">
      </div>
      <div class="mb-3">
        <select class="form-control" placeholder="Удобное время звонка" v-model="time">

        </select>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" @click="doRegistration">Перезвоните мне</button>
      <button type="button" class="btn btn-secondary" @click="showLogin">Логин</button>
    </div>
    <div class="reg-info text-mini">
      Нажимая «Перезвоните мне», вы подтверждаете, что ознакомлены, полностью согласны и принимаете условия «Политики конфиденциальности»
    </div>
  </div>
</template>

<script>
  import ModalLogin from "../modals/login";
  import ModalRegistrationSeeker from "../modals/registration-seeker";

  export default {
    name: 'ModalRegistrationEmployer',
    data: function () {
      return {
        name: '',
        phone: '',
        email: '',
        time: null,
        times: [],
      }
    },
    methods: {
      hide() {
        this.$hideModal();
      },
      showLogin() {
        this.$showModal(ModalLogin);
      },
      showRegistrationSeeker() {
        this.$showModal(ModalRegistrationSeeker);
      },
      doRegistration() {
        let {firstName, lastName, email, password1, password2} = this;
        this.$store.dispatch('registration', {firstName, lastName, email, password1, password2});
      }
    }
  }
</script>
