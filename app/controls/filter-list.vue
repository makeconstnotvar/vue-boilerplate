<template>
  <div class="filter">
    <button>Применить</button>
    <div class="filter-item col" v-for="item in items">
      <label v-for="possibleValue in item.possibleValues">
        <input :type="item.mode" v-model="item.selected" :value="possibleValue.value" @change="change(item)">
        {{possibleValue.name}} ({{possibleValue.count}})</label>
    </div>
  </div>
</template>
<style lang="scss">
  .filter-item {
    border: 1px solid #efefef;
    border-bottom: none;
    padding: 10px;
    user-select: none;
    &:last-child {
      border-bottom: 1px solid #efefef;
    }
  }
</style>
<script>
  import {mapState} from 'vuex';
  
  export default {
    name: 'FilterList',
    mounted() {
      console.log("Filter mounted")
    },
    computed: {
      ...mapState({
        items: state => state.filter.items,
      })
    },
    methods: {
      change(item) {
        this.$store.dispatch('changeItem', item)
      }
    }
  }
</script>