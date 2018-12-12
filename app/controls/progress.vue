<template>
        <i v-if="visible" class="fas fa-cog fa-spin"></i>
</template>

<script>
  export default {
    name: "Progress",
          props: ['visible']
  }
</script>
