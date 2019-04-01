<template>
  <div class="modal-content">
    <div class="modal-header">
      <h2>Создать резюме</h2>
      <a class="close" @click="hide">
        <i class="fas fa-times"></i>
      </a>
    </div>
    <div class="modal-body">
      <div class="mb-3">
        <input class="form-control" v-model="email" type="email" placeholder="email">
      </div>
      <input class="form-control" v-model="password" type="password" placeholder="password">
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" @click="next">Создать</button>
      <button type="button" class="btn btn-secondary" @click="hide">Отменить</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CreateResumeModal",
    data: function () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      hide() {
        this.$hideModal();
      },
      next() {

      }
    }
  }
</script>

<style scoped>

</style>