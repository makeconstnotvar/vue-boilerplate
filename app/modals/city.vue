<template>
    <div class="container">
        <h2>Выбор города</h2>
        <input type="text" placeholder="введите первый буквы названия города">
        <button @click="apply"> Выбрать</button>
    </div>
</template>
<script>

  export default {
    name: 'ModalCity',
    props: ['city'],
    data() {
      return {
        cities: [],
        currentCity: this.city || {name: 'не выбран'}
      }
    }
  }
</script>