<template>
  <div class="filter">
    <button @click="apply">Применить</button>
    <button @click="clear">Очистить</button>
    <div class="filter-item col" v-for="item in items">
      <div class="filter-title">{{item.title}}</div>
      <label v-for="possibleValue in item.possibleValues">
        <input :type="item.mode" v-model="item.selected" :value="possibleValue.value" @change="change(item)">
        {{possibleValue.name}}
        <Color v-if="possibleValue.color" :color="possibleValue.color"/>
        ({{possibleValue.count}})</label>
      <Extender :item="item" @onChange="change" v-if="item.extender"/>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import Color from './color';
  import Extender from './extender';
  
  
  export default {
    name: 'FilterList',
    components: {Color, Extender},
    computed: {
      ...mapState({
        items: state => state.filter.items,
      })
    },
    methods: {
      change(item) {
        this.$store.commit('changeItem', item);
        this.$emit('onChange')
      },
      apply() {
        this.$emit('onApply')
      },
      clear() {
        this.$emit('onClear')
      },
    }
  }
</script>