<template>
  <section>
    <div class="modal-backdrop fade" :style="{display:isVisible?'block':'none'}"></div>
    <div class="modal fade" tabindex="-1" :style="{display:isVisible?'block':'none'}">
      <div class="modal-dialog">
        <div class="modal-content">
          <slot/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: "Modals",
    computed: {
      ...mapState({
        isVisible: state => state.modals.isVisible,
      })
    }
  }
</script>
