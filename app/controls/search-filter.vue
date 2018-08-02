<template>
  <div class="filter">
    <button>Применить</button>
    <div class="filter-item col" v-for="item in items">
      <label v-for="possibleValue in item.possibleValues">
        <input :type="item.mode" :name="item.key" :value="possibleValue" :checked="possibleValue.checked" @input="change($event, item)">{{possibleValue.name}} ({{possibleValue.count}})</label>
    </div>
  </div>
</template>
<style lang="scss">
  .filter {
    margin-right: 15px;
  }
  
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
    name: 'SearchFilter',
    mounted() {
      console.log("Filter mounted")
    },
    computed: {
      ...mapState({
        items: state => state.filter.items,
      })
    },
    methods:{
      change(event, item){
        let possibleValue = item.possibleValues.find(pv=>pv===event.target.value);
        possibleValue.checked = event.target.checked;
        this.$store.dispatch('changeItem',item)
      }
    }
  }
</script>