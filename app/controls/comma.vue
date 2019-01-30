<template>
  <span v-if="index !== 0">, </span>
</template>
<script>
  export default {
    name: "Comma",
    props: ['index']
  }
</script>