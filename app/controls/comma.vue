<template>
  <span>
  <slot/><span v-if="mode==='after' && index+1 !== total">, </span>
  </span>
</template>
<script>
  export default {
    name: "Comma",
    props: {
      index: {
        type: Number,
        default: 0
      },
      total: {
        type: Number,
        default: Infinity
      },
      mode: {
        type: String,
        default: 'after',
        validator(value) {
          return value === 'after' || value === 'before'
        }
      }
    }
  }
</script>
