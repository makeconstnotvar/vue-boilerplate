<template>
    <div class="filter">
        <button>Применить</button>
        <div class="filter-item col" v-for="item in items">
            <div class="filter-title">{{item.title}}</div>
            <label v-for="possibleValue in item.possibleValues">
                <input :type="item.mode" v-model="item.selected" :value="possibleValue.value" @change="change(item)">
                 {{possibleValue.name}} <Color v-if="possibleValue.color" :color="possibleValue.color"/> ({{possibleValue.count}})</label>
        </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex';
  import Color from 'controls/color';

  export default {
    components: {Color},
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