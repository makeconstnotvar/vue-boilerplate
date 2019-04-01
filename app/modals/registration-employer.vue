<template>
  <div class="modal-content">
    <div class="modal-header">
      <h2>Регистрация <span class="dashed" @click="showRegistrationSeeker">соискателя</span> | <span>компании</span></h2>
      <a class="close" @click="hide">
        <i class="fas fa-times"></i>
      </a>
    </div>
    <div class="modal-body">
      <div class="row">
        <div class="grow">
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
            <select class="form-control" v-model="time">
              <option v-for="t in times" :value="t.value">{{ t.text }}</option>
            </select>
          </div>
        </div>
        <div class="login-social text-mini">
          Для того чтобы зарегистрировать компанию, вы можете связаться с нашими менеджерами по телефону +7 (495) 236-76-72. Или вы можете заказать обратный звонок.
        </div>
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
        times: [
          {text: 'Удобное время звонка', value: null},
          {text: '9:00 - 11:00', value: '9:00 - 11:00'},
          {text: '11:00 - 13:00', value: '11:00 - 13:00'},
          {text: '13:00 - 15:00', value: '13:00 - 15:00'},
          {text: '15:00 - 17:00', value: '15:00 - 17:00'},
          {text: '17:00 - 19:00', value: '17:00 - 19:00'},
        ],
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
