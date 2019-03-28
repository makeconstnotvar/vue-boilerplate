<template>
  <div class="extender">
    <a class="dashed" @click="toggleHint(item)" v-if="!item.extender.edit">{{item.extender.name}}</a>
    <SelectBox :hints="item.extender.hints" :isOpen="item.extender.open" v-if="item.extender.edit">
      <template slot="textbox">
        <input ref="textbox" @keyup="showHints(item)" v-model="item.extender.searchText" type="text">
        <Progress :visible="item.extender.progress"/>
      </template>
      <template slot="dropitem">
        <div class="select-box-item" v-for="hint in item.extender.hints" @click="changeHint(item, hint.code)" v-text="hint.name"></div>
      </template>
    </SelectBox>
  </div>
</template>

<script>
  import SelectBox from './select-box';
  import ResultsProgress from '../controls/progress/results';
  import _ from 'lodash';

  export default {
    name: "Extender",
    components: {SelectBox, ResultsProgress},
    props: ['item', 'params'],
    methods: {
      toggleHint(item) {
        item.extender.edit = true;
        item.extender.progress = true;
        let {fetch} = item.extender;
        this.$store.commit('changeItem', item);
        this.$store.dispatch('fetchHints', {fetch}).then(() => {
          item.extender.open = true;
          item.extender.progress = false;
          let t = this.$store.commit('changeItem', item);
          let {input} = this.$refs.textbox;
          input.focus();
        });
      },
      showHints: _.debounce(function (item) {
        let {fetch, searchText} = item.extender;
        this.$store.dispatch('fetchHints', {fetch, params: {searchText}})
      }, 300),
      changeHint(item, selected) {
        item.selected = selected;
        item.extender.edit = false;
        item.extender.open = false;
        this.$store.commit('changeItem', item);
        this.$emit('onChange')
      }
    }
  }
</script>
