<template>
  <div ref="selectbox" class="select-box-wrap" @blur="test">
    <slot name="textbox"/>
    <div class="select-box" :class="[ready ? 'opened' : '']">
      <slot name="dropitem"/>
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
      }
    },
    methods: {
      documentClick(e) {
        let el = this.$refs.selectbox;
        let target = e.target;
        if ((el !== target) && !el.contains(target)) {
          console.log('external click')
        }
      },
      test() {
        console.log('select box hide')
      }
    },
    computed: {
      ready: function () {
        return this.hints.length > 0 && this.isOpen
      }
    }
  }
</script>

