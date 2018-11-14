<template>
  <div class="select-box-wrap">
    <div class="select-box">
      <div class="select-box-item" v-for="item in items" @click="select(item)" :text="item"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Suggest",
    props: ['items'],
    data() {
      return {
        isOpen: false,
        current: -1,
      }
    },
    methods: {
      open() {
        this.isOpen = true;
      },
      close() {
        this.isOpen = false;
      },
      select(item) {
        this.close();
        this.$emit('itemSelected', item)
      }
    }
  }
</script>

