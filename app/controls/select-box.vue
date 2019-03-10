<template>
  <div ref="selectbox" class="select-box-wrap">
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
    destroyed() {
      document.removeEventListener('click', this.documentClick)
    },
    methods: {
      documentClick(e) {
        let el = this.$refs.selectbox;
        let target = e.target;
        if ((el !== target) && !el.contains(target)) {
          this.$emit('onClose');
        }
      }
    },
    computed: {
      ready: function () {
        console.log('ready check');
        let isReady = this.hints.length > 0 && this.isOpen;
        if (isReady)
          document.addEventListener('click', this.documentClick);
        else
          document.removeEventListener('click', this.documentClick)
        return isReady;
      }
    }
  }
</script>

