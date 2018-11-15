<template>
  <div class="select-box-wrap">
    <slot/>
    <div class="select-box" :class="[ready?'opened':'']">
      <div class="select-box-item" v-for="hint in hints" @click="select(hint)" v-text="hint"></div>
    </div>
  </div>
</template>

<script>


  export default {
    name: 'SelectBox',
    props: ['hints', 'isOpen'],
    data() {
      return {
        current: -1,
        //ready: false
      }
    },
    methods: {
      select(hint) {
        this.hints.length = 0;
        this.$emit('changeHint', hint)
      }
    },
    computed: {
      ready: function () {
        return this.hints.length > 0 && this.isOpen
      }
    }
  }
</script>

