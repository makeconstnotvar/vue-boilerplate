<template>
        <i v-if="isProgress" class="fas fa-cog fa-spin"></i>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    name: "Progress",
    computed:{
      ...mapState({
        isProgress: state => state.resultsProgress,
      })
    }
  }
</script>
