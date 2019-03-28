<template>
  <div class="modal-content">
    <div class="modal-header">
      <h1>Регистрация</h1>
    </div>
    <div class="modal-body">
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary">Вход</button>
      <button type="button" class="btn btn-secondary" @click="hide">Close</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ModalRegistration',
    methods: {
      hide() {
        this.$hideModal();
      }
    }
  }
</script>
