<template>
  <div class="income-from-to">
    <span v-if="from && to">от</span>
    <span v-if="from">{{from}}</span>
    <span v-if="from && to">до</span>
    <span v-if="to">{{to}}</span>
    <span v-if="(from || to) && currency">{{currency}}</span>
  </div>
</template>

<script>
  export default {
    name: "Income",
    props: ['from', 'to', 'currency']
  }
</script>
