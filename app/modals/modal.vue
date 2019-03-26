<template>
  <section>
    <div class="modal-backdrop" :class="{'show':isVisible}" :style="{display:isVisible?'block':'none'}"></div>
    <div class="modal" tabindex="-1" :style="{display:isVisible?'block':'none'}" @click.self="hide">
      <div class="modal-dialog">
        <div id="modal-root"/>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: "Modal",
    computed: {
      ...mapState({
        isVisible: state => state.modals.isVisible,
      })
    },
    methods: {
      test(params) {
        console.log('modals');
        console.log(params);
      },
      hide() {
        console.log('hideModal');
        this.$store.commit('hideModal');

      }

    }
  }
</script>
