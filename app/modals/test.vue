<template>
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLiveLabel">Modal title</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Woohoo, you're reading this text in a modal!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" @click="hide">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: 'ModalTest',
    computed: {
      ...mapState({
        isVisible: state => state.modals.isVisible,
      })
    },
    methods: {
      hide() {
        console.log('hideModal');
        this.$store.commit('hideModal');
      }
    }
  }
</script>
