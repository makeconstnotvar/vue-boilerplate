<template>
    <span class="color-box" :style="{backgroundColor:color}"></span>
</template>
<script>
  export default {
    name: 'Color',
    props: ['color']
  }
</script>